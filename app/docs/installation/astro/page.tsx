"use client";

import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

export default function AstroInstallationPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-3">Astro Installation</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Install and configure your UI components for Astro projects.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Create project</h2>
      <p className="mb-2">
        Start by creating a new Astro project with Tailwind CSS and React:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx create-astro@latest astro-app --template with-tailwindcss --install --add react --git",
          npm: "npx create-astro@latest astro-app --template with-tailwindcss --install --add react --git",
          yarn: "yarn create astro astro-app --template with-tailwindcss --install --add react --git",
          bun: "bunx create-astro@latest astro-app --template with-tailwindcss --install --add react --git",
        }}
      />

      <h2 className="text-xl font-semibold mb-2 mt-8">Edit tsconfig.json</h2>
      <p className="mb-2">
        Add the following to <span className="font-mono">tsconfig.json</span> to
        resolve paths:
      </p>
      <CodeBlock
        code={`{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
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
          pnpm: "pnpm dlx shadcn@latest init",
          npm: "npx shadcn@latest init",
          yarn: "yarn dlx shadcn@latest init",
          bun: "bunx shadcn@latest init",
        }}
      />

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
        code={`---
import { Button } from "@/components/ui/button"
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro + TailwindCSS</title>
  </head>
  <body>
    <div className="grid place-items-center h-screen content-center">
      <Button>Button</Button>
    </div>
  </body>
</html>`}
      />

      <p className="text-muted-foreground text-base mt-8">
        For more details, see the documentation for each component.
      </p>
    </div>
  );
}
