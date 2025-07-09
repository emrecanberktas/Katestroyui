"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";

const codeExample = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";

function Example() {
  return (
    <Tabs defaultValue="profile">
      <TabsList className="justify-center">
        <TabsTrigger value="profile">Profil</TabsTrigger>
        <TabsTrigger value="settings">Ayarlar</TabsTrigger>
        <TabsTrigger value="security">Güvenlik</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div>
          <h3 className="text-lg font-semibold mb-2">Kullanıcı Bilgileri</h3>
          <p className="mb-1">Ad: <span className="font-medium">Ahmet Yılmaz</span></p>
          <p className="mb-1">E-posta: <span className="font-medium">ahmet@example.com</span></p>
          <p className="mb-1">Üyelik: <span className="font-medium">Premium</span></p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div>
          <h3 className="text-lg font-semibold mb-2">Genel Ayarlar</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bildirimler: Açık</li>
            <li>Tema: Koyu</li>
            <li>Dil: Türkçe</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div>
          <h3 className="text-lg font-semibold mb-2">Güvenlik</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>İki adımlı doğrulama: Aktif</li>
            <li>Son giriş: 2 saat önce</li>
            <li>Şifre: Son değişiklik 1 ay önce</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add tabs",
  npm: "npx shadcn@latest add tabs",
  yarn: "yarn dlx shadcn@latest add tabs",
  bun: "bunx shadcn@latest add tabs",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-tabs motion",
  npm: "npm install @radix-ui/react-tabs motion",
  yarn: "yarn add @radix-ui/react-tabs motion",
  bun: "bun add @radix-ui/react-tabs motion",
};

export default function TabsDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Tabs</h1>
        <p className="text-muted-foreground text-lg">
          Farklı içerikleri sekmeler arasında geçiş yaparak göstermek için
          kullanılan animasyonlu ve erişilebilir bir tabs bileşeni.
        </p>
      </div>

      {/* Demo ve Kod sekmeli gösterim */}
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-4 mb-6 items-center justify-center">
            <Tabs defaultValue="profile">
              <TabsList className="justify-center">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="settings">Ayarlar</TabsTrigger>
                <TabsTrigger value="security">Güvenlik</TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Kullanıcı Bilgileri
                  </h3>
                  <p className="mb-1">
                    Ad: <span className="font-medium">Ahmet Yılmaz</span>
                  </p>
                  <p className="mb-1">
                    E-posta:{" "}
                    <span className="font-medium">ahmet@example.com</span>
                  </p>
                  <p className="mb-1">
                    Üyelik: <span className="font-medium">Premium</span>
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Genel Ayarlar</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bildirimler: Açık</li>
                    <li>Tema: Koyu</li>
                    <li>Dil: Türkçe</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Güvenlik</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>İki adımlı doğrulama: Aktif</li>
                    <li>Son giriş: 2 saat önce</li>
                    <li>Şifre: Son değişiklik 1 ay önce</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
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
                code={`import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";
import React from "react";
// ... tabs component implementation ...
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
                <td className="px-4 py-2 font-mono">defaultValue</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  Başlangıçta seçili olan sekme değeri
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  Kontrollü değer (controlled usage)
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onValueChange</td>
                <td className="px-4 py-2 font-mono">
                  (value: string) =&gt; void
                </td>
                <td className="px-4 py-2">Sekme değiştiğinde çağrılır</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono">React.ReactNode</td>
                <td className="px-4 py-2">
                  TabsList, TabsTrigger ve TabsContent bileşenleri
                </td>
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
