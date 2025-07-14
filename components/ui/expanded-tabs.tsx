"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "motion/react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const TabsContext = React.createContext<{
  selectedTab: string | null;
  setSelectedTab: (value: string | null) => void;
}>({
  selectedTab: null,
  setSelectedTab: () => {},
});

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  "data-state"?: "active" | "inactive";
  value: string;
  icon?: LucideIcon;
}

function ExpandedTabs({
  className,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const [selectedTab, setSelectedTab] = React.useState<string | null>(
    defaultValue || null
  );

  const handleValueChange = (value: string) => {
    setSelectedTab(value);
    onValueChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn("flex flex-col gap-2", className)}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        {...props}
      >
        {props.children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
}

function ExpandedTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const tabsListRef = React.useRef<HTMLDivElement>(null);

  return (
    <TabsPrimitive.List
      ref={tabsListRef}
      data-slot="tabs-list"
      {...props}
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
    />
  );
}

function ExpandedTabsTrigger({
  className,
  value,
  icon: Icon,
  ...props
}: TabsTriggerProps) {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext);
  const [isHovered, setIsHovered] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const isActive = props["data-state"] === "active";
  const isSelected = isActive || selectedTab === value;

  const handleClick = () => {
    setSelectedTab(value);
  };

  return (
    <TabsPrimitive.Trigger
      ref={triggerRef}
      data-slot="tabs-trigger"
      value={value}
      {...props}
      onClick={handleClick}
      className="relative z-10 flex items-center gap-1.5"
    >
      <div
        className="relative inline-flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          variants={buttonVariants}
          initial={{ gap: 0, paddingLeft: ".5rem", paddingRight: ".5rem" }}
          animate={{
            gap: isSelected ? ".5rem" : 0,
            paddingLeft: isSelected ? "1rem" : ".5rem",
            paddingRight: isSelected ? "1rem" : ".5rem",
          }}
          transition={{ delay: 0.1, type: "spring", bounce: 0, duration: 0.6 }}
          className={cn(
            "relative inline-flex items-center rounded-md px-3 py-1 text-sm font-medium transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
            isActive
              ? cn("bg-background dark:bg-input/50")
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
            className
          )}
        >
          {Icon && <Icon size={20} />}
          <AnimatePresence initial={false}>
            {isSelected && (
              <motion.span
                variants={{
                  initial: { width: 0, opacity: 0 },
                  animate: { width: "auto", opacity: 1 },
                  exit: { width: 0, opacity: 0 },
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  delay: 0.1,
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                }}
                className="overflow-hidden"
              >
                {props.children}
              </motion.span>
            )}
          </AnimatePresence>
          {(isHovered || isActive) && (
            <motion.div
              layoutId="tab-indicator"
              className={cn(
                "absolute inset-0 rounded-md",
                isActive
                  ? "bg-black/10 dark:bg-white/20"
                  : "bg-black/5 dark:bg-white/10"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            />
          )}
        </motion.div>
      </div>
    </TabsPrimitive.Trigger>
  );
}

function ExpandedTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </TabsPrimitive.Content>
  );
}

export {
  ExpandedTabs,
  ExpandedTabsList,
  ExpandedTabsTrigger,
  ExpandedTabsContent,
};
