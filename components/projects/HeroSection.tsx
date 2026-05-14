import Image from 'next/image';

const PROJECTS = [
  {
    title: 'Referral Management System',
    category: 'Full Stack / Healthcare',
    description: 'A robust system designed to streamline the medical referral process between healthcare facilities, ensuring patient data integrity and efficient communication.',
    icon: '🏥',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript']
  },
  {
    title: 'Smart Maternal System',
    category: 'Web App / Health Monitoring',
    description: 'An advanced monitoring system for maternal health, tracking vital signs and providing predictive insights for safe pregnancy management.',
    icon: '🤰',
    tags: ['Next.js', 'Firebase', 'TailwindCSS', 'Python']
  },
  {
    title: 'FitTrack Gym Management',
    category: 'Full Stack / Fitness',
    description: 'A comprehensive management platform for gym owners and trainers to track workouts, manage memberships, and monitor client progress.',
    icon: '💪',
    tags: ['Vue.js', 'Go', 'PostgreSQL', 'Docker']
  },
  {
    title: 'E-Tix Digital Ticketing',
    category: 'Hackathon Project / BiTech',
    description: 'Award-winning digital ticketing solution developed during the BiTech hackathon for secure and efficient event entry.',
    icon: '🎟️',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Go']
  }
];

export default function HeroSection() {
  return (
    <section id="projects" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-[#F8FAFC] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#CBD5E1] text-lg max-w-xl">
              Real-world solutions and award-winning projects developed through hackathons and international competitions.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border border-[#334155] text-[#F8FAFC] rounded-xl font-bold hover:bg-[#1E293B] transition-colors">
            View Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-[#1E293B] border border-[#334155] shadow-2xl transition-all duration-500 group-hover:border-[#3B82F6]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-[#14B8A6]/5 group-hover:from-[#3B82F6]/10 group-hover:to-[#14B8A6]/10 transition-all duration-700"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#0F172A] rounded-3xl flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-[#334155]">
                    {project.icon}
                  </div>
                </div>

                {/* Floating Tags */}
                <div className="absolute top-8 left-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#0F172A]/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC] border border-[#334155]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 px-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black text-[#3B82F6] uppercase tracking-[0.2em]">{project.category}</span>
                  <div className="h-px flex-1 bg-[#334155]"></div>
                </div>

                <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#CBD5E1] mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-[#1E293B] rounded-xl text-xs font-semibold text-[#94A3B8] border border-[#334155]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
