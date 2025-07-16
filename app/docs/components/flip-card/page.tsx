"use client";

import { FlipCard, FlipCardHandle } from "@/components/ui/flip-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import React, { useRef } from "react";
import { TerminalBlock } from "@/components/terminal-block";

const codeExample = `import { FlipCard } from "@/components/ui/flip-card";
import React, { useRef } from "react";

export function Example() {
  const flipCardRef = useRef(null);

  return (
    <>
      <FlipCard
        ref={flipCardRef}
        width="w-64"
        height="h-80"
        frontContent={
          <div className="flex flex-col items-center justify-center h-full w-full bg-primary text-primary-foreground rounded-lg p-4">
            <span className="text-lg font-semibold">Front Side</span>
            <span className="text-sm mt-2">This is the front side of the card.</span>
          </div>
        }
        backContent={
          <div className="flex flex-col items-center justify-center h-full w-full bg-secondary text-secondary-foreground rounded-lg p-4">
            <span className="text-lg font-semibold">Back Side</span>
            <span className="text-sm mt-2">This is the back side of the card.</span>
          </div>
        }
        flipDirection="horizontal"
        flipTrigger="click"
      />
    </>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/flip-card",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/flip-card",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/flip-card",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/flip-card",
};

const manualCommands = {
  pnpm: "pnpm install motion",
  npm: "npm install motion",
  yarn: "yarn add motion",
  bun: "bun add motion",
};

export default function FlipCardDocs() {
  const flipCardRef = useRef<FlipCardHandle | null>(null);
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Flip Card</h1>
        <p className="text-muted-foreground text-lg">
          A card component that animates flipping between front and back, ideal
          for info cards, games, or interactive content.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <FlipCard
              ref={flipCardRef}
              width="w-64"
              height="h-80"
              frontContent={
                <div className="flex flex-col items-center justify-center h-full w-full bg-primary text-primary-foreground rounded-lg p-4">
                  <span className="text-lg font-semibold">Front Side</span>
                  <span className="text-sm mt-2">
                    This is the front side of the card.
                  </span>
                </div>
              }
              backContent={
                <div className="flex flex-col items-center justify-center h-full w-full bg-secondary text-secondary-foreground rounded-lg p-4">
                  <span className="text-lg font-semibold">Back Side</span>
                  <span className="text-sm mt-2">
                    This is the back side of the card.
                  </span>
                </div>
              }
              flipDirection="horizontal"
              flipTrigger="click"
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
        <Tabs defaultValue="manual">
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
                code={`import React, { useState, useImperativeHandle, forwardRef } from "react";
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

export { FlipCard };
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
                <td className="px-4 py-2 font-mono">frontContent</td>
                <td className="px-4 py-2 font-mono">ReactNode</td>
                <td className="px-4 py-2">
                  Content to be displayed on the front of the card.
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">backContent</td>
                <td className="px-4 py-2 font-mono">ReactNode</td>
                <td className="px-4 py-2">
                  Content to be displayed on the back of the card.
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">width</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Card width (Tailwind class).</td>
                <td className="px-4 py-2">&quot;w-80&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">height</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Card height (Tailwind class).</td>
                <td className="px-4 py-2">&quot;h-96&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">flipDirection</td>
                <td className="px-4 py-2 font-mono">
                  &quot;horizontal&quot; | &quot;vertical&quot;
                </td>
                <td className="px-4 py-2">
                  Flip direction (horizontal/vertical).
                </td>
                <td className="px-4 py-2">&quot;horizontal&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  Extra Tailwind/customization classes.
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">disabled</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Disables the card.</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">initialFlipped</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Determines if the card is initially flipped.
                </td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onFlip</td>
                <td className="px-4 py-2 font-mono">
                  (isFlipped: boolean) =&gt; void
                </td>
                <td className="px-4 py-2">Called when the card is flipped.</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">flipTrigger</td>
                <td className="px-4 py-2 font-mono">
                  &quot;click&quot; | &quot;hover&quot; | &quot;manual&quot;
                </td>
                <td className="px-4 py-2">
                  Flip trigger (click, hover, manual).
                </td>
                <td className="px-4 py-2">&quot;click&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">duration</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Animation duration (seconds).</td>
                <td className="px-4 py-2">0.6</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">easing</td>
                <td className="px-4 py-2 font-mono">Easing | Easing[]</td>
                <td className="px-4 py-2">Animation curve.</td>
                <td className="px-4 py-2">&quot;easeInOut&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
