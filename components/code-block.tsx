"use client";

import React from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useTheme } from "./theme-provider";
interface CodeBlockProps {
  code: string;
  language?: Language;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "tsx",
  className,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { theme } = useTheme();

  return (
    <div
      className={`relative rounded-md overflow-hidden ${className} bg-gray-100 dark:bg-[#1e1e1e]`}
    >
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 text-sm px-2 py-1 rounded bg-gray-800 text-white hover:bg-gray-700"
      >
        {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      </button>
      <Highlight
        code={code.trim()}
        language={language}
        theme={theme === "dark" ? themes.vsDark : themes.vsLight}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} text-sm overflow-auto p-4`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className="flex">
                <span
                  className="select-none text-gray-500 pr-4"
                  style={{ minWidth: 24, textAlign: "right" }}
                >
                  {i + 1}
                </span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
