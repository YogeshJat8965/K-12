import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  separator?: boolean;
}

export default function CountUp({ to, duration = 2, delay = 0, suffix = "", separator = true }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    } else {
      // Reset count when it goes out of view so it can animate again
      setCount(0);
    }
  }, [isInView, to, duration, delay]);

  const formatNumber = (num: number) => {
    if (!separator) return num.toString();
    return num.toLocaleString();
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
}
