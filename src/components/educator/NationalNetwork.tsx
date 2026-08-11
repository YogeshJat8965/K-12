import React, { useState, useEffect, useRef } from 'react';
import { Users, School, Calendar, Award, Laptop, Quote, Star } from 'lucide-react';

const AnimatedCounter = ({ endValue, suffix = '' }: { endValue: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseFloat(endValue.replace(/,/g, ''));
    if (isNaN(end)) return;

    const duration = 1200;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, endValue]);

  const formatNumber = (num: number) => {
    if (endValue.includes(',')) {
      return Math.floor(num).toLocaleString('en-US');
    }
    return Math.floor(num);
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default function NationalNetwork() {
  const stats = [
    {
      icon: (
        <div className="relative flex items-center justify-center text-[#6366F1]">
          <Users className="w-8 h-8" strokeWidth={1.5} />
        </div>
      ),
      value: '100',
      suffix: 'k',
      label: 'Teachers in the Circle'
    },
    {
      icon: (
        <div className="relative flex items-center justify-center text-[#6366F1]">
          <School className="w-8 h-8" strokeWidth={1.5} />
        </div>
      ),
      value: '5,000',
      suffix: '+',
      label: 'Schools connected'
    },
    {
      icon: (
        <div className="relative flex items-center justify-center text-[#6366F1]">
          <Calendar className="w-8 h-8" strokeWidth={1.5} />
          <Star className="absolute -bottom-1 -right-1 w-4 h-4 fill-white text-[#6366F1]" strokeWidth={2} />
        </div>
      ),
      value: '500',
      suffix: '+',
      label: 'Masterclasses & events'
    },
    {
      icon: (
        <div className="relative flex items-center justify-center text-[#6366F1]">
          <Award className="w-8 h-8" strokeWidth={1.5} />
        </div>
      ),
      value: '800',
      suffix: 'k',
      label: 'Sponsored CPD hours'
    },
    {
      icon: (
        <div className="relative flex items-center justify-center text-[#6366F1]">
          {/* Using Users again but slightly smaller or different stroke to differentiate if needed, though Users is standard */}
          <Users className="w-8 h-8" strokeWidth={1.5} />
        </div>
      ),
      value: '1,000',
      suffix: '',
      label: 'Ambassadors & mentors'
    },
    {
      icon: (
        <div className="relative flex items-center justify-center text-[#6366F1]">
          <Laptop className="w-8 h-8" strokeWidth={1.5} />
          <span className="absolute text-[9px] font-bold mt-1 text-[#6366F1]">AI</span>
        </div>
      ),
      value: '10',
      suffix: 'k',
      label: 'Classroom AI projects shared'
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-16">
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
            WHERE WE'RE HEADED IN YEAR ONE
          </p>

          <h2 className="text-[30px] md:text-[38px] lg:text-[42px] font-extrabold text-[#111827] leading-[1.2] tracking-tight">
            <span className="text-[#4F46E5]">A National Network <br /></span> Not Another
            Training Portal
          </h2>
        </div>

        {/* Outer Container with faint border like in screenshot */}
        <div className="w-full p-4 md:p-8 lg:p-10 border border-gray-50 rounded-[32px] bg-white/50">

          {/* Grid of Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mb-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-[20px] p-6 flex flex-row items-center gap-6 shadow-sm hover:shadow-[0_12px_30px_rgba(79,70,229,0.08)] hover:-translate-y-1 hover:border-[#4F46E5]/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-[#F5F3FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E0E7FF] transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-[#4F46E5] text-[26px] md:text-[30px] font-bold leading-none mb-1">
                    <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-[#4B5563] text-[13px] md:text-[14px] font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote Banner */}
          <div className="w-full bg-[#F8FAFC] rounded-[20px] p-5 md:p-6 flex items-center justify-center">
            <p className="text-[#64748B] text-[14px] md:text-[15px] font-medium italic text-center">
              These are our year-one targets - the community we're building together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
