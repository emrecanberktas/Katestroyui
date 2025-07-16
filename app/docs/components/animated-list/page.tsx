"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const codeExample = `import { AnimatedList } from "@/components/ui/animated-list";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const listItems = [
  {
    id: 1,
    title: "Item 1",
    gradient: "from-blue-500 to-purple-600",
    description: "Item 1 description",
    icon: "🚀",
    status: "Active",
  },
  {
    id: 2,
    title: "Item 2",
    gradient: "from-green-500 to-teal-600",
    description: "Item 2 description",
    icon: "📦",
    status: "Inactive",
  },
  {
    id: 3,
    title: "Item 3",
    gradient: "from-orange-500 to-red-600",
    description: "Item 3 description",
    icon: "💡",
    status: "Active",
  },
  {
    id: 4,
    title: "Item 4",
    gradient: "from-purple-500 to-pink-600",
    description: "Item 4 description",
    icon: "🎯",
    status: "Pending",
  },
  {
    id: 5,
    title: "Item 5",
    gradient: "from-teal-500 to-cyan-600",
    description: "Item 5 description",
    icon: "🔒",
    status: "Active",
  },
  {
    id: 6,
    title: "Item 6",
    gradient: "from-indigo-500 to-blue-600",
    description: "Item 6 description",
    icon: "⚡",
    status: "Inactive",
  },
];

export function Example() {
  const [listDirection, setListDirection] = useState("vertical");

  return (
    <>
      <button
        onClick={() => setListDirection((prev) => prev === "vertical" ? "horizontal" : "vertical")}
        className="mb-4 px-4 py-2 border rounded"
      >
        {listDirection === "vertical" ? "Grid" : "List"}
      </button>
      <AnimatedList
        key={listDirection}
        className={
          listDirection === "horizontal"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            : "flex flex-col gap-4"
        }
        itemClassName={listDirection === "horizontal" ? "" : "w-full"}
        direction={listDirection}
      >
        {listItems.map((item) =>
          listDirection === "horizontal" ? (
            <div
              key={item.id}
              className={cn(
                "relative group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white/90 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 flex flex-col justify-between p-6 h-56"
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow bg-gradient-to-br",
                    item.gradient
                  )}
                >
                  <span role="img" aria-label="icon">{item.icon}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 truncate">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">{item.description}</p>
              </div>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className={cn(
                "relative group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/60 flex items-center gap-4 px-4 py-3"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow bg-gradient-to-br",
                  item.gradient
                )}
              >
                <span role="img" aria-label="icon">{item.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white truncate">{item.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 truncate">{item.description}</p>
              </div>
              <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {item.status}
              </span>
            </div>
          )
        )}
      </AnimatedList>
    </>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/animated-list",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/animated-list",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/animated-list",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/animated-list",
};

const manualCommands = {
  npm: "npm install motion",
  yarn: "yarn add motion",
  pnpm: "pnpm install motion",
  bun: "bun add motion",
};

export default function AnimatedListDocs() {
  const listItems = useMemo(
    () => [
      {
        id: 1,
        title: "Item 1",
        gradient: "from-blue-500 to-purple-600",
        description: "Item 1 description",
        icon: "🚀",
        status: "Active",
      },
      {
        id: 2,
        title: "Item 2",
        gradient: "from-green-500 to-teal-600",
        description: "Item 2 description",
        icon: "📦",
        status: "Inactive",
      },
      {
        id: 3,
        title: "Item 3",
        gradient: "from-orange-500 to-red-600",
        description: "Item 3 description",
        icon: "💡",
        status: "Active",
      },
      {
        id: 4,
        title: "Item 4",
        gradient: "from-purple-500 to-pink-600",
        description: "Item 4 description",
        icon: "🎯",
        status: "Pending",
      },
      {
        id: 5,
        title: "Item 5",
        gradient: "from-teal-500 to-cyan-600",
        description: "Item 5 description",
        icon: "🔒",
        status: "Active",
      },
      {
        id: 6,
        title: "Item 6",
        gradient: "from-indigo-500 to-blue-600",
        description: "Item 6 description",
        icon: "⚡",
        status: "Inactive",
      },
    ],
    []
  );
  const [listDirection, setListDirection] = useState<"vertical" | "horizontal">(
    "vertical"
  );

  const animatedListChildren = useMemo(
    () =>
      listItems.map((item) =>
        listDirection === "horizontal" ? (
          <div
            key={item.id}
            className={cn(
              "relative group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white/90 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 flex flex-col justify-between p-6 h-56"
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow bg-gradient-to-br",
                  item.gradient
                )}
              >
                <span role="img" aria-label="icon">
                  {item.icon}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
                {item.description}
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {item.status}
              </span>
            </div>
          </div>
        ) : (
          <div
            key={item.id}
            className={cn(
              "relative group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/60 flex items-center gap-4 px-4 py-3"
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow bg-gradient-to-br",
                item.gradient
              )}
            >
              <span role="img" aria-label="icon">
                {item.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white truncate">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 truncate">
                {item.description}
              </p>
            </div>
            <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
              {item.status}
            </span>
          </div>
        )
      ),
    [listItems, listDirection]
  );

  return (
    <motion.div
      layout
      className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10"
    >
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Animated List</h1>
        <p className="text-muted-foreground text-lg">
          An accessible and customizable AnimatedList component that lists items
          with sequential animations.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-4 mb-6">
            <div className="flex gap-2 w-full sm:w-auto mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setListDirection((prev) =>
                    prev === "vertical" ? "horizontal" : "vertical"
                  )
                }
                className="flex-1 sm:flex-none"
              >
                {listDirection === "vertical" ? "Grid" : "List"}
              </Button>
            </div>
            <AnimatedList
              key={listDirection}
              className={
                listDirection === "horizontal"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "flex flex-col gap-4"
              }
              itemClassName={listDirection === "horizontal" ? "" : "w-full"}
              delayFactor={0.1}
              direction={listDirection}
              emptyMessage="No items yet"
            >
              {animatedListChildren}
            </AnimatedList>
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
                  
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useMemo } from "react";

interface AnimatedListItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  delayFactor?: number;
  reverse?: boolean;
  direction?: "vertical" | "horizontal";
}

function AnimatedListItem({
  children,
  index,
  className,
  transition,
  initial,
  animate,
  exit,
  delayFactor = 0.03,
  reverse = false,
  direction = "vertical",
}: AnimatedListItemProps) {
  const delay = (reverse ? -index : index) * delayFactor;

  const getInitialState = () => {
    if (initial) return initial;
    if (direction === "horizontal") {
      return { opacity: 0, x: -50, scale: 0.9, filter: "blur(5px)" };
    }
    return { opacity: 0, y: 20, scale: 0.95, filter: "blur(5px)" };
  };

  const getAnimateState = () => {
    if (animate) return animate;
    return { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };
  };

  const getExitState = () => {
    if (exit) return exit;
    if (direction === "horizontal") {
      return { opacity: 0, x: 50, scale: 0.9, filter: "blur(5px)" };
    }
    return { opacity: 0, y: -20, scale: 0.95, filter: "blur(5px)" };
  };

  return (
    <motion.div
      initial={getInitialState()}
      animate={getAnimateState()}
      exit={getExitState()}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.15 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      transition={{
        opacity: { delay },
        y: { delay },
        x: { delay },
        filter: { delay },
        scale: { delay: 0 },
        type: "spring",
        stiffness: 120,
        damping: 20,
        ...transition,
      }}
      layout
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  itemClassName?: string;
  delayFactor?: number;
  reverse?: boolean;
  emptyMessage?: React.ReactNode;
  direction?: "vertical" | "horizontal";
}

export function AnimatedList({
  children,
  className,
  transition,
  initial,
  animate,
  exit,
  itemClassName,
  delayFactor = 0.03,
  reverse = false,
  emptyMessage = "List is empty",
  direction = "vertical",
  ...props
}: AnimatedListProps) {
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );
  const isEmpty = childrenArray.length === 0;

  const {
    onAnimationStart,
    onAnimationEnd,
    onAnimationIteration,
    onDragStart,
    onDrag,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    ...motionProps
  } = props;

  return (
    <motion.div
      className={cn(
        "gap-4",
        direction === "horizontal"
          ? "flex flex-row flex-wrap items-start justify-center"
          : "flex flex-col items-center",
        className
      )}
      {...motionProps}
    >
      <AnimatePresence mode="popLayout">
        {isEmpty ? (
          <motion.div
            layout
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 15 },
            }}
            exit={{ opacity: 0, y: -20 }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            {emptyMessage}
          </motion.div>
        ) : (
          childrenArray.map((child, index) => (
            <AnimatedListItem
              key={(child as any).key ?? index}
              index={index}
              transition={transition}
              initial={initial}
              animate={animate}
              exit={exit}
              className={itemClassName}
              delayFactor={delayFactor}
              reverse={reverse}
              direction={direction}
            >
              {child}
            </AnimatedListItem>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}
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
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">List items</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
