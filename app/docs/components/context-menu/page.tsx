"use client";

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "@/components/ui/context-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";

function CustomCursor() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <circle
        cx="14"
        cy="14"
        r="13"
        fill="white"
        stroke="black"
        strokeWidth="1.5"
      />
      <circle cx="14" cy="14" r="4" fill="black" />
    </svg>
  );
}

const codeExample = `import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "@/components/ui/context-menu";

export function Example() {
  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option1");

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
        customCursor={
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg" />
        }
      >
        Right click
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Options</ContextMenuLabel>
        <ContextMenuItem onClick={() => alert("Edit clicked")}>Edit</ContextMenuItem>
        <ContextMenuItem onClick={() => alert("Delete clicked")}>Delete</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={checked}
          onCheckedChange={setChecked}
        >
          Checkbox Option
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup
          value={radioValue}
          onValueChange={setRadioValue}
        >
          <ContextMenuRadioItem value="option1">Option 1</ContextMenuRadioItem>
          <ContextMenuRadioItem value="option2">Option 2</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Sub Option 1</ContextMenuItem>
            <ContextMenuItem>Sub Option 2</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/context-menu",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/context-menu",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/context-menu",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/context-menu",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-context-menu motion",
  npm: "npm install @radix-ui/react-context-menu motion",
  yarn: "yarn add @radix-ui/react-context-menu motion",
  bun: "bun add @radix-ui/react-context-menu motion",
};

export default function ContextMenuDocs() {
  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option1");

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Context Menu</h1>
        <p className="text-muted-foreground text-lg">
          An advanced, animated, and accessible context menu component with
          right-click support.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <ContextMenu>
              <ContextMenuTrigger
                className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
                customCursor={<CustomCursor />}
              >
                Right click
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuLabel>Options</ContextMenuLabel>
                <ContextMenuItem onClick={() => alert("Edit clicked")}>
                  Edit
                </ContextMenuItem>
                <ContextMenuItem onClick={() => alert("Delete clicked")}>
                  Delete
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={checked}
                  onCheckedChange={setChecked}
                >
                  Checkbox Option
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup
                  value={radioValue}
                  onValueChange={setRadioValue}
                >
                  <ContextMenuRadioItem value="option1">
                    Option 1
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="option2">
                    Option 2
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Sub Option 1</ContextMenuItem>
                    <ContextMenuItem>Sub Option 2</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="rounded-lg p-4 text-sm font-mono relative mt-2 overflow-x-auto border shadow mb-6">
            <CodeBlock code={codeExample} />
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Installation</h2>
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
                  
import React, { useRef, useState, useEffect, createContext } from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { ChevronRightIcon, CircleIcon } from "lucide-react";
import { motion, AnimatePresence, useMotionValue } from "motion/react";

import { cn } from "@/lib/utils";
import { Checkbox } from "./checkbox";

type ContextMenuTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Trigger
> & {
  customCursor?: React.ReactNode;
};

const ContextMenuSubContentContext = createContext<{ isOpen: boolean } | null>(
  null
);

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  className,
  style,
  children,
  customCursor,
  ...props
}: ContextMenuTriggerProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const parent = containerRef.current.parentElement;

      if (parent) {
        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);
        };

        const handleMouseEnter = () => setIsActive(true);
        const handleMouseLeave = () => setIsActive(false);

        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseenter", handleMouseEnter);
        parent.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parent.removeEventListener("mousemove", handleMouseMove);
          parent.removeEventListener("mouseenter", handleMouseEnter);
          parent.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y]);

  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn("cursor-none", className)}
      {...props}
    >
      <div
        ref={containerRef}
        className="relative group cursor-none hover:cursor-none"
      >
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: y, left: x, ...style }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              {customCursor ? (
                // Render custom cursor if provided
                customCursor
              ) : (
                // Default SVG cursor
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 16 16"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn("rotate-[-70deg] stroke-white text-black")}
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {children}
      </div>
    </ContextMenuPrimitive.Trigger>
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent> & {
  isOpen?: boolean;
}) {
  const isOpen = props.isOpen ?? true;

  return (
    <AnimatePresence>
      {isOpen && (
        <ContextMenuSubContentContext.Provider value={{ isOpen }}>
          <ContextMenuPrimitive.SubContent
            data-slot="context-menu-sub-content"
            className={cn(
              "bg-popover text-popover-foreground z-50 min-w-[8rem] origin-[var(--radix-dropdown-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-lg",
              className
            )}
            {...props}
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                when: "beforeChildren",
              }}
              className={cn(
                "bg-popover text-popover-foreground z-50 min-w-[8rem] origin-[var(--radix-dropdown-menu-content-transform-origin)] overflow-hidden rounded-md border p-1 shadow-lg",
                className
              )}
            >
              {React.Children.map(children, (child, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {child}
                </motion.div>
              ))}
            </motion.div>
          </ContextMenuPrimitive.SubContent>
        </ContextMenuSubContentContext.Provider>
      )}
    </AnimatePresence>
  );
}

function ContextMenuContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content asChild {...props}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              when: "beforeChildren",
            }}
            className={cn(
              "bg-popover text-popover-foreground z-50 max-h-[var(--radix-context-menu-content-available-height)] min-w-[8rem] origin-[var(--radix-context-menu-content-transform-origin)] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
              className
            )}
          >
            {React.Children.map(children, (child, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-4 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <Checkbox checked={checked} />
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
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
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Content and trigger</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onClick</td>
                <td className="px-4 py-2 font-mono">() =&gt; void</td>
                <td className="px-4 py-2">Click event</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">checked</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Is checkbox or radio selected</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onCheckedChange</td>
                <td className="px-4 py-2 font-mono">
                  (checked: boolean) =&gt; void
                </td>
                <td className="px-4 py-2">Checkbox or radio change event</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Radio item value</td>
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
