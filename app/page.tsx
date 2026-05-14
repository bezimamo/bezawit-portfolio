import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#14B8A6]/10 rounded-full blur-[120px] animate-float delay-1000"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-10 text-xs font-black tracking-[0.3em] text-[#14B8A6] uppercase bg-[#14B8A6]/5 rounded-full border border-[#14B8A6]/20 shadow-[0_0_20px_rgba(20,184,166,0.1)] animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]"></span>
          </span>
          Next-Gen Software Engineer
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-[#F8FAFC] leading-[0.9] mb-10 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-indigo-500 to-[#14B8A6] bg-[size:200%] animate-gradient-x">
            Digital Future.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl mx-auto mb-16 leading-relaxed font-medium animate-in fade-in duration-1000 delay-500">
          Bezawit — Bridging the gap between complex backend logic and 
          stunning frontend experiences with <span className="text-[#F8FAFC] border-b-2 border-[#3B82F6]">Flutter</span>, <span className="text-[#F8FAFC] border-b-2 border-indigo-500">Next.js</span>, and <span className="text-[#F8FAFC] border-b-2 border-[#14B8A6]">NestJS</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <Link 
            href="/projects" 
            className="group relative px-12 py-5 bg-[#3B82F6] text-white rounded-[2rem] font-black text-lg transition-all shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] hover:-translate-y-2"
          >
            <span className="relative z-10">Explore Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-indigo-600 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link 
            href="/about" 
            className="px-12 py-5 border-2 border-[#334155] text-[#F8FAFC] rounded-[2rem] font-black text-lg hover:bg-[#1E293B] hover:border-[#94A3B8] transition-all hover:-translate-y-2 backdrop-blur-md"
          >
            My Story
          </Link>
        </div>

        {/* Dynamic Counter/Metrics */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50 hover:opacity-100 transition-opacity duration-700">
          {[
            { label: 'Projects', value: '25+' },
            { label: 'Awards', value: '04' },
            { label: 'Happy Clients', value: '12' },
            { label: 'Cups of Coffee', value: '∞' }
          ].map(stat => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-[#F8FAFC]">{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
