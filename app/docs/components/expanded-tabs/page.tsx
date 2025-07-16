"use client";

import {
  ExpandedTabs,
  ExpandedTabsList,
  ExpandedTabsTrigger,
  ExpandedTabsContent,
} from "@/components/ui/expanded-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import { Home, Settings, User } from "lucide-react";

const codeExample = `import {
  ExpandedTabs,
  ExpandedTabsList,
  ExpandedTabsTrigger,
  ExpandedTabsContent,
} from "@/components/ui/expanded-tabs";
import { Home, Settings, User } from "lucide-react";

export function Example() {
  return (
    <ExpandedTabs defaultValue="home">
      <ExpandedTabsList>
        <ExpandedTabsTrigger value="home" icon={Home}>
          Anasayfa
        </ExpandedTabsTrigger>
        <ExpandedTabsTrigger value="profile" icon={User}>
          Profil
        </ExpandedTabsTrigger>
        <ExpandedTabsTrigger value="settings" icon={Settings}>
          Ayarlar
        </ExpandedTabsTrigger>
      </ExpandedTabsList>
      <ExpandedTabsContent value="home">
        Anasayfa içeriği
      </ExpandedTabsContent>
      <ExpandedTabsContent value="profile">
        Profil içeriği
      </ExpandedTabsContent>
      <ExpandedTabsContent value="settings">
        Ayarlar içeriği
      </ExpandedTabsContent>
    </ExpandedTabs>
  );
}`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-tabs motion lucide-react",
  npm: "npm install @radix-ui/react-tabs motion lucide-react",
  yarn: "yarn add @radix-ui/react-tabs motion lucide-react",
  bun: "bun add @radix-ui/react-tabs motion lucide-react",
};

const registeryCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/tabs",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/tabs",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/tabs",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/tabs",
};

export default function ExpandedTabsDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Expanded Tabs</h1>
        <p className="text-muted-foreground text-lg">
          Animated, icon-supported, and expanded tab component.
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
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center min-h-[320px]">
            <ExpandedTabs
              defaultValue="home"
              className="w-full max-w-2xl mx-auto mt-10"
            >
              <ExpandedTabsList>
                <ExpandedTabsTrigger value="home" icon={Home}>
                  Home
                </ExpandedTabsTrigger>
                <ExpandedTabsTrigger value="profile" icon={User}>
                  Profile
                </ExpandedTabsTrigger>
                <ExpandedTabsTrigger value="settings" icon={Settings}>
                  Settings
                </ExpandedTabsTrigger>
              </ExpandedTabsList>

              <ExpandedTabsContent value="home">
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">Welcome</h2>
                  <p className="text-muted-foreground">
                    This is the general overview of the home page. Here you can
                    track key metrics and discover the latest updates.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                    alt="Dashboard preview"
                    className="rounded-xl shadow-md object-cover w-full max-h-60"
                  />
                </div>
              </ExpandedTabsContent>

              <ExpandedTabsContent value="profile">
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">Your Profile</h2>
                  <p className="text-muted-foreground">
                    Manage your personal information, upload a new avatar, or
                    update your bio.
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://github.com/emrecanberktas.png"
                      alt="Avatar"
                      className="w-20 h-20 rounded-full border"
                    />
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandedTabsContent>

              <ExpandedTabsContent value="settings">
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">Settings</h2>
                  <p className="text-muted-foreground">
                    Configure application preferences, change themes, or update
                    your account settings.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Dark mode support</li>
                    <li>Notification settings</li>
                    <li>Privacy and security options</li>
                  </ul>
                </div>
              </ExpandedTabsContent>
            </ExpandedTabs>
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
              Install the following registry dependencies:
            </p>
            <div className="mb-6">
              <TerminalBlock commands={registeryCommands} />
            </div>
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
                code={`"use client";

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
                <td className="px-4 py-2 font-mono">ExpandedTabs</td>
                <td className="px-4 py-2 font-mono">defaultValue</td>
                <td className="px-4 py-2">
                  The default value of the selected tab
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabsTrigger</td>
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2">The value of the tab</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabsTrigger</td>
                <td className="px-4 py-2 font-mono">icon</td>
                <td className="px-4 py-2">
                  The icon to display at the beginning of the tab
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabsContent</td>
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2">
                  The value of the tab content it is associated with
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
