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
  pnpm: "pnpm dlx shadcn@latest add button",
  npm: "npx shadcn@latest add button",
  yarn: "yarn dlx shadcn@latest add button",
  bun: "bunx shadcn@latest add button",
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
          Yüklenme, başarı ve bekleme durumlarını animasyonlu olarak
          gösterebilen erişilebilir bir buton bileşeni.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
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
              idleText="Kaydet"
              loadingIndicator={<Loader2Icon className="animate-spin" />}
              successText="Başarılı!"
            />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="bg-zinc-900 rounded-lg p-4 text-sm text-white font-mono relative mt-2 overflow-x-auto border shadow mb-6">
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
                <td className="px-4 py-2 font-mono">state</td>
                <td className="px-4 py-2 font-mono">
                  "idle" | "loading" | "success"
                </td>
                <td className="px-4 py-2">Butonun durumu</td>
                <td className="px-4 py-2">"idle"</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onClick</td>
                <td className="px-4 py-2 font-mono">() =&gt; void</td>
                <td className="px-4 py-2">Tıklama olayı</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">idleText</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Bekleme metni</td>
                <td className="px-4 py-2">"Form Submit"</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">loadingIndicator</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Yükleniyor göstergesi</td>
                <td className="px-4 py-2">&lt;Loader2Icon /&gt;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">successText</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">Başarı metni</td>
                <td className="px-4 py-2">"Form Submitted!"</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Ekstra CSS sınıfları</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">disabled</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Butonun devre dışı olup olmadığı</td>
                <td className="px-4 py-2">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
