"use client";

import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

export default function NextInstallationPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-3">Next.js Installation</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Install and configure your UI components for Next.js.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Create project</h2>
      <p className="mb-2">
        Run the{" "}
        <span className="font-mono bg-muted px-1 py-0.5 rounded">init</span>{" "}
        command to create a new Next.js project or set up an existing one:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx shadcn@latest init",
          npm: "npx shadcn@latest init",
          yarn: "yarn dlx shadcn@latest init",
          bun: "bunx shadcn@latest init",
        }}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Add Components</h2>
      <p className="mb-2">
        You can now start adding components to your project. For example, to add
        the{" "}
        <span className="font-mono bg-muted px-1 py-0.5 rounded">Button</span>{" "}
        component:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx shadcn@latest add button",
          npm: "npx shadcn@latest add button",
          yarn: "yarn dlx shadcn@latest add button",
          bun: "bunx shadcn@latest add button",
        }}
      />

      <p className="mt-4">
        The command above will add the{" "}
        <span className="font-mono bg-muted px-1 py-0.5 rounded">Button</span>{" "}
        component to your project. You can then import and use it like this:
      </p>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}`}
      />

      <p className="text-muted-foreground text-base mt-8">
        For more details, see the documentation for each component.
      </p>
    </div>
  );
}
