"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { CopyButton } from "./ui/copy-button";

export function TerminalBlock({
  commands,
}: {
  commands: Record<string, string>;
}) {
  const tabs = Object.keys(commands) as (keyof typeof commands)[];
  const uniqueIdRef = useRef<string>(
    `terminal-block-${Math.random().toString(36).slice(2, 10)}`
  );
  const uniqueId = uniqueIdRef.current;

  const [activeTab, setActiveTab] = useState<keyof typeof commands>(tabs[0]);
  const [prevTabIndex, setPrevTabIndex] = useState(0);
  const activeTabIndex = tabs.indexOf(activeTab);
  const direction =
    activeTabIndex > prevTabIndex
      ? "next"
      : activeTabIndex < prevTabIndex
      ? "back"
      : "next";

  const handleTabChange = (tab: keyof typeof commands) => {
    setPrevTabIndex(tabs.indexOf(activeTab));
    setActiveTab(tab);
  };

  const variants = {
    initial: (direction: "next" | "back") => ({
      x: direction === "next" ? 15 : -15,
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction: "next" | "back") => ({
      x: direction === "next" ? -15 : 15,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-muted border rounded-lg overflow-hidden text-sm font-mono">
      <div className="flex items-center border-b bg-muted/50 px-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={cn(
              "relative px-3 py-2 text-xs capitalize border-b-2 -mb-px transition-colors",
              activeTab === tab
                ? "border-transparent text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            layout
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId={`underline-${uniqueId}`}
                className="absolute inset-x-0 bottom-0 h-[2px] bg-primary"
              />
            )}
          </motion.button>
        ))}

        <div className="ml-auto">
          <CopyButton content={commands[activeTab]} className="p-2" />
        </div>
      </div>

      <div className="relative w-full overflow-x-hidden px-3 sm:px-4 py-3">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.code
            key={activeTab}
            className="whitespace-pre-wrap break-words text-xs sm:text-sm w-full block"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
          >
            {commands[activeTab]}
          </motion.code>
        </AnimatePresence>
      </div>
    </div>
  );
}
