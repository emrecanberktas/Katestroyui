import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Easing, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  width?: string;
  height?: string;
  flipDirection?: "horizontal" | "vertical";
  className?: string;
  disabled?: boolean;
  initialFlipped?: boolean;
  onFlip?: (isFlipped: boolean) => void;
  flipTrigger?: "click" | "hover" | "manual";
  duration?: number;
  easing?: Easing | Easing[];
}

export interface FlipCardHandle {
  flip: () => void;
  setFlipped: (flipped: boolean) => void;
  isFlipped: boolean;
}

const FlipCard = forwardRef<FlipCardHandle, FlipCardProps>(
  (
    {
      frontContent,
      backContent,
      width = "w-80",
      height = "h-96",
      flipDirection = "horizontal",
      className,
      disabled = false,
      initialFlipped = false,
      onFlip,
      flipTrigger = "click",
      duration = 0.6,
      easing = "easeInOut",
    },
    ref
  ) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipped);

    const handleFlip = () => {
      if (disabled || flipTrigger === "manual") return;
      const newFlippedState = !isFlipped;
      setIsFlipped(newFlippedState);
      onFlip?.(newFlippedState);
    };

    const handleMouseEnter = () => {
      if (flipTrigger === "hover" && !disabled) {
        setIsFlipped(true);
        onFlip?.(true);
      }
    };

    const handleMouseLeave = () => {
      if (flipTrigger === "hover" && !disabled) {
        setIsFlipped(false);
        onFlip?.(false);
      }
    };

    useImperativeHandle(
      ref,
      () => ({
        flip: () => {
          const newFlippedState = !isFlipped;
          setIsFlipped(newFlippedState);
          onFlip?.(newFlippedState);
        },
        setFlipped: (flipped: boolean) => {
          setIsFlipped(flipped);
          onFlip?.(flipped);
        },
        get isFlipped() {
          return isFlipped;
        },
      }),
      [isFlipped, onFlip]
    );

    const flipVariants = {
      horizontal: {
        front: {
          rotateY: isFlipped ? 180 : 0,
        },
        back: {
          rotateY: isFlipped ? 0 : -180,
        },
      },
      vertical: {
        front: {
          rotateX: isFlipped ? 180 : 0,
        },
        back: {
          rotateX: isFlipped ? 0 : -180,
        },
      },
    };

    return (
      <div
        className={cn(
          width,
          height,
          "perspective-1000",
          !disabled && flipTrigger === "click" && "cursor-pointer",
          className
        )}
        onClick={flipTrigger === "click" ? handleFlip : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute inset-0"
            variants={flipVariants[flipDirection]}
            animate="front"
            transition={{ duration, ease: easing }}
            style={{ backfaceVisibility: "hidden" }}
          >
            {frontContent}
          </motion.div>

          <motion.div
            className="absolute inset-0"
            variants={flipVariants[flipDirection]}
            animate="back"
            transition={{ duration, ease: easing }}
            style={{
              backfaceVisibility: "hidden",
              transform:
                flipDirection === "horizontal"
                  ? "rotateY(-180deg)"
                  : "rotateX(-180deg)",
            }}
          >
            {backContent}
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

FlipCard.displayName = "FlipCard";
export { FlipCard };
