import HeroSection from "../../components/education/HeroSection";

export default function EducationPage() {
  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-700">
      <HeroSection />
      
      <section className="py-24 bg-[#0F172A]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="p-16 bg-[#1E293B] rounded-[4rem] border border-[#334155] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 blur-3xl group-hover:bg-[#3B82F6]/10 transition-colors"></div>
            <h3 className="text-3xl font-black mb-10 text-[#F8FAFC] uppercase tracking-tighter">Academic Journey</h3>
            <div className="space-y-8 text-[#CBD5E1] font-medium text-xl leading-relaxed">
              <p>
                My time at Bahir Dar University has been transformative, allowing me to master 
                Software Engineering principles while working on diverse projects from mobile apps to cloud systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex items-center gap-6 p-8 bg-[#0F172A] rounded-3xl border border-[#334155] hover:border-[#3B82F6]/50 transition-all">
                  <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-3xl shadow-lg">🎓</div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] mb-1">Major</p>
                    <p className="text-[#F8FAFC] font-bold text-lg">Software Engineering</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-8 bg-[#0F172A] rounded-3xl border border-[#334155] hover:border-[#14B8A6]/50 transition-all">
                  <div className="w-14 h-14 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center text-3xl shadow-lg">📍</div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] mb-1">Location</p>
                    <p className="text-[#F8FAFC] font-bold text-lg">Bahir Dar, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
