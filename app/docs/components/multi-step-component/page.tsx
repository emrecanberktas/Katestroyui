"use client";

import { MultiStep } from "@/components/ui/multi-step-component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";
import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const codeExample = `import { MultiStep } from "@/components/ui/multi-step-component";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

function Example() {
  const [name, setName] = React.useState("");
  const [prefs, setPrefs] = React.useState({ email: false, sms: false, push: false });
  const [gender, setGender] = React.useState("");
  const [approved, setApproved] = React.useState(false);

  const steps = [
    {
      title: "Kullanıcı Bilgileri",
      content: (
        <Input
          placeholder="Adınızı girin"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      ),
      description: "Lütfen adınızı girin."
    },
    {
      title: "Bildirim Tercihleri",
      content: (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <Checkbox checked={prefs.email} onCheckedChange={v => setPrefs(p => ({ ...p, email: !!v }))} /> E-posta
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={prefs.sms} onCheckedChange={v => setPrefs(p => ({ ...p, sms: !!v }))} /> SMS
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={prefs.push} onCheckedChange={v => setPrefs(p => ({ ...p, push: !!v }))} /> Push Bildirim
          </label>
        </div>
      ),
      description: "Bildirim tercihlerinizi seçin."
    },
    {
      title: "Cinsiyet Seçimi",
      content: (
        <RadioGroup value={gender} onValueChange={setGender}>
          <RadioGroupItem value="erkek">Erkek</RadioGroupItem>
          <RadioGroupItem value="kadin">Kadın</RadioGroupItem>
          <RadioGroupItem value="diger">Diğer</RadioGroupItem>
        </RadioGroup>
      ),
      description: "Cinsiyetinizi seçin."
    },
    {
      title: "Onay ve Gönder",
      content: (
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2">
            <Checkbox checked={approved} onCheckedChange={v => setApproved(!!v)} /> Tüm bilgilerin doğru olduğunu onaylıyorum.
          </label>
          <Button disabled={!approved} className="mt-2">Gönder</Button>
        </div>
      ),
      description: "Son adım: Onaylayıp gönderin."
    }
  ];

  return <MultiStep steps={steps} />;
}
`;

const cliCommands = {
  pnpm: "pnpm dlx shadcn@latest add https://www.katestroyui.com/r/multi-step-component",
  npm: "npx shadcn@latest add https://www.katestroyui.com/r/multi-step-component",
  yarn: "yarn dlx shadcn@latest add https://www.katestroyui.com/r/multi-step-component",
  bun: "bunx shadcn@latest add https://www.katestroyui.com/r/multi-step-component",
};

const manualCommands = {
  pnpm: "pnpm install motion",
  npm: "npm install motion",
  yarn: "yarn add motion",
  bun: "bun add motion",
};

export default function MultiStepComponentDocs() {
  const [name, setName] = React.useState("");
  const [prefs, setPrefs] = React.useState({
    email: false,
    sms: false,
    push: false,
  });
  const [gender, setGender] = React.useState("");
  const [approved, setApproved] = React.useState(false);

  const steps = [
    {
      title: "Kullanıcı Bilgileri",
      content: (
        <Input
          placeholder="Adınızı girin"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ),
      description: "Lütfen adınızı girin.",
    },
    {
      title: "Bildirim Tercihleri",
      content: (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={prefs.email}
              onCheckedChange={(v) => setPrefs((p) => ({ ...p, email: !!v }))}
            />{" "}
            E-posta
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={prefs.sms}
              onCheckedChange={(v) => setPrefs((p) => ({ ...p, sms: !!v }))}
            />{" "}
            SMS
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={prefs.push}
              onCheckedChange={(v) => setPrefs((p) => ({ ...p, push: !!v }))}
            />{" "}
            Push Bildirim
          </label>
        </div>
      ),
      description: "Bildirim tercihlerinizi seçin.",
    },
    {
      title: "Cinsiyet Seçimi",
      content: (
        <RadioGroup value={gender} onValueChange={setGender}>
          <RadioGroupItem value="erkek">Erkek</RadioGroupItem>
          <RadioGroupItem value="kadin">Kadın</RadioGroupItem>
          <RadioGroupItem value="diger">Diğer</RadioGroupItem>
        </RadioGroup>
      ),
      description: "Cinsiyetinizi seçin.",
    },
    {
      title: "Onay ve Gönder",
      content: (
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={approved}
              onCheckedChange={(v) => setApproved(!!v)}
            />{" "}
            Tüm bilgilerin doğru olduğunu onaylıyorum.
          </label>
          <Button disabled={!approved} className="mt-2">
            Gönder
          </Button>
        </div>
      ),
      description: "Son adım: Onaylayıp gönderin.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Multi Step Component</h1>
        <p className="text-muted-foreground text-lg">
          Çok adımlı, animasyonlu ve erişilebilir bir form veya işlem akışı
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
            <MultiStep steps={steps} />
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
                code={`import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import type { Transition } from "motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./card";
import { Button } from "./button";

interface Step {
  title: string;
  content: React.ReactNode;
  description?: string | React.ReactNode;
}

interface MultiStepProps {
  steps: Step[];
  defaultStep?: number;
  className?: string;
  backButtonLabel?: string;
  nextButtonLabel?: string;
  completeButtonLabel?: string;
  transition?: Transition;
  onNext?: (currentStep: number) => void;
  onBack?: (currentStep: number) => void;
  onComplete?: () => void;
}

function MultiStep({
  steps,
  defaultStep = 0,
  className,
  backButtonLabel = "Back",
  nextButtonLabel = "Continue",
  completeButtonLabel = "Finish",
  transition = { duration: 0.5, type: "spring", bounce: 0 },
  onNext,
  onBack,
  onComplete,
}: MultiStepProps) {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection("next");
      setCurrentStep((prev) => prev + 1);
      onNext?.(currentStep);
    } else {
      setDirection("next");
      setCurrentStep(0);
      onComplete?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection("back");
      setCurrentStep((prev) => prev - 1);
      onBack?.(currentStep);
    }
  };

  const content = useMemo(
    () => steps[currentStep]?.content || null,
    [currentStep, steps]
  );

  const variants = {
    initial: (direction: "next" | "back") => ({
      x: direction === "next" ? 70 : -70,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "next" | "back") => ({
      x: direction === "next" ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <Card
      className={cn(
        "p-4 sm:p-6 w-full max-w-[90%] sm:max-w-lg md:max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden",
        className
      )}
    >
      <MotionConfig transition={transition}>
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                aria-current="step"
              >
                {steps[currentStep]?.title}
              </motion.div>
            </AnimatePresence>
          </CardTitle>
          {steps[currentStep]?.description && (
            <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2 overflow-hidden">
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}
              >
                <motion.div
                  key={currentStep}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                >
                  {steps[currentStep]?.description}
                </motion.div>
              </AnimatePresence>
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="min-h-[150px] sm:min-h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="w-full"
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex justify-between gap-4 overflow-hidden">
          <Button
            variant="outline"
            disabled={currentStep === 0}
            onClick={handleBack}
            aria-label={backButtonLabel}
            className="w-full sm:w-auto"
          >
            {backButtonLabel}
          </Button>
          <Button
            variant="default"
            onClick={handleNext}
            aria-label={
              currentStep === steps.length - 1
                ? completeButtonLabel
                : nextButtonLabel
            }
            className="w-full sm:w-auto"
          >
            {currentStep === steps.length - 1
              ? completeButtonLabel
              : nextButtonLabel}
          </Button>
        </CardFooter>
      </MotionConfig>
    </Card>
  );
}

export { MultiStep };
export type { Step };
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
                <td className="px-4 py-2 font-mono">steps</td>
                <td className="px-4 py-2 font-mono">Step[]</td>
                <td className="px-4 py-2">
                  Adım başlıkları, içerikleri ve açıklamaları
                </td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">defaultStep</td>
                <td className="px-4 py-2 font-mono">number</td>
                <td className="px-4 py-2">Başlangıç adımı</td>
                <td className="px-4 py-2">0</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Ekstra CSS sınıfları</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">backButtonLabel</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Geri butonu metni</td>
                <td className="px-4 py-2">&quot;Back&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">nextButtonLabel</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">İleri butonu metni</td>
                <td className="px-4 py-2">&quot;Continue&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">completeButtonLabel</td>
                <td className="px-4 py-2 font-mono">string</td>
                <td className="px-4 py-2">Son adım butonu metni</td>
                <td className="px-4 py-2">&quot;Finish&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">transition</td>
                <td className="px-4 py-2 font-mono">Transition</td>
                <td className="px-4 py-2">Animasyon geçiş ayarları</td>
                <td className="px-4 py-2">
                  {"{ duration: 0.5, type: 'spring', bounce: 0 }"}
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onNext</td>
                <td className="px-4 py-2 font-mono">
                  (currentStep: number) =&gt; void
                </td>
                <td className="px-4 py-2">İleriye geçildiğinde çağrılır</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onBack</td>
                <td className="px-4 py-2 font-mono">
                  (currentStep: number) =&gt; void
                </td>
                <td className="px-4 py-2">Geriye dönüldüğünde çağrılır</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-mono">onComplete</td>
                <td className="px-4 py-2 font-mono">() =&gt; void</td>
                <td className="px-4 py-2">
                  Tüm adımlar tamamlandığında çağrılır
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
