"use client";

import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

export default function TanStackStartInstallationPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-3">TanStack Start Installation</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Install and configure your UI components for TanStack Start projects.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Create project</h2>
      <p className="mb-2">
        Start by creating a new TanStack Start project by following the Build a
        Project from Scratch guide on the TanStack Start website.
      </p>
      <p className="mb-2 font-semibold">
        Do not add Tailwind yet. We&apos;ll install Tailwind v4 in the next
        step.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">Add Tailwind</h2>
      <TerminalBlock
        commands={{
          pnpm: "pnpm add tailwindcss @tailwindcss/postcss postcss",
          npm: "npm install tailwindcss @tailwindcss/postcss postcss",
          yarn: "yarn add tailwindcss @tailwindcss/postcss postcss",
          bun: "bun add tailwindcss @tailwindcss/postcss postcss",
        }}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">
        Create postcss.config.ts
      </h2>
      <p className="mb-2">
        Create a <span className="font-mono">postcss.config.ts</span> file at
        the root of your project:
      </p>
      <CodeBlock
        code={`export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">
        Create app/styles/app.css
      </h2>
      <p className="mb-2">
        Create an <span className="font-mono">app.css</span> file in the{" "}
        <span className="font-mono">app/styles</span> directory and import
        Tailwind CSS:
      </p>
      <CodeBlock code={`@import "tailwindcss" source("../");`} />

      <h2 className="text-xl font-semibold mb-2 mt-8">Import app.css</h2>
      <p className="mb-2">
        Import <span className="font-mono">app.css</span> in your root route
        file:
      </p>
      <CodeBlock
        code={`import type { ReactNode } from "react"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/start"

import appCss from "@/styles/app.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Edit tsconfig.json</h2>
      <p className="mb-2">
        Add the following to <span className="font-mono">tsconfig.json</span> to
        resolve paths:
      </p>
      <CodeBlock
        code={`{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "Bundler",
    "module": "ESNext",
    "target": "ES2022",
    "skipLibCheck": true,
    "strictNullChecks": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"]
    }
  }
}`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Run the CLI</h2>
      <p className="mb-2">
        Run the <span className="font-mono">shadcn</span> init command to setup
        your project:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx shadcn@canary init",
          npm: "npx shadcn@canary init",
          yarn: "yarn dlx shadcn@canary init",
          bun: "bunx shadcn@canary init",
        }}
      />
      <p className="mt-2">
        This will create a <span className="font-mono">components.json</span>{" "}
        file in the root of your project and configure CSS variables inside{" "}
        <span className="font-mono">app/styles/app.css</span>.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">Add Components</h2>
      <p className="mb-2">
        You can now start adding components to your project. For example, to add
        the <span className="font-mono">Button</span> component:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx shadcn@canary add button",
          npm: "npx shadcn@canary add button",
          yarn: "yarn dlx shadcn@canary add button",
          bun: "bunx shadcn@canary add button",
        }}
      />
      <p className="mt-4">
        The command above will add the <span className="font-mono">Button</span>{" "}
        component to your project. You can then import and use it like this:
      </p>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}
      />

      <p className="text-muted-foreground text-base mt-8">
        For more details, see the documentation for each component.
      </p>
    </div>
  );
}
