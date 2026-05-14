import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#14B8A6]/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold tracking-wider text-[#14B8A6] uppercase bg-[#14B8A6]/10 rounded-full animate-in fade-in slide-in-from-top-4 duration-1000">
          Software Engineering Graduate
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-[#F8FAFC] leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          I Build Impactful <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]">
            Digital Solutions.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in duration-1000 delay-500">
          Bezawit — A full-stack developer dedicated to creating modern, 
          user-friendly solutions with Flutter, Next.js, and NestJS.
        </p>

        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <Link 
            href="/projects" 
            className="px-10 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
          >
            View Projects
          </Link>
          <Link 
            href="/about" 
            className="px-10 py-4 border-2 border-[#334155] text-[#F8FAFC] rounded-full font-bold text-lg hover:bg-[#1E293B] transition-all"
          >
            About Me
          </Link>
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 opacity-60 animate-in fade-in duration-1000 delay-1000">
          {['Flutter', 'React', 'Next.js', 'NestJS', 'Go', 'MongoDB'].map(tech => (
            <span key={tech} className="text-sm font-bold tracking-widest uppercase text-[#94A3B8]">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
