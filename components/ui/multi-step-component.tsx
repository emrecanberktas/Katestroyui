import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import type { Transition } from "motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { Check } from "lucide-react";

interface Step {
  title: string;
  content: React.ReactNode;
  description?: string | React.ReactNode;
}

interface MultiStepProps {
  steps: Step[];
  defaultStep?: number;
  className?: string;
  backButtonLabel?: string;
  nextButtonLabel?: string;
  completeButtonLabel?: string;
  transition?: Transition;
  onNext?: (currentStep: number) => void;
  onBack?: (currentStep: number) => void;
  onComplete?: () => void;
}

function Stepper({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6 select-none">
      {steps.map((_, idx) => (
        <React.Fragment key={idx}>
          <motion.div
            initial={false}
            animate={{
              backgroundColor:
                idx === currentStep
                  ? "#2563eb" // blue-600
                  : idx < currentStep
                  ? "#22c55e" // green-500
                  : "#e5e7eb", // zinc-200
              borderColor:
                idx === currentStep
                  ? "#2563eb"
                  : idx < currentStep
                  ? "#22c55e"
                  : "#e5e7eb",
              scale: idx === currentStep ? 1.1 : 1,
              boxShadow:
                idx === currentStep
                  ? "0 2px 8px 0 rgba(37,99,235,0.15)"
                  : "none",
            }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className={
              "flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-700 relative z-10 bg-white dark:bg-zinc-900"
            }
          >
            {idx < currentStep && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.3 }}
                className="text-green-600 dark:text-green-400 text-xl font-bold"
                style={{ lineHeight: 1 }}
              >
                <Check size={16} className="text-white dark:text-white" />
              </motion.span>
            )}
          </motion.div>
          {idx < steps.length - 1 && (
            <motion.div
              initial={false}
              animate={{
                backgroundColor: idx < currentStep ? "#22c55e" : "#e5e7eb",
                scaleY: 1,
              }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              className="h-1 w-6 sm:w-10 rounded bg-zinc-200 dark:bg-zinc-700"
              style={{ margin: "0 2px" }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function MultiStep({
  steps,
  defaultStep = 0,
  className,
  backButtonLabel = "Back",
  nextButtonLabel = "Continue",
  completeButtonLabel = "Finish",
  transition = { duration: 0.5, type: "spring", bounce: 0 },
  onNext,
  onBack,
  onComplete,
}: MultiStepProps) {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection("next");
      setCurrentStep((prev) => prev + 1);
      onNext?.(currentStep);
    } else {
      setDirection("next");
      setCurrentStep(0);
      onComplete?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection("back");
      setCurrentStep((prev) => prev - 1);
      onBack?.(currentStep);
    }
  };

  const content = useMemo(
    () => steps[currentStep]?.content || null,
    [currentStep, steps]
  );

  const variants = {
    initial: (direction: "next" | "back") => ({
      x: direction === "next" ? 70 : -70,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "next" | "back") => ({
      x: direction === "next" ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <Card
      className={cn(
        "p-4 sm:p-6 w-full max-w-[90%] sm:max-w-lg md:max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden",
        className
      )}
    >
      <MotionConfig transition={transition}>
        <Stepper steps={steps} currentStep={currentStep} />
        <CardHeader className="text-center">
          <CardTitle className="text-xl sm:text-2xl font-semibold">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                aria-current="step"
              >
                {steps[currentStep]?.title}
              </motion.div>
            </AnimatePresence>
          </CardTitle>
          {steps[currentStep]?.description && (
            <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2 overflow-hidden">
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}
              >
                <motion.div
                  key={currentStep}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                >
                  {steps[currentStep]?.description}
                </motion.div>
              </AnimatePresence>
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="min-h-[150px] sm:min-h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="w-full"
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex justify-between gap-4 overflow-hidden">
          <Button
            variant="outline"
            disabled={currentStep === 0}
            onClick={handleBack}
            aria-label={backButtonLabel}
            className="w-full sm:w-auto"
          >
            {backButtonLabel}
          </Button>
          <Button
            variant="default"
            onClick={handleNext}
            aria-label={
              currentStep === steps.length - 1
                ? completeButtonLabel
                : nextButtonLabel
            }
            className="w-full sm:w-auto"
          >
            {currentStep === steps.length - 1
              ? completeButtonLabel
              : nextButtonLabel}
          </Button>
        </CardFooter>
      </MotionConfig>
    </Card>
  );
}

export { MultiStep };
export type { Step };
