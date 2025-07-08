"use client";

import { AvatarGroup } from "@/components/ui/avatar-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

const codeExample = `import { AvatarGroup } from "@/components/ui/avatar-group";

const avatars = [
  { src: "/avatars/1.jpg", alt: "Alice" },
  { src: "/avatars/2.jpg", alt: "Bob" },
  { src: "/avatars/3.jpg", alt: "Charlie" },
  { src: "/avatars/4.jpg", alt: "Diana" },
  { src: "/avatars/5.jpg", alt: "Eve" },
  { src: "/avatars/6.jpg", alt: "Frank" },
];

<AvatarGroup avatars={avatars} max={5} size="lg" />
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add avatar-group",
  npm: "npx shadcn@latest add avatar-group",
  yarn: "yarn dlx shadcn@latest add avatar-group",
  bun: "bunx shadcn@latest add avatar-group",
};

const manualCommands = {
  pnpm: "pnpm install @radix-ui/react-avatar motion",
  npm: "npm install @radix-ui/react-avatar motion",
  yarn: "yarn add @radix-ui/react-avatar motion",
  bun: "bun add @radix-ui/react-avatar motion",
};

const avatars = [
  { src: "https://github.com/emrecanberktas.png", alt: "Emre" },
  { src: "/avatars/2.jpg", alt: "Bob" },
  { src: "/avatars/3.jpg", alt: "Charlie" },
  { src: "/avatars/4.jpg", alt: "Diana" },
  { src: "/avatars/5.jpg", alt: "Eve" },
  { src: "/avatars/6.jpg", alt: "Frank" },
];

export default function AvatarGroupDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Avatar Group</h1>
        <p className="text-muted-foreground text-lg">
          Birden fazla kullanıcıyı veya öğeyi grup halinde göstermek için
          kullanılan, animasyonlu ve erişilebilir bir avatar grubu bileşeni.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 justify-center items-center">
            <AvatarGroup avatars={avatars} max={5} size={"lg"} />
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
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { cn } from "@/lib/utils";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "./tooltip";
import { motion } from "motion/react";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: {
    src?: string;
    alt?: string;
    fallback?: string;
  }[];
  max?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
};

export function AvatarGroup({
  avatars,
  max = 5,
  size = "md",
  className,
  ...props
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <TooltipProvider>
      <div className={cn("flex -space-x-4", className)} {...props}>
        {visibleAvatars.map((avatar, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 150 }}
              >
                <Avatar
                  className={cn(
                    "border-2 border-background",
                    sizeClasses[size],
                    className
                  )}
                >
                  <AvatarImage src={avatar.src} alt={avatar.alt || ""} />
                  <AvatarFallback>
                    {avatar.fallback || avatar.alt?.[0] || "?"}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <div className="flex flex-col gap-1">
                <p className="font-medium">{avatar.alt}</p>
                {avatar.fallback && (
                  <p className="text-xs text-muted-foreground">
                    {avatar.fallback}
                  </p>
                )}
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
        {remainingCount > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 150 }}
              >
                <Avatar
                  className={cn(
                    "border-2 border-background bg-muted",
                    sizeClasses[size]
                  )}
                >
                  <AvatarFallback>+{remainingCount}</AvatarFallback>
                </Avatar>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-sm">View {remainingCount} more people</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}

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
                <td className="px-4 py-2 font-mono">avatars</td>
                <td className="px-4 py-2 font-mono">
                  {`{ src?: string; alt?: string; fallback?: string; }[]`}
                </td>
                <td className="px-4 py-2">Gösterilecek avatarlar</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">max</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">
                  Aynı anda gösterilecek maksimum avatar sayısı
                </td>
                <td className="px-4 py-2">5</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">size</td>
                <td className="px-4 py-2 font-mono">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="px-4 py-2">Avatar boyutu</td>
                <td className="px-4 py-2">&quot;md&quot;</td>
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
