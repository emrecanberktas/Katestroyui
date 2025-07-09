"use client";
import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import TypewriterEffect from "@/components/ui/type-writer-effect";
import { CodeBlock } from "@/components/code-block";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="flex flex-col items-center gap-6 text-center mt-8"
      >
        <motion.img
          src="/Logo.jpg"
          alt="Logo"
          width={96}
          height={96}
          className="rounded-lg shadow mb-2"
        />
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">
          KatestroyUI
        </h1>
        <TypewriterEffect
          texts={[
            "Modern, animasyonlu ve kullanımı kolay React bileşenleri.",
            "Hızlı geliştirme için tasarlandı.",
            "Açık kaynak, esnek ve şık!",
          ]}
          speed={60}
          deleteSpeed={30}
          delayBetween={1800}
          loop
          showCursor
          className="text-xl text-blue-700 dark:text-blue-400 font-mono min-h-[2.5rem]"
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/docs/components/accordion"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors text-lg"
          >
            Dökümantasyonu Keşfet
          </Link>
          <a
            href="https://github.com/katdestroy/katestroy-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg  text-white font-semibold shadow-md  transition-colors text-lg"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <section className="w-full max-w-3xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-zinc-900 border rounded-xl shadow p-6 flex flex-col items-center gap-3"
        >
          <span className="text-blue-600 dark:text-blue-400 text-3xl">✨</span>
          <h3 className="font-bold text-lg">Modern Tasarım</h3>
          <p className="text-muted-foreground text-sm">
            Şık, güncel ve tamamen özelleştirilebilir arayüz bileşenleri.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-zinc-900 border rounded-xl shadow p-6 flex flex-col items-center gap-3"
        >
          <span className="text-green-600 dark:text-green-400 text-3xl">
            ⚡
          </span>
          <h3 className="font-bold text-lg">Kolay Entegrasyon</h3>
          <p className="text-muted-foreground text-sm">
            Hızlı kurulum, sade API ve kapsamlı dökümantasyon ile hemen
            kullanmaya başlayın.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-zinc-900 border rounded-xl shadow p-6 flex flex-col items-center gap-3"
        >
          <span className="text-pink-600 dark:text-pink-400 text-3xl">🎬</span>
          <h3 className="font-bold text-lg">Animasyonlu Bileşenler</h3>
          <p className="text-muted-foreground text-sm">
            Motion tabanlı animasyonlar ile etkileşimli ve canlı kullanıcı
            deneyimi.
          </p>
        </motion.div>
      </section>

      {/* Quick Start */}
      <section className="w-full max-w-2xl mt-16 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">Hızlı Başlangıç</h2>
        <CodeBlock
          code={`pnpm dlx shadcn@latest add accordion
pnpm install motion`}
        />
        <span className="text-muted-foreground text-sm">
          <b>Not:</b> Her bileşenin dökümanında kurulum ve kullanım detaylarını
          bulabilirsiniz.
        </span>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto mt-20 py-8 text-center text-xs text-muted-foreground border-t">
        KatestroyUI © {new Date().getFullYear()} &mdash; Açık kaynaklı, MIT
        lisanslı.
      </footer>
    </main>
  );
}
