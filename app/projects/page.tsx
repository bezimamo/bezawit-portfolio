import HeroSection from "../../components/projects/HeroSection";

export default function ProjectsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <HeroSection />
      
      <section className="py-32 bg-[#0F172A] border-t border-[#334155]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-black mb-10 text-[#F8FAFC] tracking-tighter uppercase">Ready to start a project?</h3>
          <p className="text-xl text-[#CBD5E1] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            I'm always interested in hearing about new ideas and collaborative opportunities 
            in the healthcare, fintech, and fitness space.
          </p>
          <a 
            href="mailto:bezawitmamo27@gmail.com"
            className="px-14 py-6 bg-[#3B82F6] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#2563EB] transition-all hover:scale-105 shadow-[0_20px_40px_rgba(59,130,246,0.2)] inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
