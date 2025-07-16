"use client";

import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

export default function ViteInstallationPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-3">Vite Installation</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Install and configure your UI components for Vite.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Create project</h2>
      <p className="mb-2">
        Start by creating a new React project using{" "}
        <span className="font-mono bg-muted px-1 py-0.5 rounded">vite</span>.
        Select the <b>React + TypeScript</b> template:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm create vite@latest",
          npm: "npm create vite@latest",
          yarn: "yarn create vite",
          bun: "bun create vite@latest",
        }}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Add Tailwind CSS</h2>
      <TerminalBlock
        commands={{
          pnpm: "pnpm add tailwindcss @tailwindcss/vite",
          npm: "npm install tailwindcss @tailwindcss/vite",
          yarn: "yarn add tailwindcss @tailwindcss/vite",
          bun: "bun add tailwindcss @tailwindcss/vite",
        }}
      />
      <p className="mt-2">
        Replace everything in{" "}
        <span className="font-mono bg-muted px-1 py-0.5 rounded">
          src/index.css
        </span>{" "}
        with:
      </p>
      <CodeBlock code={`@import "tailwindcss";`} />

      <h2 className="text-xl font-semibold mb-2 mt-8">Edit tsconfig.json</h2>
      <p className="mb-2">
        Add <span className="font-mono">baseUrl</span> and{" "}
        <span className="font-mono">paths</span> to{" "}
        <span className="font-mono">compilerOptions</span>:
      </p>
      <CodeBlock
        code={`{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">
        Edit tsconfig.app.json
      </h2>
      <p className="mb-2">Add the following for IDE path resolution:</p>
      <CodeBlock
        code={`{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Update vite.config.ts</h2>
      <p className="mb-2">Add the following to resolve paths and plugins:</p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm add -D @types/node",
          npm: "npm install -D @types/node",
          yarn: "yarn add -D @types/node",
          bun: "bun add -d @types/node",
        }}
      />
      <CodeBlock
        code={`import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Run the CLI</h2>
      <p className="mb-2">
        Run the <span className="font-mono">shadcn</span> init command to setup
        your project:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx shadcn@latest init",
          npm: "npx shadcn@latest init",
          yarn: "yarn dlx shadcn@latest init",
          bun: "bunx shadcn@latest init",
        }}
      />
      <p className="mt-2">
        You will be asked a few questions to configure{" "}
        <span className="font-mono">components.json</span>.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8">Add Components</h2>
      <p className="mb-2">
        You can now start adding components to your project. For example, to add
        the <span className="font-mono">Button</span> component:
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
        The command above will add the <span className="font-mono">Button</span>{" "}
        component to your project. You can then import and use it like this:
      </p>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}

export default App;`}
      />

      <p className="text-muted-foreground text-base mt-8">
        For more details, see the documentation for each component.
      </p>
    </div>
  );
}
