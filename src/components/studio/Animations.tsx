import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import CountUp from 'react-countup';

gsap.registerPlugin(ScrollTrigger);

// 1. Lenis Smooth Scrolling
export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
};

// 2. Magnetic Button with Ripple
export const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(ref.current, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.6,
      ease: 'power3.out'
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setRipple((prev) => ({ ...prev, active: false }));
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
  };

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className || ''} magnetic-btn`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {ripple.active && (
        <span
          className="magnetic-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}
    </div>
  );
};

// 3. 3D Tilt Card with Spotlight & Glow Border
export const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(ref.current, {
      rotateX,
      rotateY,
      '--spot-x': `${x}px`,
      '--spot-y': `${y}px`,
      duration: 0.4,
      ease: 'power3.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={ref}
      className={`tilt-card-wrapper ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-card-content">
        {children}
      </div>
    </div>
  );
};

// 4. Scroll Reveal Headline (3D Fold)
export const ScrollRevealHeadline: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    // Simple line split (assuming children is a string or contains simple text)
    // A robust approach in real app would use SplitText. We simulate it by wrapping words/lines.
    const element = ref.current;
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        element,
        { rotateX: 45, opacity: 0, y: 40, transformPerspective: 800 },
        {
          rotateX: 0, opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 85%' }
        }
      );
    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        element,
        { rotateX: 22, opacity: 0, y: 20, transformPerspective: 800 },
        {
          rotateX: 0, opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 85%' }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className} style={{ transformOrigin: 'top center' }}>
      {children}
    </div>
  );
};

// 5. Staggered Row 3D Entrance
export const StaggerRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const childrenElements = ref.current.children;
    
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        childrenElements,
        { rotateY: (i) => (i % 2 === 0 ? -25 : 25), opacity: 0, z: -100, transformPerspective: 1000 },
        {
          rotateY: 0, opacity: 1, z: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' }
        }
      );
    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        childrenElements,
        { rotateY: (i) => (i % 2 === 0 ? -12 : 12), opacity: 0, z: -50, transformPerspective: 1000 },
        {
          rotateY: 0, opacity: 1, z: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// 6. Section 2 Image & Text 3D Reveal
export const Section2Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const [leftCol, rightCol] = ref.current.children as unknown as HTMLElement[];
    
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      if (leftCol) gsap.fromTo(leftCol, { rotateY: -25, opacity: 0, x: -50, transformPerspective: 1000 }, { rotateY: 0, opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } });
      if (rightCol) gsap.fromTo(rightCol, { rotateY: 25, opacity: 0, x: 50, transformPerspective: 1000 }, { rotateY: 0, opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } });
    });

    mm.add("(max-width: 768px)", () => {
      if (leftCol) gsap.fromTo(leftCol, { rotateY: -12, opacity: 0, x: -20, transformPerspective: 1000 }, { rotateY: 0, opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } });
      if (rightCol) gsap.fromTo(rightCol, { rotateY: 12, opacity: 0, x: 20, transformPerspective: 1000 }, { rotateY: 0, opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } });
    });

    return () => mm.revert();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
};

// 7. Stat Counter with Pulse Hover
export const StatCounter: React.FC<{ end: number; suffix?: string; label: string | React.ReactNode; icon?: React.ReactNode; colorClass: string }> = ({ end, suffix = '', label, icon, colorClass }) => {
  return (
    <div className={`stat-counter-wrapper group flex flex-col items-start lg:pl-6 lg:border-l border-gray-300/80 transition-all duration-300 hover:scale-105`}>
      <h3 className={`text-[46px] lg:text-[48px] font-bold ${colorClass} leading-none mb-3 tracking-tight group-hover:drop-shadow-[0_0_15px_currentColor]`}>
        <CountUp end={end} duration={2.5} separator="," enableScrollSpy />
        {suffix}
      </h3>
      <p className="text-[13px] text-[#6B7280] font-medium leading-[1.4] pr-2">
        {label}
      </p>
    </div>
  );
};

export const CircularProgressStat: React.FC<{ end: number; colorHex: string; label: string | React.ReactNode }> = ({ end, colorHex, label }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!circleRef.current || !textRef.current) return;
    
    // r=46 -> Circumference = 2 * PI * 46 = 289.026
    const circumference = 289.026;
    gsap.set(circleRef.current, { strokeDasharray: circumference, strokeDashoffset: circumference });
    
    const obj = { val: 0 };
    
    gsap.to(obj, {
      val: end,
      duration: 2.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: circleRef.current,
        start: 'top 90%',
      },
      onUpdate: () => {
        if (textRef.current) textRef.current.innerText = Math.floor(obj.val) + '%';
        const currentOffset = circumference - (obj.val / 100) * circumference;
        if (circleRef.current) circleRef.current.style.strokeDashoffset = currentOffset.toString();
      }
    });
  }, [end]);

  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-[110px] h-[110px] mb-5 transform transition-transform duration-300 group-hover:scale-105">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background Ring */}
          <circle cx="50" cy="50" r="46" fill="transparent" stroke="#f3f4f6" strokeWidth="5" />
          {/* Progress Ring */}
          <circle 
            ref={circleRef}
            cx="50" cy="50" r="46" 
            fill="transparent" 
            stroke={colorHex} 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          {/* Inner Solid Circle */}
          <circle cx="50" cy="50" r="37" fill={colorHex} className="transition-all duration-300 group-hover:opacity-90" />
        </svg>
        {/* Number Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span ref={textRef} className="text-white font-bold text-[26px] tracking-tight">0%</span>
        </div>
      </div>
      <p className="text-[13px] text-[#5C6274] font-semibold leading-[1.6] max-w-[130px] transition-colors group-hover:text-slate-900">
        {label}
      </p>
    </div>
  );
};

export const AnimatedCounter: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    
    gsap.to(obj, {
      val: end,
      duration: 2.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 90%',
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.floor(obj.val).toLocaleString('en-US') + suffix;
        }
      }
    });
  }, [end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

// 8. Mask Reveal for PNG Road
export const RoadReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    gsap.fromTo(
      ref.current,
      { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)' },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 40%',
          end: 'bottom 80%',
          scrub: true,
        }
      }
    );
  }, []);

  return <div ref={ref} className={`w-full h-full ${className || ''}`}>{children}</div>;
};

// 9. Central Sphere Distort
export const MagneticSphere: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  const ref = useRef<HTMLImageElement>(null);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // Distort towards cursor
    gsap.to(ref.current, {
      x: x * 0.1,
      y: y * 0.1,
      rotationX: y * -0.05,
      rotationY: x * 0.05,
      duration: 1,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <img ref={ref} src={src} className={className} alt="Sphere" />;
};

// 10. Scroll Reveal Word by Word
export const ScrollRevealWord: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.children;
    
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        words,
        { rotateX: 90, opacity: 0, y: 20, transformPerspective: 800 },
        {
          rotateX: 0, opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%' }
        }
      );
    });

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        words,
        { rotateX: 45, opacity: 0, y: 10, transformPerspective: 800 },
        {
          rotateX: 0, opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%' }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.3em' }}>
      {text.split(' ').map((word, i) => (
        <span key={i} style={{ transformOrigin: 'bottom center', display: 'inline-block' }}>
          {word}
        </span>
      ))}
    </div>
  );
};
