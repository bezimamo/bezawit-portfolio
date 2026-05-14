const CERTS = [
  {
    title: 'Full Stack Development Training',
    issuer: 'Minab Tech',
    date: '2024',
    icon: '💻',
    skills: ['Vue.js', 'TailwindCSS', 'Go', 'PostgreSQL', 'Flutter']
  },
  {
    title: 'Employability & Design Thinking',
    issuer: 'Ministry of Education (MOE)',
    date: '2023',
    icon: '💡',
    skills: ['Soft Skills', 'Problem Solving', 'Strategic Planning']
  },
];

const AWARDS = [
  {
    title: 'Peace Making Action Project',
    organization: 'British Council',
    achievement: 'Winner - 90,000 Birr Funding',
    description: 'Awarded for developing impactful community solutions focused on peace and social action.',
    icon: '🏆'
  },
  {
    title: 'BiTech Hackathon',
    organization: 'BiTech Competition',
    achievement: 'Project: E-Tix',
    description: 'Developed an innovative digital ticketing solution during a high-intensity hackathon.',
    icon: '🚀'
  }
];

export default function HeroSection() {
  return (
    <section id="certifications" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#F8FAFC] mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {CERTS.map((cert, index) => (
            <div key={index} className="bg-[#1E293B] p-8 rounded-[2rem] border border-[#334155] flex flex-col group hover:border-[#3B82F6]/50 transition-all duration-500 shadow-xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-[#3B82F6]/20 transition-all">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">{cert.title}</h3>
                  <p className="text-[#3B82F6] font-medium">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#0F172A] rounded-lg text-xs font-bold text-[#94A3B8] border border-[#334155]">
                    {skill}
                  </span>
                ))}
              </div>
              <span className="mt-6 text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Issued {cert.date}</span>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#F8FAFC] mb-4">
            Awards & Competitions
          </h2>
          <div className="w-20 h-1 bg-[#14B8A6] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS.map((award, index) => (
            <div key={index} className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 rounded-[2.5rem] border border-[#334155] overflow-hidden group hover:border-[#14B8A6]/50 transition-all duration-500 shadow-2xl shadow-black/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{award.icon}</div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{award.title}</h3>
                <p className="text-[#14B8A6] font-bold mb-4">{award.achievement}</p>
                <p className="text-[#CBD5E1] mb-6 text-sm leading-relaxed">
                  {award.description}
                </p>
                <div className="flex items-center gap-2 text-[#94A3B8] text-xs font-bold uppercase tracking-tighter">
                  <span>Organized by</span>
                  <span className="text-[#F8FAFC]">{award.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
