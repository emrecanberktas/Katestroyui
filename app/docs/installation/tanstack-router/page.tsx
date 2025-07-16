"use client";

import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

export default function TanStackRouterInstallationPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-3">TanStack Router Installation</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Install and configure your UI components for TanStack Router projects.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Create project</h2>
      <p className="mb-2">Start by creating a new TanStack Router project:</p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx create-tsrouter-app@latest my-app --template file-router --tailwind --add-ons shadcn",
          npm: "npx create-tsrouter-app@latest my-app --template file-router --tailwind --add-ons shadcn",
          yarn: "yarn create tsrouter-app my-app --template file-router --tailwind --add-ons shadcn",
          bun: "bunx create-tsrouter-app@latest my-app --template file-router --tailwind --add-ons shadcn",
        }}
      />

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
        The command above will add the <span className="font-mono">Button</span>
        component to your project. You can then import and use it like this:
      </p>
      <CodeBlock
        code={`import { createFileRoute } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
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
