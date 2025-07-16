"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import { Button } from "@/components/ui/button";

const codeExample = `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Dialog description goes here.</DialogDescription>
        </DialogHeader>
        <div className="py-4">Content goes here.</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/dialog",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/dialog",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/dialog",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/dialog",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-dialog motion",
  npm: "npm install @radix-ui/react-dialog motion",
  yarn: "yarn add @radix-ui/react-dialog motion",
  bun: "bun add @radix-ui/react-dialog motion",
};

export default function DialogDocs() {
  return (
    <div className="max-w-2xl mx-auto py-6 sm:py-10 px-4 sm:px-6 flex flex-col gap-6 sm:gap-10">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Dialog</h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Animated, accessible, and customizable Dialog component.
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
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-4 mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Title</DialogTitle>
                  <DialogDescription>
                    Dialog description goes here.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">Content goes here.</div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

type DialogContextType = {
  isOpen: boolean;
};

const DialogContext = React.createContext<DialogContextType | undefined>(
  undefined
);

const useDialog = (): DialogContextType => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a Dialog");
  }
  return context;
};

function Dialog({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  const [isOpen, setIsOpen] = React.useState(
    props?.open ?? props?.defaultOpen ?? false
  );

  React.useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    },
    [props]
  );

  return (
    <DialogContext.Provider value={{ isOpen }}>
      <DialogPrimitive.Root
        data-slot="dialog"
        {...props}
        onOpenChange={handleOpenChange}
      >
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn("fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  const { isOpen } = useDialog();

  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPortal forceMount>
          <DialogOverlay asChild forceMount>
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </DialogOverlay>
          <DialogPrimitive.Content
            forceMount
            asChild
            data-slot="dialog-content"
            {...props}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.2,
                rotate: 15,
                filter: "blur(12px)",
                transformOrigin: "50% 50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
                transformOrigin: "50% 50%",
              }}
              exit={{
                opacity: 0,
                scale: 0.1,
                rotate: -25,
                filter: "blur(20px)",
                transformOrigin: "50% 50%",
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
              }}
              className={cn(
                "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg sm:max-w-lg",
                className
              )}
            >
              {children}
              {showCloseButton && (
                <DialogPrimitive.Close
                  data-slot="dialog-close"
                  className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  <XIcon />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPortal>
      )}
    </AnimatePresence>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
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
          <CodeBlock
            code={`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
    <div className="py-4">Content goes here.</div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
`}
          />
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
                <td className="px-4 py-2 font-mono">open</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Controls whether the dialog is open (controlled usage)
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">defaultOpen</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Whether the dialog is open by default
                </td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onOpenChange</td>
                <td className="px-4 py-2 font-mono">
                  (open: boolean) =&gt; void
                </td>
                <td className="px-4 py-2">
                  Callback when open/close state changes
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Dialog content</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
