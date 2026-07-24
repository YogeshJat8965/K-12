import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/International Studio/1st.png';
import img2 from '../../assets/International Studio/2nd.png';
import img3 from '../../assets/International Studio/3rd.png';
import img4 from '../../assets/International Studio/4th.png';
import img5 from '../../assets/International Studio/5th.png';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "1",
    title: "Select Studios",
    desc: "Schools choose Studio combinations aligned with institutional vision, grade bands, and student interests.",
    color: "#7C3AED", // Purple
    image: img1,
    tags: []
  },
  {
    num: "2",
    title: "Flexible Rollout",
    desc: "Implementation models are adapted to existing academic structures with minimal operational disruption.",
    color: "#7C3AED", // Purple
    image: img2,
    tags: []
  },
  {
    num: "3",
    title: "Structured Execution",
    desc: "The framework includes onboarding, educator orientation, weekly sessions, Activity tracking, and annual review cycles.",
    color: "#7C3AED", // Purple
    image: img3,
    tags: [
      "onboarding", "educator orientation", "weekly sessions",
      "Activity tracking", "showcase preparation", "annual review cycles"
    ]
  },
  {
    num: "4",
    title: "Experiential Learning",
    desc: "Students engage in practical activities, interdisciplinary challenges, collaborative builds, and guided mentorship.",
    color: "#7C3AED", // Purple
    image: img4,
    tags: []
  },
  {
    num: "5",
    title: "Measurable Outcomes",
    desc: "Schools receive portfolio evidence, progress tracking, student reflections, performance insights, and showcase documentation.",
    color: "#7C3AED", // Purple
    image: img5,
    tags: [
      "portfolio evidence", "progress tracking", "student reflections",
      "performance insights", "showcase documentation"
    ]
  }
];

export default function ImplementationFramework() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.imp-intro',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.imp-intro', start: 'top 85%' } }
      );

      gsap.fromTo('.imp-step-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.imp-timeline', start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

    {/* <section ref={sectionRef} className="relative w-full py-12 md:py-24 bg-[#FAFBFC] overflow-hidden font-poppins"> ... </section> */}
    null
  );
}
