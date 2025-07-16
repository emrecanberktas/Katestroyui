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

function Example() {
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
            <p className="text-muted-foreground text-base mb-4">
              Install the following dependencies:
            </p>
            <div className="mb-6">
              <TerminalBlock commands={manualCommands} />
            </div>
            <div className="mb-6">
              <CodeBlock
                code={`import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

// ... context menu component implementation ...
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
