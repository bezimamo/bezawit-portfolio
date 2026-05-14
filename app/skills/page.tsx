import HeroSection from "../../components/skills/HeroSection";

export default function SkillsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <HeroSection />
      <section className="py-24 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-black mb-16 text-center text-[#F8FAFC] uppercase tracking-[0.3em]">Workflow & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {[
              { name: 'Git', icon: '🌿' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'VS Code', icon: '💻' },
              { name: 'Figma', icon: '🎨' },
              { name: 'Draw.io', icon: '📊' },
              { name: 'Postman', icon: '🚀' },
              { name: 'Vercel', icon: '▲' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Jira', icon: '📋' },
              { name: 'pgAdmin', icon: '🐘' }
            ].map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-6 group">
                <div className="w-24 h-24 bg-[#1E293B] rounded-[2.5rem] border border-[#334155] flex items-center justify-center group-hover:border-[#3B82F6] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2 group-hover:rotate-6">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500">{tool.icon}</span>
                </div>
                <span className="text-xs font-black text-[#94A3B8] tracking-[0.2em] uppercase group-hover:text-[#F8FAFC] transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
