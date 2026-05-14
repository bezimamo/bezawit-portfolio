import HeroSection from "@/components/certification/HeroSection";

export default function CertificationPage() {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
      <HeroSection />
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-12 bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-[3rem]">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Verify Credentials</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
              All certifications are verifiable through their respective platforms. 
              Click on a certificate card above to view the digital credential.
            </p>
            <button className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-all">
              Request Full Transcript
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
