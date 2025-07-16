"use client";

import React from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import { useTheme } from "./theme-provider";
import { CopyButton } from "./ui/copy-button";
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
  const { theme } = useTheme();

  // Only render when theme is determined
  if (theme !== "dark" && theme !== "light") {
    return (
      <div className={`relative rounded-md overflow-hidden ${className}`} />
    );
  }

  return (
    <div className={`relative rounded-md overflow-hidden ${className}`}>
      <div className="absolute top-2 right-2 z-10">
        <CopyButton content={code} />
      </div>
      <Highlight
        code={code.trim()}
        language={language}
        theme={theme === "dark" ? themes.vsDark : themes.vsLight}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} text-xs sm:text-sm overflow-auto p-3 sm:p-4`}
            style={style}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line });
              return (
                <div key={i} {...lineProps} className="flex">
                  <span
                    className="select-none text-gray-500 pr-4"
                    style={{ minWidth: 24, textAlign: "right" }}
                  >
                    {i + 1}
                  </span>
                  <span>
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token });
                      return <span key={key} {...tokenProps} />;
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
