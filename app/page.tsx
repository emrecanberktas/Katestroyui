"use client";
import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col min-h-svh px-4 py-16 gap-12 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <motion.img
          src="/Logo.jpg"
          alt="Logo"
          width={128}
          height={128}
          className="rounded-lg shadow"
        ></motion.img>
        <h1 className="text-4xl font-bold tracking-tight">KatestroyUI</h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl"
        >
          Modern, animasyonlu ve kullanımı kolay bir React component
          kütüphanesi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href={"/accordion"}
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors text-lg animate-bounce"
          >
            Dökümantasyonu Keşfet
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-sm text-muted-foreground mt-8"
      >
        <span>
          Soldaki menüden tüm componentlerin dökümanına ulaşabilirsiniz.
        </span>
      </motion.div>
    </div>
  );
}
