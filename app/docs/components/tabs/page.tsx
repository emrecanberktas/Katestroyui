"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";

const codeExample = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";

export function Example() {
  return (
    <Tabs defaultValue="profile">
      <TabsList className="justify-center">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div>
          <h3 className="text-lg font-semibold mb-2">User Information</h3>
          <p className="mb-1">Name: <span className="font-medium">John Doe</span></p>
          <p className="mb-1">Email: <span className="font-medium">john@example.com</span></p>
          <p className="mb-1">Membership: <span className="font-medium">Premium</span></p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div>
          <h3 className="text-lg font-semibold mb-2">General Settings</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Notifications: On</li>
            <li>Theme: Dark</li>
            <li>Language: English</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div>
          <h3 className="text-lg font-semibold mb-2">Security</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Two-factor authentication: Active</li>
            <li>Last login: 2 hours ago</li>
            <li>Password: Last changed 1 month ago</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/tabs",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/tabs",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/tabs",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/tabs",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-tabs motion",
  npm: "npm install @radix-ui/react-tabs motion",
  yarn: "yarn add @radix-ui/react-tabs motion",
  bun: "bun add @radix-ui/react-tabs motion",
};

export default function TabsDocs() {
  return (
    <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4 sm:px-6 flex flex-col gap-6 sm:gap-10">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Tabs</h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          An animated and accessible tabs component used to display different
          content by switching between tabs.
        </p>
      </div>

      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-4 mb-6 items-center justify-center">
            <Tabs defaultValue="profile">
              <TabsList className="justify-center">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    User Information
                  </h3>
                  <p className="mb-1">
                    Name: <span className="font-medium">John Doe</span>
                  </p>
                  <p className="mb-1">
                    Email: <span className="font-medium">john@example.com</span>
                  </p>
                  <p className="mb-1">
                    Membership: <span className="font-medium">Premium</span>
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    General Settings
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Notifications: On</li>
                    <li>Theme: Dark</li>
                    <li>Language: English</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Security</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Two-factor authentication: Active</li>
                    <li>Last login: 2 hours ago</li>
                    <li>Password: Last changed 1 month ago</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
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
                  
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      {props.children}
    </TabsPrimitive.Root>
  );
}

function TabsList({
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

function TabsTrigger({
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  "data-state"?: "active" | "inactive";
  value: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        {...props}
        value={value}
        className={cn(
          "text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
          "data-[state=active]:bg-background dark:data-[state=active]:bg-input/50 dark:data-[state=active]:text-foreground data-[state=active]:shadow-md",
          className
        )}
      >
        {props.children}
        {(isHovered || props["data-state"] === "active") && (
          <motion.div
            layoutId="tab-indicator"
            className={cn(
              "absolute inset-0 rounded-md",
              props["data-state"] === "active"
                ? "bg-black/10 dark:bg-white/20"
                : "bg-black/5 dark:bg-white/10"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          />
        )}
      </TabsPrimitive.Trigger>
    </div>
  );
}

function TabsContent({
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

export { Tabs, TabsList, TabsTrigger, TabsContent };

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
                <td className="px-4 py-2 font-mono">defaultValue</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  The value of the tab that is selected by default
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  Controlled value (controlled usage)
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onValueChange</td>
                <td className="px-4 py-2 font-mono">
                  (value: string) =&gt; void
                </td>
                <td className="px-4 py-2">Called when the tab changes</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">
                  TabsList, TabsTrigger and TabsContent components
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Extra CSS classes</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
