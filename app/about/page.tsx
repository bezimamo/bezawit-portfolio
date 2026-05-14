import HeroSection from "../../components/about/HeroSection";

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <HeroSection />
      
      <section className="py-24 bg-[#0F172A] border-t border-[#334155]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-4xl font-black mb-12 text-[#F8FAFC] tracking-tighter uppercase">My Mission & Vision</h3>
          <div className="space-y-10 text-xl text-[#CBD5E1] leading-relaxed text-justify font-medium">
            <p className="border-l-4 border-[#3B82F6] pl-8 py-4 bg-[#3B82F6]/5 rounded-r-3xl shadow-inner">
              I am a Software Engineering graduate and full-stack developer with experience in web and mobile application development. 
              I enjoy building modern, user-friendly, and real-world solutions using technologies such as Flutter, Next.js, React, Node.js, NestJS, MongoDB, and Tailwind CSS.
            </p>
            <p className="pl-9">
              I am passionate about using technology to solve real-world problems and create impactful digital solutions. 
              I have worked on projects including smart maternal healthcare systems, dashboards, authentication systems, and 
              cross-platform mobile applications with clean and professional UI/UX design.
            </p>
            <p className="pl-9">
              I am continuously improving my technical skills, learning new technologies, and exploring innovative ideas in 
              software development. My goal is to grow as a professional developer and contribute to meaningful projects that 
              create positive impact.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-12 bg-[#1E293B] rounded-[3rem] border border-[#334155] shadow-2xl hover:border-[#3B82F6]/50 transition-all duration-500">
              <h4 className="text-2xl font-black mb-6 text-[#3B82F6] uppercase tracking-widest">Core Values</h4>
              <ul className="space-y-4 text-[#94A3B8] font-bold">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span> Quality Code & Scalability</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span> User-Centric Design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span> Continuous Learning</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></span> Impactful Innovation</li>
              </ul>
            </div>
            <div className="p-12 bg-[#1E293B] rounded-[3rem] border border-[#334155] shadow-2xl hover:border-[#14B8A6]/50 transition-all duration-500">
              <h4 className="text-2xl font-black mb-6 text-[#14B8A6] uppercase tracking-widest">Future Goals</h4>
              <p className="text-[#CBD5E1] leading-relaxed font-medium">
                Aiming to specialize in AI-integrated full-stack systems and contribute to the growing tech ecosystem 
                in Ethiopia and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
