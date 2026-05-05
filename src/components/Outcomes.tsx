import walkAwaySectionImg from '../assets/virtual internship/students walks away img.png';

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Heading */}
        <div className="text-center mb-10">
          <h2 className="mb-6">
            What Students <span className="text-[#A855F7]">Walk Away</span> With
          </h2>
          <p className="text-lg md:text-xl font-normal max-w-3xl mx-auto">
            Every completed internship delivers measurable, lasting outcomes - artefacts students carry into college applications, interviews, and early careers.
          </p>
        </div>

        {/* Full Width Image Section */}
        <div className="max-w-7xl mx-auto">
          <img 
            src={walkAwaySectionImg} 
            alt="What Students Walk Away With" 
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}
