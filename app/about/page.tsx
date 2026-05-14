import HeroSection from "@/components/about/HeroSection";

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <HeroSection />
      
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">My Mission & Vision</h3>
          <div className="space-y-8 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
            <p>
              I am a Software Engineering graduate and full-stack developer with experience in web and mobile application development. 
              I enjoy building modern, user-friendly, and real-world solutions using technologies such as Flutter, Next.js, React, Node.js, NestJS, MongoDB, and Tailwind CSS.
            </p>
            <p>
              I am passionate about using technology to solve real-world problems and create impactful digital solutions. 
              I have worked on projects including smart maternal healthcare systems, dashboards, authentication systems, and 
              cross-platform mobile applications with clean and professional UI/UX design.
            </p>
            <p>
              I am continuously improving my technical skills, learning new technologies, and exploring innovative ideas in 
              software development. My goal is to grow as a professional developer and contribute to meaningful projects that 
              create positive impact.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
              <h4 className="text-xl font-bold mb-4 text-indigo-600">Core Values</h4>
              <ul className="space-y-3 list-disc list-inside">
                <li>Quality Code & Scalability</li>
                <li>User-Centric Design</li>
                <li>Continuous Learning</li>
                <li>Impactful Innovation</li>
              </ul>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
              <h4 className="text-xl font-bold mb-4 text-purple-600">Future Goals</h4>
              <p className="text-sm">
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
