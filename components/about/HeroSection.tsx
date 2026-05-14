import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0F172A]">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3B82F6]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#14B8A6]/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side with Parallax/Hover Effect */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6] to-[#14B8A6] rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl border border-[#334155] bg-[#1E293B] transform transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-[1.02]">
              <Image
                src="/profile.png"
                alt="Bezawit"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold tracking-widest text-sm uppercase">Software Engineering Graduate</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-black tracking-widest text-[#14B8A6] uppercase bg-[#14B8A6]/10 rounded-full border border-[#14B8A6]/20 animate-bounce-slow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]"></span>
                </span>
                Open for opportunities
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-[#F8FAFC] leading-[1.1] tracking-tighter">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#14B8A6] animate-gradient-x">
                  Impactful Software
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-[#CBD5E1] leading-relaxed font-medium">
              <p className="border-l-4 border-[#3B82F6] pl-6 py-2 bg-gradient-to-r from-[#3B82F6]/5 to-transparent rounded-r-2xl">
                Full-stack developer with a passion for building modern, user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Specializing in Flutter, Next.js, and NestJS to deliver cross-platform experiences with a focus on professional UI/UX design.
              </p>
            </div>

            {/* Social & Contact Actions */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com/in/bezawit-mamo-1540782aa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-1 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/bezimamo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1E293B] hover:bg-[#0F172A] text-[#F8FAFC] border border-[#334155] rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
