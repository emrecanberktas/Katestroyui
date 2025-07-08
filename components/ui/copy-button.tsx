import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

function CopyButton({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Button
      className={cn(
        "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-muted-foreground/80",
        className
      )}
      onClick={handleCopy}
      variant="ghost"
      size="icon"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CheckIcon className="size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CopyIcon className="size-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

export { CopyButton };
