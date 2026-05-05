import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: number;
  rotateX?: number;
  rotateY?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  scale = 1,
  rotateX = 0,
  rotateY = 0,
  className = ""
}: ScrollRevealProps) {
  const getInitialProps = () => {
    switch (direction) {
      case 'up': return { y: 50 };
      case 'down': return { y: -50 };
      case 'left': return { x: 50 };
      case 'right': return { x: -50 };
      default: return { y: 50 };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialProps(),
        scale: scale === 1 ? 1 : scale,
        rotateX: rotateX,
        rotateY: rotateY
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1,
        rotateX: 0,
        rotateY: 0
      }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth cubic-bezier
      }}
      className={className}
      style={{ perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}
