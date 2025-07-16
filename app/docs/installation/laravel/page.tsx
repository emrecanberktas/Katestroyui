"use client";

import { CodeBlock } from "@/components/code-block";
import { TerminalBlock } from "@/components/terminal-block";

export default function LaravelInstallationPage() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-3">Laravel Installation</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Install and configure your UI components for Laravel with Inertia and
        React.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6">Create project</h2>
      <p className="mb-2">
        Start by creating a new Laravel project with Inertia and React using the
        Laravel installer:
      </p>
      <CodeBlock code={`laravel new my-app --react`} />

      <h2 className="text-xl font-semibold mb-2 mt-8">Add Components</h2>
      <p className="mb-2">
        You can now start adding components to your project. For example, to add
        the <span className="font-mono">Switch</span> component:
      </p>
      <TerminalBlock
        commands={{
          pnpm: "pnpm dlx shadcn@latest add switch",
          npm: "npx shadcn@latest add switch",
          yarn: "yarn dlx shadcn@latest add switch",
          bun: "bunx shadcn@latest add switch",
        }}
      />
      <p className="mt-4">
        The command above will add the <span className="font-mono">Switch</span>{" "}
        component to{" "}
        <span className="font-mono">resources/js/components/ui/switch.tsx</span>
        . You can then import and use it like this:
      </p>
      <CodeBlock
        code={`import { Switch } from "@/components/ui/switch"

const MyPage = () => {
  return (
    <div>
      <Switch />
    </div>
  )
}

export default MyPage`}
      />

      <p className="text-muted-foreground text-base mt-8">
        For more details, see the documentation for each component.
      </p>
    </div>
  );
}
