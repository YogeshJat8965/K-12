import { useEffect } from 'react';
import gsap from 'gsap';

export function useMagneticRipple(selector: string, strength: number = 0.4) {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLElement>(selector);
    
    const handlers = new Map();

    buttons.forEach(btn => {
      // Ensure button has proper positioning
      if (getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }
      btn.style.overflow = 'hidden';

      let rippleContainer = btn.querySelector('.ripple-container');
      if (!rippleContainer) {
        rippleContainer = document.createElement('div');
        rippleContainer.className = 'ripple-container';
        rippleContainer.style.position = 'absolute';
        rippleContainer.style.inset = '0';
        rippleContainer.style.pointerEvents = 'none';
        rippleContainer.style.zIndex = '0';
        btn.insertBefore(rippleContainer, btn.firstChild);
      }

      const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "elastic.out(1, 0.3)" });

      const mouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        xTo(x * strength);
        yTo(y * strength);
      };

      const mouseEnter = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '0px';
        ripple.style.height = '0px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.15)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.pointerEvents = 'none';
        rippleContainer!.appendChild(ripple);

        const size = Math.max(rect.width, rect.height) * 2.5;
        gsap.to(ripple, {
          width: size,
          height: size,
          duration: 0.6,
          ease: 'power2.out'
        });
      };

      const mouseLeave = () => {
        xTo(0);
        yTo(0);
        const ripples = rippleContainer!.querySelectorAll('div');
        ripples.forEach(r => {
          gsap.to(r, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => r.remove()
          });
        });
      };

      btn.addEventListener("mousemove", mouseMove);
      btn.addEventListener("mouseenter", mouseEnter);
      btn.addEventListener("mouseleave", mouseLeave);
      handlers.set(btn, { mouseMove, mouseEnter, mouseLeave });
    });

    return () => {
      buttons.forEach(btn => {
        const h = handlers.get(btn);
        if (h) {
          btn.removeEventListener("mousemove", h.mouseMove);
          btn.removeEventListener("mouseenter", h.mouseEnter);
          btn.removeEventListener("mouseleave", h.mouseLeave);
        }
      });
    };
  }, [selector, strength]);
}

export function use3DTilt(selector: string, maxRotation: number = 8, scaleFactor: number = 1) {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(selector);
    const handlers = new Map();
    
    cards.forEach(card => {
      if (card.parentElement && window.getComputedStyle(card.parentElement).perspective === 'none') {
        card.parentElement.style.perspective = '1000px';
      }
      card.style.transformStyle = 'preserve-3d';

      const popEls = card.querySelectorAll('.tilt-pop');
      let reqId: number;

      // Ensure position relative for spotlight
      if (getComputedStyle(card).position === 'static') {
        card.style.position = 'relative';
      }
      
      let spotlight = card.querySelector('.tilt-spotlight') as HTMLElement;
      if (!spotlight) {
        spotlight = document.createElement('div');
        spotlight.className = 'tilt-spotlight';
        spotlight.style.position = 'absolute';
        spotlight.style.inset = '0';
        spotlight.style.opacity = '0';
        spotlight.style.pointerEvents = 'none';
        spotlight.style.zIndex = '0';
        spotlight.style.transition = 'opacity 0.4s ease';
        card.insertBefore(spotlight, card.firstChild);
        // Ensure child elements sit above the spotlight
        Array.from(card.children).forEach(child => {
          if (child !== spotlight) {
            (child as HTMLElement).style.position = 'relative';
            (child as HTMLElement).style.zIndex = '1';
          }
        });
      }
      
      const mouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPct = x / rect.width;
        const yPct = y / rect.height;
        const rotX = (0.5 - yPct) * maxRotation * 2;
        const rotY = (xPct - 0.5) * maxRotation * 2;
        
        spotlight.style.opacity = '1';
        spotlight.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`;
        
        cancelAnimationFrame(reqId);
        reqId = requestAnimationFrame(() => {
          gsap.to(card, {
            rotateX: rotX,
            rotateY: rotY,
            scale: scaleFactor,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
          if (popEls.length) {
            gsap.to(popEls, {
              z: 30,
              x: rotY * -0.5,
              y: rotX * 0.5,
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });
      };
      
      const mouseLeave = () => {
        spotlight.style.opacity = '0';
        cancelAnimationFrame(reqId);
        reqId = requestAnimationFrame(() => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)",
            overwrite: "auto"
          });
          if (popEls.length) {
            gsap.to(popEls, { z: 0, x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
          }
        });
      };

      const touchStart = () => gsap.to(card, { scale: 0.98, duration: 0.2 });
      const touchEnd = () => gsap.to(card, { scale: 1, duration: 0.4, ease: "back.out(1.5)" });

      if (window.matchMedia("(hover: hover)").matches) {
        card.addEventListener("mousemove", mouseMove);
        card.addEventListener("mouseleave", mouseLeave);
      } else {
        card.addEventListener("touchstart", touchStart);
        card.addEventListener("touchend", touchEnd);
      }
      handlers.set(card, { mouseMove, mouseLeave, touchStart, touchEnd });
    });

    return () => {
      cards.forEach(card => {
        const h = handlers.get(card);
        if (h) {
          card.removeEventListener("mousemove", h.mouseMove);
          card.removeEventListener("mouseleave", h.mouseLeave);
          card.removeEventListener("touchstart", h.touchStart);
          card.removeEventListener("touchend", h.touchEnd);
        }
      });
    };
  }, [selector, maxRotation]);
}

export function useMagneticPull(selector: string, strength: number = 0.2) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    const handlers = new Map();

    elements.forEach(el => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" });

      const mouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        xTo(x * strength);
        yTo(y * strength);
      };

      const mouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", mouseMove);
      el.addEventListener("mouseleave", mouseLeave);
      handlers.set(el, { mouseMove, mouseLeave });
    });

    return () => {
      elements.forEach(el => {
        const h = handlers.get(el);
        if (h) {
          el.removeEventListener("mousemove", h.mouseMove);
          el.removeEventListener("mouseleave", h.mouseLeave);
        }
      });
    };
  }, [selector, strength]);
}
