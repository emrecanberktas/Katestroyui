import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface TypewriterEffectProps {
  text?: string;
  texts?: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
  onTextChange?: (currentText: string, index: number) => void;
  startDelay?: number;
  preserveHeight?: boolean;
  randomSpeed?: boolean;
  pauseOnHover?: boolean;
  enableCharBounce?: boolean;
}

const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  texts = [],
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  className,
  onComplete,
  onTextChange,
  startDelay = 0,
  preserveHeight = false,
  randomSpeed = false,
  pauseOnHover = false,
  enableCharBounce = true,
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const allTexts = text ? [text] : texts;
  const currentText = allTexts[currentIndex] || "";

  const getRandomSpeed = (baseSpeed: number) =>
    randomSpeed ? baseSpeed + Math.random() * 50 - 25 : baseSpeed;

  useEffect(() => {
    if (allTexts.length === 0 || isPaused) return;

    const handleTyping = () => {
      const joinedText = displayedText.join("");

      if (!isDeleting && joinedText === currentText) {
        onTextChange?.(currentText, currentIndex);

        if (loop && allTexts.length > 1) {
          timeoutRef.current = setTimeout(
            () => setIsDeleting(true),
            delayBetween
          );
        } else {
          onComplete?.();
        }
        return;
      }

      if (isDeleting && joinedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % allTexts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) return prev.slice(0, -1);
          const nextChar = currentText[prev.length];
          return [...prev, nextChar];
        });
      }, getRandomSpeed(isDeleting ? deleteSpeed : speed));

      timeoutRef.current = timeout;
    };

    if (startDelay && displayedText.length === 0 && !isDeleting) {
      timeoutRef.current = setTimeout(handleTyping, startDelay);
    } else {
      handleTyping();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayedText, isDeleting, currentIndex, isPaused]);

  const handleMouseEnter = () => pauseOnHover && setIsPaused(true);
  const handleMouseLeave = () => pauseOnHover && setIsPaused(false);

  return (
    <span
      className={cn("inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
        minHeight: preserveHeight ? "1.2em" : undefined,
      }}
    >
      {displayedText.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -2 }}
          animate={{ y: 0 }}
          transition={{ duration: enableCharBounce ? 0.1 : 0 }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}

      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="ml-1 inline-block"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterEffect;
