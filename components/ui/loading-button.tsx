import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Loader2Icon } from "lucide-react";

interface LoadingButtonProps {
  state?: "idle" | "loading" | "success";
  onClick?: () => void;
  idleText?: React.ReactNode;
  loadingIndicator?: React.ReactNode;
  successText?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function LoadingButton({
  state = "idle",
  onClick,
  idleText = "Form Submit",
  loadingIndicator = <Loader2Icon className="animate-spin" />,
  successText = "Form Submitted!",
  className,
  disabled,
}: LoadingButtonProps) {
  const contentMap: Record<string, React.ReactNode> = {
    idle: idleText,
    loading: loadingIndicator,
    success: successText,
  };

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled ?? state !== "idle"}
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium relative overflow-hidden",
        "disabled:opacity-50 disabled:cursor-not-allowed transition-all min-w-[180px] flex items-center justify-center",
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={state}
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          {contentMap[state]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}

export { LoadingButton };
