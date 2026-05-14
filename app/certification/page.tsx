import HeroSection from "../../components/certification/HeroSection";

export default function CertificationPage() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
      <HeroSection />
      <section className="py-24 bg-[#0F172A]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-16 bg-[#1E293B] border border-dashed border-[#334155] rounded-[4rem] shadow-2xl">
            <h3 className="text-3xl font-black mb-6 text-[#F8FAFC] uppercase tracking-tighter">Verify Credentials</h3>
            <p className="text-lg text-[#CBD5E1] mb-12 max-w-lg mx-auto font-medium leading-relaxed">
              All certifications are verifiable through their respective platforms. 
              My record of continuous learning is a commitment to excellence.
            </p>
            <button className="px-12 py-5 bg-[#3B82F6] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#2563EB] transition-all hover:scale-105 shadow-xl">
              Request Full Transcript
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
