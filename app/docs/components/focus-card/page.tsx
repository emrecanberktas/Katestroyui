"use client";

import { FocusCard } from "@/components/ui/focus-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

const codeExample = `import { FocusCard } from "@/components/ui/focus-card";

const cards = [
  {
    title: "Neo",
    src: "https://placecats.com/neo/400/400",
  },
  {
    title: "Millie",
    src: "https://placecats.com/millie/400/400",
  },
  {
    title: "Millie Neo",
    src: "https://placecats.com/millie_neo/400/400",
  },
  {
    title: "Neo Banana",
    src: "https://placecats.com/neo_banana/400/400",
  },
  {
    title: "Neo 2",
    src: "https://placecats.com/neo_2/400/400",
  },
  {
    title: "Bella",
    src: "https://placecats.com/bella/400/400",
  },
];

<FocusCard cards={cards} />
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/focus-card",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/focus-card",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/focus-card",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/focus-card",
};

const manualCommands = {
  pnpm: "pnpm install motion",
  npm: "npm install motion",
  yarn: "yarn add motion",
  bun: "bun add motion",
};

const cards = [
  {
    title: "Neo",
    src: "https://placecats.com/neo/400/400",
  },
  {
    title: "Millie",
    src: "https://placecats.com/millie/400/400",
  },
  {
    title: "Millie Neo",
    src: "https://placecats.com/millie_neo/400/400",
  },
  {
    title: "Neo Banana",
    src: "https://placecats.com/neo_banana/400/400",
  },
  {
    title: "Neo 2",
    src: "https://placecats.com/neo_2/400/400",
  },
  {
    title: "Bella",
    src: "https://placecats.com/bella/400/400",
  },
];

export default function FocusCardDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Focus Card</h1>
        <p className="text-muted-foreground text-lg">
          A modern card group component that highlights on hover, animated and
          visually appealing.
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
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 justify-center items-center">
            <FocusCard cards={cards} />
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
            <p className="text-muted-foreground text-base mb-4">
              Install the following dependencies:
            </p>
            <div className="mb-6">
              <TerminalBlock commands={manualCommands} />
            </div>
            <div className="mb-6">
              <CodeBlock
                code={`import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Card {
  title?: string;
  src?: string;
}

export function Card({
  card,
  className,
  hovered,
  setHovered,
  index,
}: {
  card: Card;
  className?: string;
  hovered: number | null;
  setHovered: (index: number | null) => void;
  index: number;
}) {
  return (
    <motion.div
      className={cn(
        "rounded-lg relative h-96 w-full overflow-hidden",
        className
      )}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      animate={{
        filter:
          hovered !== null && hovered !== index ? "blur(10px)" : "blur(0px)",
        scale: hovered !== null && hovered !== index ? 0.95 : 1,
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 rounded-lg"
      />
      <motion.div
        className="absolute inset-0 flex items-end py-8 px-4"
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        animate={{
          opacity: hovered === index ? 1 : 0,
        }}
      >
        <h3 className="text-white text-2xl font-bold">{card.title}</h3>
      </motion.div>
    </motion.div>
  );
}

export function FocusCard({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          hovered={hovered}
          setHovered={setHovered}
          index={index}
        />
      ))}
    </div>
  );
}`}
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
                <td className="px-4 py-2 font-mono">cards</td>
                <td className="px-4 py-2 font-mono">{`Card[]`}</td>
                <td className="px-4 py-2">List of card data</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Card Type</h3>
          <div className="overflow-x-auto bg-background border rounded-lg p-4 shadow">
            <table className="min-w-full text-sm border rounded-lg overflow-hidden">
              <thead className="bg-zinc-100 dark:bg-zinc-800">
                <tr>
                  <th className="px-4 py-2 text-left">Field</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 font-mono">title</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Card title</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-mono">src</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2">Card image</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
