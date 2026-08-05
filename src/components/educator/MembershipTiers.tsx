import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function MembershipTiers() {
  const tiers = [
    {
      badge: 'Community - Free',
      title: 'Explorer',
      features: [
        'Full Community & Circle Access',
        'Weekly Peer Circles',
        'Monthly Masterclasses',
        'AI Lab Challenges & Lesson Library',
        'Digital Educator Card'
      ],
      // price: '₹0 - Forever',
      colors: {
        wave: '#EEF2FF', // indigo-50
        badgeBg: '#E0E7FF', // indigo-100
        badgeText: '#3730A3', // indigo-800
        bullet: '#4F46E5', // indigo-600
      },
      wavePath: "M0,0 L100,0 L100,12 C75,30 25,5 0,18 Z"
    },
    {
      badge: 'PRO - MOST POPULAR',
      title: 'Practitioner',
      features: [
        'Everything In Explorer',
        'Full 13-Week AI Immersion Programme',
        'CCMM Certification',
        'Vedya AI Priority Access',
        'Digital Skill Passport & CPD Report'
      ],
      // price: '₹499 / Year',
      colors: {
        wave: '#EEF2FF', // indigo-50
        badgeBg: '#E0E7FF', // indigo-100
        badgeText: '#3730A3', // indigo-800
        bullet: '#4F46E5', // indigo-600
      },
      wavePath: "M0,0 L100,0 L100,18 C70,-2 30,35 0,12 Z"
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col items-center">

        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-5xl mb-16">
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
            MEMBERSHIP TIERS
          </p>

          <h2 className="text-[34px] md:text-[42px] lg:text-[46px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-6">
            Free To Join. Built To <span className="text-[#4F46E5]">Grow</span> With You
          </h2>

          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed">
            Every Educator Gets Full Community Access At No Cost. Premium Tiers Unlock Deeper Certification, Mentoring, And Institutional Tools.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 w-full max-w-[900px] mx-auto mb-12">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="relative group bg-white border border-gray-200 rounded-[32px] overflow-hidden flex flex-col items-center pt-[90px] pb-10 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-2 hover:border-[#4F46E5]/30 transition-all duration-300 cursor-pointer"
            >
              {/* SVG Wavy Background Top */}
              <svg
                viewBox="0 0 100 30"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-full h-[140px] z-0"
              >
                <path fill={tier.colors.wave} d={tier.wavePath} />
              </svg>

              {/* Badge */}
              <div
                className="relative z-10 px-5 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-6"
                style={{ backgroundColor: tier.colors.badgeBg, color: tier.colors.badgeText }}
              >
                {tier.badge}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[24px] md:text-[28px] font-bold text-[#111827] mb-10">
                {tier.title}
              </h3>

              {/* Features List */}
              <ul className="relative z-10 w-full flex flex-col gap-4 mb-10 px-2 lg:px-4 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]"
                      style={{ backgroundColor: tier.colors.bullet }}
                    />
                    <span
                      className="text-[13.5px] md:text-[14px] font-bold leading-relaxed"
                      style={{ color: tier.colors.bullet }} // The screenshot text matches the bullet color
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price Button/Badge */}
              {/* <div
                className="relative z-10 px-6 py-2 rounded-full text-[13px] md:text-[14px] font-bold tracking-wide mt-auto"
                style={{ backgroundColor: tier.colors.badgeBg, color: tier.colors.badgeText }}
              >
                {tier.price}
              </div> */}
            </div>
          ))}
        </div>

        {/* Bottom Info Banner */}
        <div className="w-full max-w-5xl xl:max-w-[1200px] bg-[#F8FAFC] border border-[#F1F5F9] rounded-[16px] p-5 flex flex-col md:flex-row items-center justify-center gap-4 text-center">

          <p className="text-[#334155] text-[14px] md:text-[15px] font-bold leading-relaxed xl:whitespace-nowrap text-center">
            Government School Teachers And Rural Educators Receive Free Pro Access - Apply Via Your District Education Office Partner.
          </p>
        </div>

      </div>
    </section>
  );
}
