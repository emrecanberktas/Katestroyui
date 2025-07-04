"use client";

import "../app/globals.css";
import { ReactNode } from "react";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex">
        <SidebarProvider>
          <AppSidebar />
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Top Bar */}
            <header className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-10">
              <div />
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/emrecanberktas/Katestroyui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <GithubIcon size={24} />
                </a>
                {/* Tema toggle butonu buraya eklenecek */}
              </div>
            </header>
            <main className="flex-1 p-8 overflow-y-auto">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
