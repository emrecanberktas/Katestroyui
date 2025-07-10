import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import registry from "../registry.json";

function getUIComponents() {
  return registry.items || [];
}

export function AppSidebar() {
  const uiComponents = getUIComponents();
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/Logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg shadow"
            />
            <span className="font-bold text-lg tracking-tight">
              KatestroyUI
            </span>
          </Link>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Componentler</SidebarGroupLabel>
          <SidebarMenu>
            {uiComponents.map((comp: { name: string; title: string }) => {
              const isActive = pathname === `/docs/components/${comp.name}`;
              return (
                <SidebarMenuItem key={comp.name}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={`/docs/components/${comp.name}`}>
                      {/* İleride ikon eklenebilir */}
                      <span>{comp.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
