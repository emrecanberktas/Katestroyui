import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface PopoverButtonProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  popoverClassName?: string;
}

export function PopoverButton({
  trigger,
  children,
  className,
  popoverClassName,
}: PopoverButtonProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("relative inline-block", className)} ref={buttonRef}>
      <div onClick={() => setOpen((prev) => !prev)}>
        <Button variant="outline" size="icon">
          {trigger}
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={popoverRef}
            className={cn(
              "absolute right-0 mt-2 z-50 rounded-md border border-border bg-popover p-4 shadow-md",
              popoverClassName
            )}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
