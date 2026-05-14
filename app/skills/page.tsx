import HeroSection from "@/components/skills/HeroSection";

export default function SkillsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <HeroSection />
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-zinc-900 dark:text-white">Workflow & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
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
              <div key={tool.name} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:border-indigo-500 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:-translate-y-2">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">{tool.icon}</span>
                </div>
                <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400 tracking-tight group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
