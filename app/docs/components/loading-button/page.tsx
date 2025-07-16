"use client";

import { LoadingButton } from "@/components/ui/loading-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

const codeExample = `import { LoadingButton } from "@/components/ui/loading-button";
import { Loader2Icon } from "lucide-react";

<LoadingButton
  state="idle"
  onClick={() => {}}
  idleText="Kaydet"
  loadingIndicator={<Loader2Icon className="animate-spin" />} 
  successText="Başarılı!"
/>
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/loading-button",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/loading-button",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/loading-button",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/loading-button",
};

const manualCommands = {
  pnpm: "pnpm install motion class-variance-authority @radix-ui/react-slot lucide-react",
  npm: "npm install motion class-variance-authority @radix-ui/react-slot lucide-react",
  yarn: "yarn add motion class-variance-authority @radix-ui/react-slot lucide-react",
  bun: "bun add motion class-variance-authority @radix-ui/react-slot lucide-react",
};

export default function LoadingButtonDocs() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Loading Button</h1>
        <p className="text-muted-foreground text-lg">
          An accessible button component that can display loading, success, and
          idle states with animation.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <LoadingButton
              state={state}
              onClick={() => {
                setState("loading");
                setTimeout(() => setState("success"), 1200);
                setTimeout(() => setState("idle"), 2200);
              }}
              idleText="Save"
              loadingIndicator={<Loader2Icon className="animate-spin" />}
              successText="Success!"
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
            <p className="text-muted-foreground text-base mb-4">
              Install the following dependencies:
            </p>
            <div className="mb-6">
              <TerminalBlock commands={manualCommands} />
            </div>
            <div className="mb-6">
              <CodeBlock
                code={`import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Loader2Icon } from "lucide-react";

interface LoadingButtonProps {
  state?: "idle" | "loading" | "success";
  onClick?: () => void;
  idleText?: React.ReactNode;
  loadingIndicator?: React.ReactNode;
  successText?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function LoadingButton({
  state = "idle",
  onClick,
  idleText = "Form Submit",
  loadingIndicator = <Loader2Icon className="animate-spin" />,
  successText = "Form Submitted!",
  className,
  disabled,
}: LoadingButtonProps) {
  const contentMap: Record<string, React.ReactNode> = {
    idle: idleText,
    loading: loadingIndicator,
    success: successText,
  };

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled ?? state !== "idle"}
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium relative overflow-hidden",
        "disabled:opacity-50 disabled:cursor-not-allowed transition-all min-w-[180px] flex items-center justify-center",
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={state}
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          {contentMap[state]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}

export { LoadingButton };
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
                <td className="px-4 py-2 font-mono">state</td>
                <td className="px-4 py-2 font-mono">
                  &quot;idle&quot; | &quot;loading&quot; | &quot;success&quot;
                </td>
                <td className="px-4 py-2">Button state</td>
                <td className="px-4 py-2">&quot;idle&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onClick</td>
                <td className="px-4 py-2 font-mono">() =&gt; void</td>
                <td className="px-4 py-2">Click event</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">idleText</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Idle text</td>
                <td className="px-4 py-2">&quot;Form Submit&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">loadingIndicator</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Loading indicator</td>
                <td className="px-4 py-2">&lt;Loader2Icon /&gt;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">successText</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Success text</td>
                <td className="px-4 py-2">&quot;Form Submitted!&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Extra CSS classes</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">disabled</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Whether the button is disabled</td>
                <td className="px-4 py-2">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
