import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { AnimatePresence, motion } from "motion/react";
import React, { createContext, useContext, useMemo, useState } from "react";

type CollapsibleContextType = {
  isOpen: boolean;
  setIsOpen?: (open: boolean) => void;
};

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

function useCollapsible() {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("Collapsible components must be used within a Collapsible");
  }
  return context;
}

function Collapsible({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  const isControlled = openProp !== undefined;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false
  );

  const open = isControlled ? openProp : uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  const contextValue = useMemo(
    () => ({ isOpen: open, setIsOpen: handleOpenChange }),
    [open, handleOpenChange]
  );

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <CollapsiblePrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        data-slot="collapsible"
        {...props}
      />
    </CollapsibleContext.Provider>
  );
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  const { isOpen } = useCollapsible();
  const childrenArray = React.Children.toArray(children);

  return (
    <AnimatePresence>
      {isOpen &&
        childrenArray.map((child, index) => (
          <motion.div
            layout
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -10,
              transition: {
                duration: 0.3,
                delay: (childrenArray.length - 1 - index) * 0.05,
                ease: "easeOut",
              },
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            <CollapsiblePrimitive.CollapsibleContent
              forceMount
              data-slot="collapsible-content"
              {...props}
            >
              {child}
            </CollapsiblePrimitive.CollapsibleContent>
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
