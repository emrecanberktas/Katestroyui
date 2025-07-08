"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

const codeExample = `import { Checkbox } from "@/components/ui/checkbox";

<Checkbox />

`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add checkbox",
  npm: "npx shadcn@latest add checkbox",
  yarn: "yarn dlx shadcn@latest add checkbox",
  bun: "bunx shadcn@latest add checkbox",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-checkbox motion",
  npm: "npm install @radix-ui/react-checkbox motion",
  yarn: "yarn add @radix-ui/react-checkbox motion",
  bun: "bun add @radix-ui/react-checkbox motion",
};

export default function CheckboxDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Checkbox</h1>
        <p className="text-muted-foreground text-lg">
          Animasyonlu, erişilebilir ve kontrol edilebilir bir checkbox bileşeni.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <Checkbox />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="rounded-lg p-4 text-sm font-mono relative mt-2 overflow-x-auto border shadow mb-6">
            <CodeBlock code={codeExample} />
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Kurulum</h2>
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
              Aşağıdaki bağımlılıkları yükleyin:
            </p>
            <div className="mb-6">
              <TerminalBlock commands={manualCommands} />
            </div>
            <div className="mb-6">
              <CodeBlock
                code={`
                import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function Checkbox({
  className,
  onCheckedChange,
  checked,
  defaultChecked,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const [isChecked, setIsChecked] = React.useState(
    checked ?? defaultChecked ?? false
  );

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleCheckedChange = (checked: boolean | "indeterminate") => {
    setIsChecked(checked === true);
    onCheckedChange?.(checked);
  };

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer shrink-0 flex items-center justify-center outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-500",
        "size-5 rounded-sm bg-input focus-visible:ring-offset-2 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="size-3.5"
          initial="unchecked"
          animate={isChecked ? "checked" : "unchecked"}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={{
              checked: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.1,
                },
              },
              unchecked: {
                pathLength: 0,
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          />
        </motion.svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

                `}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Kullanım</h2>
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
                <th className="px-4 py-2 text-left">Tip</th>
                <th className="px-4 py-2 text-left">Açıklama</th>
                <th className="px-4 py-2 text-left">Varsayılan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">checked</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Kontrol edilen durum</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">defaultChecked</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Varsayılan durum</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onCheckedChange</td>
                <td className="px-4 py-2 font-mono">
                  (checked: boolean | &quot;indeterminate&quot;) =&gt; void
                </td>
                <td className="px-4 py-2">Durum değiştiğinde çağrılır</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Ekstra CSS sınıfları</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
