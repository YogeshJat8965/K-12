import React from 'react';
import cardsImg from '../../assets/for students/cards.webp';

const shimmerStyle = `
  @keyframes shimmer-sweep {
    0% { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(250%) skewX(-15deg); }
  }
  .cards-img-wrapper:hover .shimmer-bar {
    animation: shimmer-sweep 0.8s ease forwards;
  }
  .cards-img-wrapper .shimmer-bar {
    animation: none;
  }
`;

export default function AlwaysOnSupport() {
  return (
    <section className="w-full bg-[#F8F7FE] text-gray-900 overflow-hidden font-poppins">
      <style>{shimmerStyle}</style>

      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-0 flex flex-col items-center text-center">

        {/* Tag */}
        <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[0.25em] uppercase mb-4">
          ALWAYS-ON SUPPORT
        </span>

        {/* Heading */}
        <h2 className="text-gray-900 text-[28px] md:text-[34px] lg:text-[40px] font-bold tracking-tight mb-5 font-poppins">
          Running Alongside Every Stage
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-0">
          No matter which programme you're in, these capabilities travel with you - powered by the{' '}
          <span className="text-[#B283FF] font-semibold">Skillzza Xperience Platform.</span>
        </p>
      </div>

      {/* Image - flush against text, with hover animations */}
      <div className="w-full flex justify-center m-0 p-0 leading-none">
        <div
          className="cards-img-wrapper relative w-full max-w-[1200px] overflow-hidden cursor-pointer"
          style={{ lineHeight: 0 }}
        >
          {/* Shimmer sweep bar */}
          <div
            className="shimmer-bar absolute inset-y-0 left-0 w-[30%] z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
            }}
          />

          {/* Purple glow overlay on hover */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.12) 0%, transparent 70%)',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
          />

          {/* The image itself */}
          <img
            src={cardsImg}
            alt="Always-on support cards"
            className="w-full h-auto object-contain block m-0 p-0 transition-all duration-700 ease-out"
            style={{ transformOrigin: 'center bottom' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.025) translateY(-6px)';
              (e.currentTarget as HTMLImageElement).style.filter = 'drop-shadow(0 24px 48px rgba(139,92,246,0.25))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1) translateY(0)';
              (e.currentTarget as HTMLImageElement).style.filter = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
}
