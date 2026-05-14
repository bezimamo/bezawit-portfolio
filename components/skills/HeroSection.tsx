const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, color: 'from-[#3B82F6] to-[#60A5FA]' },
      { name: 'Next.js', level: 92, color: 'from-[#F8FAFC] to-[#CBD5E1]' },
      { name: 'Tailwind CSS', level: 98, color: 'from-[#06B6D4] to-[#3B82F6]' },
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'NestJS', level: 88, color: 'from-[#E0234E] to-[#F43F5E]' },
      { name: 'PostgreSQL', level: 85, color: 'from-[#336791] to-[#475569]' },
      { name: 'MongoDB', level: 82, color: 'from-[#47A248] to-[#10B981]' },
      { name: 'MySQL', level: 85, color: 'from-[#00758F] to-[#3B82F6]' },
    ]
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'Git & GitHub', level: 92, color: 'from-[#F05032] to-[#1E293B]' },
      { name: 'VS Code', level: 95, color: 'from-[#007ACC] to-[#3B82F6]' },
      { name: 'Figma', level: 85, color: 'from-[#F24E1E] to-[#A259FF]' },
      { name: 'Draw.io', level: 90, color: 'from-[#F08705] to-[#FB923C]' },
    ]
  }
];

export default function HeroSection() {
  return (
    <section id="skills" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]">Expertise</span>
          </h2>
          <p className="text-[#CBD5E1] max-w-2xl mx-auto text-lg leading-relaxed">
            I've cultivated a diverse set of skills across the full software development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="bg-[#1E293B] p-10 rounded-[2.5rem] border border-[#334155] hover:border-[#3B82F6]/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-[#3B82F6] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                {category.title}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className="font-bold text-[#CBD5E1] group-hover:text-[#3B82F6] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-black text-[#94A3B8] uppercase tracking-widest">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 w-full bg-[#0F172A] rounded-full overflow-hidden border border-[#334155]">
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
