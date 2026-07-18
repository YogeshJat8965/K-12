import React from 'react';
import verticalImg from '../../assets/educator circle/verticalimg.png';

export default function TeacherAtCenter() {
  return (
    <section className="w-full bg-white font-poppins py-8 md:py-20">
      <div className="w-full mx-auto px-0 md:px-12 lg:px-20 max-w-[1536px]">
        <img 
          src={verticalImg} 
          alt="One Teacher At The Centre" 
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
