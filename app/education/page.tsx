import HeroSection from "@/components/education/HeroSection";

export default function EducationPage() {
  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-700">
      <HeroSection />
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white dark:bg-zinc-900 p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Professional Development</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Beyond formal education, I am committed to lifelong learning. I regularly attend workshops, 
              participate in hackathons, and contribute to open-source projects to stay at the forefront 
              of technological advancements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Research Focus</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Distributed systems and cloud-native architecture optimization.</p>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Teaching</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Mentored junior developers and conducted internal tech talks on React best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
