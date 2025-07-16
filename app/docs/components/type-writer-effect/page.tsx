"use client";

import TypewriterEffect from "@/components/ui/type-writer-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";

const codeExample = `import TypewriterEffect from "@/components/ui/type-writer-effect";

export default function Demo() {
  return (
    <TypewriterEffect
      texts={["Hello, world!", "Text animation with Typewriter Effect."]}
      speed={80}
      deleteSpeed={40}
      delayBetween={1500}
      loop
      showCursor
      cursorChar="|"
      className="text-xl font-mono text-primary"
    />
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/type-writer-effect",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/type-writer-effect",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/type-writer-effect",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/type-writer-effect",
};

const manualCommands = {
  pnpm: "pnpm install motion",
  npm: "npm install motion",
  yarn: "yarn add motion",
  bun: "bun add motion",
};

export default function TypewriterEffectDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Typewriter Effect</h1>
        <p className="text-muted-foreground text-lg">
          The Typewriter Effect component allows you to display text with a
          typewriter animation, either one by one or multiple at once. Ideal for
          presentations, headings, or attention-grabbing texts.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo" className="flex-1 sm:flex-none">
            Live Demo
          </TabsTrigger>
          <TabsTrigger value="code" className="flex-1 sm:flex-none">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <TypewriterEffect
              texts={[
                "Hello, world!",
                "Text animation with Typewriter Effect.",
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={1500}
              loop
              showCursor
              cursorChar="|"
              className="text-xl font-mono text-primary"
            />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="rounded-lg p-4 text-sm font-mono relative mt-2 overflow-x-auto border shadow mb-6">
            <CodeBlock code={codeExample} />
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Install</h2>
        <Tabs defaultValue="cli">
          <TabsList className="mb-3">
            <TabsTrigger value="cli">CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="cli">
            <div className="mb-6">
              <TerminalBlock commands={cliCommands} />
            </div>
          </TabsContent>
          <TabsContent value="manual">
            <p className="text-base mb-4 font-bold">
              Install the following dependencies:
            </p>
            <div className="mb-6">
              <TerminalBlock commands={manualCommands} />
            </div>
            <p className="text-base mb-4 font-bold">
              Copy and paste the following code into your project:
            </p>
            <div className="mb-6">
              <CodeBlock
                code={` 'use client';
                  
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
`}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Usage</h2>
        <div className="bg-background border rounded-lg p-6 shadow mb-6">
          <CodeBlock code={codeExample} />
        </div>
      </div>
      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto bg-background border rounded-lg p-4 shadow">
          <table className="min-w-full text-sm border rounded-lg overflow-hidden">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-2 text-left">Prop</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">text</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">To display a single text.</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">texts</td>
                <td className="px-4 py-2 font-mono">string[]</td>
                <td className="px-4 py-2">
                  To display multiple texts sequentially.
                </td>
                <td className="px-4 py-2">[]</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">speed</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Typing speed (ms).</td>
                <td className="px-4 py-2">100</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">deleteSpeed</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Deletion speed (ms).</td>
                <td className="px-4 py-2">50</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">delayBetween</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Time between texts (ms).</td>
                <td className="px-4 py-2">2000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">loop</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Texts loop continuously.</td>
                <td className="px-4 py-2">true</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">showCursor</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Should the cursor blink?</td>
                <td className="px-4 py-2">true</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">cursorChar</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Cursor character.</td>
                <td className="px-4 py-2">&quot;|&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Extra Tailwind/custom classes.</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onComplete</td>
                <td className="px-4 py-2 font-mono">() =&gt; void</td>
                <td className="px-4 py-2">
                  Called when animation is complete.
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onTextChange</td>
                <td className="px-4 py-2 font-mono">
                  (currentText: string, index: number) =&gt; void
                </td>
                <td className="px-4 py-2">Called on every text change.</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">startDelay</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">
                  Delay before animation starts (ms).
                </td>
                <td className="px-4 py-2">0</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">preserveHeight</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Should height be preserved?</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">randomSpeed</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Should speed be random for each character?
                </td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">pauseOnHover</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Should animation pause on hover?</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">enableCharBounce</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Should characters animate with bounce?
                </td>
                <td className="px-4 py-2">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
