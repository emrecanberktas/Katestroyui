"use client";
import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import TypewriterEffect from "@/components/ui/type-writer-effect";
import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.img
        src="/Logo.png"
        alt="Logo"
        width={80}
        height={80}
        className="rounded-lg shadow mb-2 sm:w-24 sm:h-24"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="flex flex-col items-center gap-4 sm:gap-6 text-center mt-4 sm:mt-8"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
          KatestroyUI
        </h1>
        <TypewriterEffect
          texts={[
            "Modern, animated, and easy-to-use React components.",
            "Designed for rapid development.",
            "Open source, flexible, and stylish!",
          ]}
          speed={60}
          deleteSpeed={30}
          delayBetween={1800}
          loop
          showCursor
          className="text-lg sm:text-xl text-blue-700 dark:text-blue-400 font-mono min-h-[2rem] sm:min-h-[2.5rem] px-2"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-sm sm:max-w-none">
          <Button
            asChild
            className="px-4 sm:px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors text-base sm:text-lg h-12 sm:h-14"
          >
            <Link href="/docs/components/accordion">Explore Documentation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-4 sm:px-6 py-3 rounded-lg font-semibold shadow-md transition-colors text-base sm:text-lg h-12 sm:h-14"
          >
            <a
              href="https://github.com/emrecanberktas/Katestroyui"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </motion.div>

      <section className="w-full max-w-3xl mt-12 sm:mt-16 px-4 sm:px-0 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-zinc-900 border rounded-xl shadow p-4 sm:p-6 flex flex-col items-center gap-3 min-h-[170px] sm:min-h-[200px]"
        >
          <span className="text-2xl sm:text-3xl">✨</span>
          <h3 className="font-bold text-base sm:text-lg">Modern Design</h3>
          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            Stylish, up-to-date, and fully customizable UI components.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-zinc-900 border rounded-xl shadow p-4 sm:p-6 flex flex-col items-center gap-3 min-h-[170px] sm:min-h-[200px]"
        >
          <span className=" text-2xl sm:text-3xl">⚡</span>
          <h3 className="font-bold text-base sm:text-lg">Quick setup</h3>
          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            Quick setup, simple API, and comprehensive documentation to get
            started right away.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-zinc-900 border rounded-xl shadow p-4 sm:p-6 flex flex-col items-center gap-3 min-h-[170px] sm:min-h-[200px]"
        >
          <span className="text-2xl sm:text-3xl">🎬</span>
          <h3 className="font-bold text-base sm:text-lg">Animated</h3>
          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            Interactive and lively user experiences with motion-based
            animations.
          </p>
        </motion.div>
      </section>

      {/* Quick Start */}
      <section className="w-full max-w-2xl mt-12 sm:mt-16 px-4 sm:px-0 flex flex-col items-center gap-4 sm:gap-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Quick Start
        </h2>
        <div className="w-full">
          <CodeBlock
            code={`pnpm dlx shadcn@latest add https://www.katestroyui.com/r/accordion`}
          />
        </div>
        <span className="text-muted-foreground text-xs sm:text-sm text-center">
          Find installation and usage details in each component&apos;s
          documentation.
        </span>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto mt-16 sm:mt-20 py-6 sm:py-8 px-4 sm:px-0 text-center text-xs text-muted-foreground border-t">
        KatestroyUI © {new Date().getFullYear()} &mdash; Open source, MIT
        licensed.
      </footer>
    </main>
  );
}
