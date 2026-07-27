import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MaskGroup38 from '../../assets/AI playground/Mask Group 38.webp';

import { useSplitReveal } from '../../hooks/useSplitReveal';

gsap.registerPlugin(ScrollTrigger);

export default function PlayToMastery() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useSplitReveal('.ptm-title', 'lines', 0.08, 0);
  useSplitReveal('.ptm-subtitle', 'lines', 0.05, 0.1);
  useSplitReveal('.ptm-desc', 'lines', 0.03, 0.2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed redundant header fade because useSplitReveal handles it

      // Animate image
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          }
        });
      }

      // Animate bottom text columns
      if (sectionRef.current?.querySelector('.ptm-grid') && textRefs.current.filter(Boolean).length > 0) {
        gsap.from(textRefs.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ptm-grid',
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const columns = [
    {
      title: "AI Playground",
      desc: "Students discover AI through play -\npicking, customising, and sharing\nagents.\nTime: minutes to hours."
    },
    {
      title: "Skill Studios",
      desc: "Structured studios across 15+\ndomains deepen the skills students\nstarted exploring in the Playground.\nTime: weeks to months."
    },
    {
      title: "Virtual Internships",
      desc: "Students use their skills on real-\nworld, industry-inspired projects\nwith verifiable credentials.\nTime: 4-6 weeks."
    },
    {
      title: "Fellowships & Showcases",
      desc: "Top students become mentors,\nspeakers, and programme\nambassadors. Time: year-long\nengagement."
    }
  ];

  return (
    <>
      <style>{`
        .ptm-section {
          width: 100%;
          background: #09023B 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 6px #431AA42F;
          padding: 40px 40px;
          font-family: 'Poppins', sans-serif;
          color: #FFFFFF;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .ptm-container {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ptm-header {
          text-align: center;
          max-width: 900px;
          margin-bottom: 40px;
        }

        .ptm-title {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          margin: 0 0 16px;
          color: #FFFFFF !important;
        }

        .ptm-subtitle {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 32px;
          color: #FFFFFF !important;
        }

        .ptm-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #D1D5DB; /* Lighter grey for better readability */
          margin: 0;
        }

        .ptm-image {
          width: 1200px; /* Scaled down from 1363px */
          height: 255px; /* Proportionally scaled down */
          max-width: 100%;
          background: transparent url('${MaskGroup38}') center center no-repeat padding-box;
          background-size: contain;
          margin-bottom: 0px; /* Removed gap */
          transform: translateX(-28px); /* Slightly shifted left */
        }

        .ptm-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 1200px; /* Match scaled image width for perfect alignment */
          margin-top: -30px; /* Pull text closer to the image content */
        }

        .ptm-col {
          text-align: center;
          padding: 0 10px;
        }

        .ptm-col-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px;
          color: #FFFFFF;
        }

        .ptm-col-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #D1D5DB; /* Lighter grey for better readability */
          margin: 0;
          white-space: pre-line; /* Allows \n to render as line breaks */
        }

        @media (max-width: 1024px) {
          .ptm-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 60px;
          }
          .ptm-image {
            height: 25vw;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 600px) {
          .ptm-section { padding: 40px 20px; }
          .ptm-grid {
            grid-template-columns: 1fr;
            row-gap: 30px;
          }
          .ptm-image {
            height: 30vw;
          }
        }
      `}</style>


    </>
  );
}
