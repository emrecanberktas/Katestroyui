"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

const codeExample = `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Example() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Başlık</AccordionTrigger>
        <AccordionContent>Accordion içeriği burada.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Başlık 2</AccordionTrigger>
        <AccordionContent>Accordion içeriği burada.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Accordion Başlık 3</AccordionTrigger>
        <AccordionContent>Accordion içeriği burada.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add accordion",
  npm: "npx shadcn@latest add accordion",
  yarn: "yarn dlx shadcn@latest add accordion",
  bun: "bunx shadcn@latest add accordion",
};

const manualCommands = {
  npm: "npm install @radix-ui/react-accordion motion",
  yarn: "yarn add @radix-ui/react-accordion motion",
  pnpm: "pnpm install @radix-ui/react-accordion motion",
  bun: "bun add @radix-ui/react-accordion motion",
};

export default function AccordionDocs() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      {/* Başlık ve açıklama */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Accordion</h1>
        <p className="text-muted-foreground text-lg">
          Animasyonlu, erişilebilir ve özelleştirilebilir bir Accordion
          componenti.
        </p>
      </div>

      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-4 mb-6">
            <Accordion type="single" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Accordion Başlık</AccordionTrigger>
                <AccordionContent>Accordion içeriği burada.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Accordion Başlık 2</AccordionTrigger>
                <AccordionContent>Accordion içeriği burada.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Accordion Başlık 3</AccordionTrigger>
                <AccordionContent>Accordion içeriği burada.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="bg-zinc-900 rounded-lg p-4 text-sm text-white font-mono relative mt-2 overflow-x-auto border shadow mb-6">
            <button
              onClick={() => {
                navigator.clipboard.writeText(codeExample);
                setCopied(true);
                setTimeout(() => setCopied(false), 1200);
              }}
              className="absolute top-3 right-3 px-3 py-1.5 bg-zinc-800 rounded text-xs hover:bg-zinc-700 transition border border-zinc-700"
            >
              {copied ? "Kopyalandı!" : "Kopyala"}
            </button>
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
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  value: string | string[];
  type: "single" | "multiple";
} | null>(null);

const AccordionItemContext = React.createContext<{
  value: string;
} | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

function useAccordionItem() {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem components must be used within an AccordionItem"
    );
  }
  return context;
}

function Accordion({
  type = "single",
  value,
  onValueChange,
  defaultValue,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    type === "single" ? "" : []
  );
  const isControlled = value !== undefined && onValueChange !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const setCurrentValue = isControlled ? onValueChange : setInternalValue;

  const contextValue = React.useMemo(
    () => ({ value: currentValue, type }),
    [currentValue, type]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      {type === "single" ? (
        <AccordionPrimitive.Root
          type="single"
          value={currentValue as string}
          onValueChange={setCurrentValue as (value: string) => void}
          defaultValue={defaultValue as string | undefined}
          data-slot="accordion"
          {...props}
        />
      ) : (
        <AccordionPrimitive.Root
          type="multiple"
          value={currentValue as string[]}
          onValueChange={setCurrentValue as (value: string[]) => void}
          defaultValue={defaultValue as string[] | undefined}
          data-slot="accordion"
          {...props}
        />
      )}
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  className,
  value,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> & { value: string }) {
  const contextValue = React.useMemo(() => ({ value }), [value]);

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("border-b last:border-b-0", className)}
      >
        <AccordionPrimitive.Item
          data-slot="accordion-item"
          value={value}
          {...props}
        />
      </motion.div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const { value: accordionValue, type } = useAccordion();
  const { value: itemValue } = useAccordionItem();
  const isOpen =
    type === "single"
      ? accordionValue === itemValue
      : accordionValue.includes(itemValue);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="size-4 shrink-0 translate-y-0.5"
        >
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0" />
        </motion.div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const { value: accordionValue, type } = useAccordion();
  const { value: itemValue } = useAccordionItem();
  const isOpen =
    type === "single"
      ? accordionValue === itemValue
      : accordionValue.includes(itemValue);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
        >
          <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn("overflow-hidden text-sm pt-0 pb-4", className)}
            forceMount
            {...props}
          >
            {children}
          </AccordionPrimitive.Content>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
              `}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Kullanım</h2>
        <div className="bg-background border rounded-lg p-6 shadow mb-6">
          <CodeBlock
            code={`
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Accordion Başlık</AccordionTrigger>
    <AccordionContent>İçerik</AccordionContent>
  </AccordionItem>
</Accordion>
`}
          />
        </div>
      </div>

      {/* Props Tablosu */}
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
                <td className="px-4 py-2 font-mono">type</td>
                <td className="px-4 py-2 font-mono">"single" | "multiple"</td>
                <td className="px-4 py-2">
                  Accordion tipi (tekli veya çoklu seçim)
                </td>
                <td className="px-4 py-2">"single"</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">defaultValue</td>
                <td className="px-4 py-2 font-mono">string | string[]</td>
                <td className="px-4 py-2">Başlangıçta açık olan item(lar)</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2 font-mono">string | string[]</td>
                <td className="px-4 py-2">
                  Kontrollü değer (controlled usage)
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onValueChange</td>
                <td className="px-4 py-2 font-mono">(value) =&gt; void</td>
                <td className="px-4 py-2">Değer değiştiğinde çağrılır</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
