const EDUCATION = [
  {
    degree: 'BSc in Software Engineering',
    institution: 'Bahir Dar University',
    period: '2022 - 2026',
    description: 'Specialized in Software Architecture, Full-Stack Development, and System Design. Graduating June 27, 2026.',
  },
];

export default function HeroSection() {
  return (
    <section id="education" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold text-[#F8FAFC] sticky top-24">
              My <br />
              <span className="text-[#3B82F6]">Education</span>
            </h2>
            <p className="mt-6 text-[#CBD5E1] text-lg">
              My academic foundation in software engineering, focused on building robust and scalable digital systems.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#334155] hidden md:block"></div>

            {EDUCATION.map((item, index) => (
              <div key={index} className="relative pl-0 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-[#0F172A] border-2 border-[#3B82F6] z-10 hidden md:block transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                
                <div className="bg-[#1E293B] p-10 rounded-[2.5rem] border border-[#334155] transition-all duration-300 hover:border-[#3B82F6]/50 shadow-xl shadow-black/20">
                  <span className="text-[#14B8A6] font-bold text-sm uppercase tracking-widest">{item.period}</span>
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mt-2">{item.degree}</h3>
                  <h4 className="text-lg font-medium text-[#94A3B8] mt-1">{item.institution}</h4>
                  <p className="mt-4 text-[#CBD5E1] leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Graduation Badge */}
                  <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-[#14B8A6]/10 text-[#14B8A6] rounded-xl text-sm font-bold border border-[#14B8A6]/20 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                    </svg>
                    Expected Graduation: June 27, 2026
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
