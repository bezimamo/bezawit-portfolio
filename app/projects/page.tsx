import HeroSection from "@/components/projects/HeroSection";

export default function ProjectsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <HeroSection />
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Interested in Collaboration?</h3>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none">
              Start a Project
            </button>
            <button className="px-10 py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
              See Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
