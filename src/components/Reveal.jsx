import { motion } from "framer-motion";

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className,
  once = true,
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

const groupVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = (y) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

export function RevealGroup({ children, as = "div", className, once = true }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={groupVariants}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, as = "div", className, y = 24 }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component className={className} variants={itemVariants(y)}>
      {children}
    </Component>
  );
}
