"use client";

import TypewriterEffect from "@/components/ui/type-writer-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";

const codeExample = `import TypewriterEffect from "@/components/ui/type-writer-effect";

export default function Demo() {
  return (
    <TypewriterEffect
      texts={["Merhaba, dünya!", "Typewriter Effect ile yazı animasyonu."]}
      speed={80}
      deleteSpeed={40}
      delayBetween={1500}
      loop
      showCursor
      cursorChar="|"
      className="text-xl font-mono text-primary"
    />
  );
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add type-writer-effect",
  npm: "npx shadcn@latest add type-writer-effect",
  yarn: "yarn dlx shadcn@latest add type-writer-effect",
  bun: "bunx shadcn@latest add type-writer-effect",
};

const manualCommands = {
  pnpm: "pnpm install motion",
  npm: "npm install motion",
  yarn: "yarn add motion",
  bun: "bun add motion",
};

export default function TypewriterEffectDocs() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Typewriter Effect</h1>
        <p className="text-muted-foreground text-lg">
          Typewriter Effect bileşeni, yazıların bir daktilo animasyonu ile tek
          tek veya çoklu olarak gösterilmesini sağlar. Sunumlar, başlıklar veya
          dikkat çekici metinler için idealdir.
        </p>
      </div>
      <Tabs defaultValue="demo">
        <TabsList className="mb-3">
          <TabsTrigger value="demo">Canlı Demo</TabsTrigger>
          <TabsTrigger value="code">Kod</TabsTrigger>
        </TabsList>
        <TabsContent value="demo">
          <div className="bg-background border rounded-lg p-6 shadow flex flex-col gap-6 mb-6 items-center justify-center">
            <TypewriterEffect
              texts={[
                "Merhaba, dünya!",
                "Typewriter Effect ile yazı animasyonu.",
              ]}
              speed={80}
              deleteSpeed={40}
              delayBetween={1500}
              loop
              showCursor
              cursorChar="|"
              className="text-xl font-mono text-primary"
            />
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
                code={`import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface TypewriterEffectProps {
  text?: string;
  texts?: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
  onTextChange?: (currentText: string, index: number) => void;
  startDelay?: number;
  preserveHeight?: boolean;
  randomSpeed?: boolean;
  pauseOnHover?: boolean;
  enableCharBounce?: boolean;
}

const cn = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  texts = [],
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  className,
  onComplete,
  onTextChange,
  startDelay = 0,
  preserveHeight = false,
  randomSpeed = false,
  pauseOnHover = false,
  enableCharBounce = true,
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const allTexts = text ? [text] : texts;
  const currentText = allTexts[currentIndex] || "";

  const getRandomSpeed = (baseSpeed: number) =>
    randomSpeed ? baseSpeed + Math.random() * 50 - 25 : baseSpeed;

  useEffect(() => {
    if (allTexts.length === 0 || isPaused) return;

    const handleTyping = () => {
      const joinedText = displayedText.join("");

      if (!isDeleting && joinedText === currentText) {
        onTextChange?.(currentText, currentIndex);

        if (loop && allTexts.length > 1) {
          timeoutRef.current = setTimeout(
            () => setIsDeleting(true),
            delayBetween
          );
        } else {
          onComplete?.();
        }
        return;
      }

      if (isDeleting && joinedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % allTexts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) return prev.slice(0, -1);
          const nextChar = currentText[prev.length];
          return [...prev, nextChar];
        });
      }, getRandomSpeed(isDeleting ? deleteSpeed : speed));

      timeoutRef.current = timeout;
    };

    if (startDelay && displayedText.length === 0 && !isDeleting) {
      timeoutRef.current = setTimeout(handleTyping, startDelay);
    } else {
      handleTyping();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayedText, isDeleting, currentIndex, isPaused]);

  const handleMouseEnter = () => pauseOnHover && setIsPaused(true);
  const handleMouseLeave = () => pauseOnHover && setIsPaused(false);

  return (
    <span
      className={cn("inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
        minHeight: preserveHeight ? "1.2em" : undefined,
      }}
    >
      {displayedText.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: -2 }}
          animate={{ y: 0 }}
          transition={{ duration: enableCharBounce ? 0.1 : 0 }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}

      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="ml-1 inline-block"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterEffect;
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
                <td className="px-4 py-2 font-mono">text</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Tek bir metin göstermek için.</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">texts</td>
                <td className="px-4 py-2 font-mono">string[]</td>
                <td className="px-4 py-2">
                  Birden fazla metni sıralı göstermek için.
                </td>
                <td className="px-4 py-2">[]</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">speed</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Yazma hızı (ms).</td>
                <td className="px-4 py-2">100</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">deleteSpeed</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Silme hızı (ms).</td>
                <td className="px-4 py-2">50</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">delayBetween</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">
                  Metinler arası bekleme süresi (ms).
                </td>
                <td className="px-4 py-2">2000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">loop</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Metinler döngüsel olarak tekrar eder.
                </td>
                <td className="px-4 py-2">true</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">showCursor</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Yanıp sönen imleç gösterilsin mi?</td>
                <td className="px-4 py-2">true</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">cursorChar</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">İmleç karakteri.</td>
                <td className="px-4 py-2">"|"</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">
                  Ekstra Tailwind/özelleştirme sınıfları.
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onComplete</td>
                <td className="px-4 py-2 font-mono">() =&gt; void</td>
                <td className="px-4 py-2">
                  Animasyon tamamlandığında çağrılır.
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onTextChange</td>
                <td className="px-4 py-2 font-mono">
                  (currentText: string, index: number) =&gt; void
                </td>
                <td className="px-4 py-2">Her metin değişiminde çağrılır.</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">startDelay</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">
                  Animasyon başlamadan önceki gecikme (ms).
                </td>
                <td className="px-4 py-2">0</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">preserveHeight</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">Yükseklik sabit kalsın mı?</td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">randomSpeed</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Her karakter için hız rastgele değişsin mi?
                </td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">pauseOnHover</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Üzerine gelince animasyon dursun mu?
                </td>
                <td className="px-4 py-2">false</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">enableCharBounce</td>
                <td className="px-4 py-2 font-mono">boolean</td>
                <td className="px-4 py-2">
                  Karakterler animasyonla gelsin mi?
                </td>
                <td className="px-4 py-2">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
