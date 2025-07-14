import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Card {
  title?: string;
  src?: string;
}

export function Card({
  card,
  className,
  hovered,
  setHovered,
  index,
}: {
  card: Card;
  className?: string;
  hovered: number | null;
  setHovered: (index: number | null) => void;
  index: number;
}) {
  return (
    <motion.div
      className={cn(
        "rounded-lg relative h-64 w-full overflow-hidden",
        className
      )}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      animate={{
        filter:
          hovered !== null && hovered !== index ? "blur(10px)" : "blur(0px)",
        scale: hovered !== null && hovered !== index ? 0.95 : 1,
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full rounded-lg"
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-6 z-10 flex items-end"
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        animate={{
          opacity: hovered === index ? 1 : 0,
        }}
      >
        <h3 className="text-white text-2xl font-bold w-full">{card.title}</h3>
      </motion.div>
    </motion.div>
  );
}

export function FocusCard({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          hovered={hovered}
          setHovered={setHovered}
          index={index}
        />
      ))}
    </div>
  );
}
