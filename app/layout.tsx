"use client";

import "../app/globals.css";
import { ReactNode } from "react";
import { GithubIcon } from "lucide-react";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarProvider } from "../components/ui/sidebar";
import { ModeToggle } from "../components/mode-toggle";
import { ThemeProvider } from "../components/theme-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className=" text-foreground min-h-screen flex">
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar />
            <div className="flex-1 flex flex-col min-h-screen min-w-0">
              <header className="flex items-center justify-between px-8 py-4 border-b backdrop-blur-md sticky top-0 z-10">
                <div />
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/emrecanberktas/Katestroyui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <GithubIcon size={24} />
                  </a>
                  <ModeToggle />
                </div>
              </header>
              <main className="flex-1 overflow-y-auto min-w-0">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
