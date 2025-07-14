"use client";

import {
  ExpandedTabs,
  ExpandedTabsList,
  ExpandedTabsTrigger,
  ExpandedTabsContent,
} from "@/components/ui/expanded-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import { Home, Settings, User } from "lucide-react";

const codeExample = `import {
  ExpandedTabs,
  ExpandedTabsList,
  ExpandedTabsTrigger,
  ExpandedTabsContent,
} from "@/components/ui/expanded-tabs";
import { Home, Settings, User } from "lucide-react";

export default function Example() {
  return (
    <ExpandedTabs defaultValue="home">
      <ExpandedTabsList>
        <ExpandedTabsTrigger value="home" icon={Home}>
          Anasayfa
        </ExpandedTabsTrigger>
        <ExpandedTabsTrigger value="profile" icon={User}>
          Profil
        </ExpandedTabsTrigger>
        <ExpandedTabsTrigger value="settings" icon={Settings}>
          Ayarlar
        </ExpandedTabsTrigger>
      </ExpandedTabsList>
      <ExpandedTabsContent value="home">
        Anasayfa içeriği
      </ExpandedTabsContent>
      <ExpandedTabsContent value="profile">
        Profil içeriği
      </ExpandedTabsContent>
      <ExpandedTabsContent value="settings">
        Ayarlar içeriği
      </ExpandedTabsContent>
    </ExpandedTabs>
  );
}`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/expanded-tabs",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-tabs motion lucide-react",
  npm: "npm install @radix-ui/react-tabs motion lucide-react",
  yarn: "yarn add @radix-ui/react-tabs motion lucide-react",
  bun: "bun add @radix-ui/react-tabs motion lucide-react",
};

export default function ExpandedTabsDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Expanded Tabs</h1>
        <p className="text-muted-foreground text-lg">
          Animasyonlu, ikon destekli ve genişletilmiş sekme (tab) bileşeni.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center min-h-[320px]">
            <ExpandedTabs
              defaultValue="home"
              className="w-full max-w-2xl mx-auto mt-10"
            >
              <ExpandedTabsList>
                <ExpandedTabsTrigger value="home" icon={Home}>
                  Home
                </ExpandedTabsTrigger>
                <ExpandedTabsTrigger value="profile" icon={User}>
                  Profile
                </ExpandedTabsTrigger>
                <ExpandedTabsTrigger value="settings" icon={Settings}>
                  Settings
                </ExpandedTabsTrigger>
              </ExpandedTabsList>

              <ExpandedTabsContent value="home">
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold"> Hoş geldiniz</h2>
                  <p className="text-muted-foreground">
                    Bu, ana sayfa genel bakışıdır. Burada anahtar metrikleri
                    izleyebilir ve son güncellemeleri keşfedebilirsiniz.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                    alt="Dashboard preview"
                    className="rounded-xl shadow-md object-cover w-full max-h-60"
                  />
                </div>
              </ExpandedTabsContent>

              <ExpandedTabsContent value="profile">
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold"> Profiliniz</h2>
                  <p className="text-muted-foreground">
                    Kişisel bilgilerinizi yönetin, yeni bir avatar yükleyin veya
                    bio&apos;nızı güncelleyin.
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://github.com/emrecanberktas.png"
                      alt="Avatar"
                      className="w-20 h-20 rounded-full border"
                    />
                    <div>
                      <p className="font-medium">Emre Can Berktaş</p>
                      <p className="text-sm text-muted-foreground">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
              </ExpandedTabsContent>

              <ExpandedTabsContent value="settings">
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">⚙️ Ayarlar</h2>
                  <p className="text-muted-foreground">
                    Uygulama tercihlerini ayarlayın, temaları değiştirin veya
                    hesap ayarlarınızı güncelleyin.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li> Karanlık mod desteği</li>
                    <li> Bildirim ayarları</li>
                    <li> Gizlilik ve güvenlik seçenekleri</li>
                  </ul>
                </div>
              </ExpandedTabsContent>
            </ExpandedTabs>
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
                <th className="px-4 py-2 text-left">Bileşen</th>
                <th className="px-4 py-2 text-left">Prop</th>
                <th className="px-4 py-2 text-left">Tip</th>
                <th className="px-4 py-2 text-left">Açıklama</th>
                <th className="px-4 py-2 text-left">Varsayılan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabs</td>
                <td className="px-4 py-2 font-mono">defaultValue</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Varsayılan seçili sekme değeri</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabsTrigger</td>
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Sekmenin değeri</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabsTrigger</td>
                <td className="px-4 py-2 font-mono">icon</td>
                <td className="px-4 py-2 font-mono">LucideIcon</td>
                <td className="px-4 py-2">Sekme başında gösterilecek ikon</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">ExpandedTabsContent</td>
                <td className="px-4 py-2 font-mono">value</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  İçeriğin bağlı olduğu sekme değeri
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
