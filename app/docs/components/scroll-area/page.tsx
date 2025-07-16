"use client";

import { ScrollArea, ScrollAreaItem } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";

const codeExample = `import { ScrollArea, ScrollAreaItem } from "@/components/ui/scroll-area";
import React from "react";

export function Example() {
  return (
    <ScrollArea className="h-72 w-64 rounded-lg border p-4">
      <ul className="space-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <ScrollAreaItem
            key={i}
            className="h-10 w-full rounded-md bg-blue-100 flex items-center justify-center"
          />
        ))}
      </ul>
    </ScrollArea>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/scroll-area",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/scroll-area",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/scroll-area",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/scroll-area",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-scroll-area motion",
  npm: "npm install @radix-ui/react-scroll-area motion",
  yarn: "yarn add @radix-ui/react-scroll-area motion",
  bun: "bun add @radix-ui/react-scroll-area motion",
};

export default function ScrollAreaDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Scroll Area</h1>
        <p className="text-muted-foreground text-lg">
          Used to display long or wide content in a scrollable, animated area.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <ScrollArea className="h-72 w-64 rounded-lg border p-4">
              <ul className="space-y-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <ScrollAreaItem
                    key={i}
                    className="h-10 w-full rounded-md bg-blue-100 flex items-center justify-center"
                  />
                ))}
              </ul>
            </ScrollArea>
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
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { motion, useAnimation } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  orientation?: "vertical" | "horizontal";
}

function ScrollArea({
  className,
  children,
  orientation = "vertical",
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn(
        "relative",
        orientation === "horizontal" && "w-[75vmin] aspect-[4/2] flex",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          "size-full rounded-[inherit] outline-none transition-[color,box-shadow]",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
        )}
      >
        <div
          className={cn(
            "list-none p-0",
            orientation === "horizontal"
              ? "grid grid-flow-col auto-cols-[25%]"
              : "grid grid-cols-1"
          )}
        >
          {children}
        </div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

interface ScrollAreaItemProps
  extends Omit<React.ComponentProps<typeof motion.li>, "children"> {
  as?: React.ElementType;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}

function isProbablyMotionValue(val: unknown): boolean {
  return (
    typeof val === "object" &&
    val !== null &&
    typeof (val as { get: () => unknown }).get === "function"
  );
}

function filterMotionValues(node: React.ReactNode): React.ReactNode {
  if (Array.isArray(node)) {
    return node.map(filterMotionValues);
  }
  return isProbablyMotionValue(node) ? null : node;
}

const ScrollAreaItem = ({
  className,
  orientation = "vertical",
  children,
  ...props
}: ScrollAreaItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const controls = useAnimation();

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            [orientation === "vertical" ? "scaleX" : "scaleY"]: 1,
          });
          ref.current?.style.setProperty("--shown", "1");
        } else {
          controls.start({
            opacity: 0,
            [orientation === "vertical" ? "scaleX" : "scaleY"]: 0.25,
          });
          ref.current?.style.setProperty("--shown", "0");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [controls, orientation]);

  const initial =
    orientation === "vertical"
      ? { opacity: 0, scaleX: 0.25 }
      : { opacity: 0, scaleY: 0.25 };

  const { style, ...rest } = props;
  const safeChildren = filterMotionValues(children);
  return (
    <motion.li
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={cn(
        "p-0 max-w-full",
        "min-h-[40px] h-[8vmin] col-span-full",
        "overflow-hidden will-change-transform backface-hidden",
        orientation === "horizontal" && "min-w-[25%]",
        className
      )}
      style={{
        ...(style as React.CSSProperties),
        transformOrigin: orientation === "vertical" ? "top" : "left",
      }}
      {...rest}
    >
      <div className={cn("card h-full")}>{safeChildren}</div>
    </motion.li>
  );
};

export { ScrollArea, ScrollBar, ScrollAreaItem };
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
                <th className="px-4 py-2 text-left">Tip</th>
                <th className="px-4 py-2 text-left">Açıklama</th>
                <th className="px-4 py-2 text-left">Varsayılan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">orientation</td>
                <td className="px-4 py-2 font-mono">
                  &quot;vertical&quot; | &quot;horizontal&quot;
                </td>
                <td className="px-4 py-2">Kaydırma yönü</td>
                <td className="px-4 py-2">&quot;vertical&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">ScrollAreaItem veya içerik</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Ekstra CSS sınıfları</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">style</td>
                <td className="px-4 py-2 font-mono">React.CSSProperties</td>
                <td className="px-4 py-2">Inline stil</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
