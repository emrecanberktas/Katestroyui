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
import registry from "../registry.json";

function getUIComponents() {
  // registry.ui varsa onu döndür, yoksa boş dizi
  // @ts-ignore
  return registry.items || [];
}

export function AppSidebar() {
  const uiComponents = getUIComponents();
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <img
            src="/Logo.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg shadow"
          />
          <span className="font-bold text-lg tracking-tight">KatestroyUI</span>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Componentler</SidebarGroupLabel>
          <SidebarMenu>
            {uiComponents.map((comp: any) => (
              <SidebarMenuItem key={comp.name}>
                <SidebarMenuButton asChild>
                  <Link href={`/docs/components/${comp.name}`}>
                    {/* İleride ikon eklenebilir */}
                    <span>{comp.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
