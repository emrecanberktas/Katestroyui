"use client";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import { ChevronsUpDown } from "lucide-react";

const codeExample = `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

function Example() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button>Detayları Göster</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 border rounded mt-2">Burada detaylı içerik var!</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/collapsible",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/collapsible",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/collapsible",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/collapsible",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-collapsible motion",
  npm: "npm install @radix-ui/react-collapsible motion",
  yarn: "yarn add @radix-ui/react-collapsible motion",
  bun: "bun add @radix-ui/react-collapsible motion",
};

export default function CollapsibleDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Collapsible</h1>
        <p className="text-muted-foreground text-lg">
          Açılıp kapanabilen, animasyonlu ve erişilebilir bir içerik alanı
          bileşeni.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <Collapsible className="flex w-full max-w-[350px] flex-col gap-2">
              <div className="flex items-center justify-between gap-4 px-4">
                <h4 className="text-sm font-semibold">Collapsible</h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <ChevronsUpDown />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                Item 1
              </div>
              <CollapsibleContent className="flex flex-col gap-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  Item 2
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  Item 3
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  Item 4
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  Item 5
                </div>
              </CollapsibleContent>
            </Collapsible>
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
                import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { AnimatePresence, motion } from "motion/react";
import React, { createContext, useContext, useMemo, useState } from "react";

type CollapsibleContextType = {
  isOpen: boolean;
  setIsOpen?: (open: boolean) => void;
};

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

function useCollapsible() {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Collapsible components must be used within a Collapsible");
  }
  return context;
}

interface CollapsibleProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {}

function Collapsible({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: CollapsibleProps) {
  const isControlled = openProp !== undefined;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false
  );

  const open = isControlled ? openProp : uncontrolledOpen;

  const handleOpenChange = (value: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(value);
    }
    onOpenChange?.(value);
  };

  const contextValue = useMemo(
    () => ({ isOpen: open, setIsOpen: handleOpenChange }),
    [open, handleOpenChange]
  );

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <CollapsiblePrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        data-slot="collapsible"
        {...props}
      />
    </CollapsibleContext.Provider>
  );
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  const { isOpen } = useCollapsible();
  const childrenArray = React.Children.toArray(children);

  return (
    <AnimatePresence>
      {isOpen &&
        childrenArray.map((child, index) => (
          <motion.div
            layout
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.3,
                delay: (childrenArray.length - 1 - index) * 0.05,
                ease: "easeOut",
              },
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            <CollapsiblePrimitive.CollapsibleContent
              forceMount
              data-slot="collapsible-content"
              {...props}
            >
              {child}
            </CollapsiblePrimitive.CollapsibleContent>
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
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
                <td className="px-4 py-2 font-mono">open</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Açık/kapalı durumu (controlled)</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">defaultOpen</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Varsayılan açık/kapalı durumu</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onOpenChange</td>
                <td className="px-4 py-2 font-mono">
                  (open: boolean) =&gt; void
                </td>
                <td className="px-4 py-2">
                  Açık/kapalı durumu değişince çağrılır
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">İçerik ve trigger</td>
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
