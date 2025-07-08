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

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Dialog Aç</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Başlık</DialogTitle>
          <DialogDescription>
            Dialog açıklaması burada.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">İçerik buraya gelecek.</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Kapat</Button>
          </DialogClose>
          <Button>Kaydet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add dialog",
  npm: "npx shadcn@latest add dialog",
  yarn: "yarn dlx shadcn@latest add dialog",
  bun: "bunx shadcn@latest add dialog",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-dialog motion",
  npm: "npm install @radix-ui/react-dialog motion",
  yarn: "yarn add @radix-ui/react-dialog motion",
  bun: "bun add @radix-ui/react-dialog motion",
};

export default function DialogDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Dialog</h1>
        <p className="text-muted-foreground text-lg">
          Animasyonlu, erişilebilir ve özelleştirilebilir bir Dialog componenti.
        </p>
      </div>

      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-4 mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Dialog Aç</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Başlık</DialogTitle>
                  <DialogDescription>
                    Dialog açıklaması burada.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">İçerik buraya gelecek.</div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Kapat</Button>
                  </DialogClose>
                  <Button>Kaydet</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-2 mb-8">
        <h2 className="text-xl font-semibold mb-4">Kullanım</h2>
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
    <Button>Dialog Aç</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Başlık</DialogTitle>
      <DialogDescription>Dialog açıklaması burada.</DialogDescription>
    </DialogHeader>
    <div className="py-4">İçerik buraya gelecek.</div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Kapat</Button>
      </DialogClose>
      <Button>Kaydet</Button>
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
                <th className="px-4 py-2 text-left">Tip</th>
                <th className="px-4 py-2 text-left">Açıklama</th>
                <th className="px-4 py-2 text-left">Varsayılan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">open</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Dialog'un açık olup olmadığını kontrol eder (controlled usage)
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">defaultOpen</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Dialog'un başlangıçta açık olup olmadığını belirler
                </td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onOpenChange</td>
                <td className="px-4 py-2 font-mono">
                  (open: boolean) =&gt; void
                </td>
                <td className="px-4 py-2">
                  Açık/kapalı durumu değiştiğinde çağrılır
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">ReactNode</td>
                <td className="px-4 py-2">Dialog içeriği</td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
