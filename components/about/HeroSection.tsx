import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0F172A]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6] to-[#14B8A6] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border border-[#334155]">
              <Image
                src="/profile.png"
                alt="Bezawit"
                fill
                className="object-cover transform transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#14B8A6] uppercase bg-[#14B8A6]/10 rounded-full">
                My Background
              </span>
              <h2 className="text-5xl font-black text-[#F8FAFC] leading-tight">
                Software Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]">
                  Graduate
                </span>
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-[#CBD5E1] leading-relaxed">
              <p>
                I am a Software Engineering graduate and full-stack developer with experience in web and mobile application development. 
                I enjoy building modern, user-friendly, and real-world solutions using technologies such as Flutter, Next.js, React, Node.js, NestJS, MongoDB, and Tailwind CSS.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <a href="mailto:bezawitmamo27@gmail.com" className="group flex items-center gap-3 text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center group-hover:bg-[#3B82F6]/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">bezawitmamo27@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/bezawit-mamo-1540782aa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full font-bold transition-all shadow-lg hover:scale-105"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/bezimamo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#334155] text-[#F8FAFC] rounded-full font-bold transition-all hover:bg-[#1E293B] hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
