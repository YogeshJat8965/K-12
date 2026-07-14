import { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSplitReveal(selector: string, type: 'lines' | 'words' | 'chars' = 'lines', stagger: number = 0.07, delay: number = 0, yOffset: number = 50) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    // A small timeout ensures fonts are loaded before splitting
    const timeout = setTimeout(() => {
      const isMobile = window.innerWidth <= 1024;
      
      elements.forEach(el => {
        let target: any;
        
        if (isMobile) {
          target = el;
        } else {
          const split = new SplitType(el as HTMLElement, { types: type });
          target = type === 'lines' ? split.lines : type === 'words' ? split.words : split.chars;
          if (!target) return;
        }

        // Reset parent overflow to allow 3D transforms without clipping if needed
        (el as HTMLElement).style.perspective = '1000px';

        gsap.fromTo(target, 
          {
            opacity: 0,
            y: yOffset,
            rotateX: 50,
            transformOrigin: "50% 50% -50px"
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: stagger,
            delay: delay,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [selector, type, stagger, delay, yOffset]);
}
