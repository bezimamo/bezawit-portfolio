'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Education', href: '/education' },
  { name: 'Certifications', href: '/certification' },
  { name: 'Projects', href: '/projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#0F172A]/80 backdrop-blur-md shadow-2xl border-b border-[#334155]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
            B
          </div>
          <span className="text-xl font-bold text-[#F8FAFC] tracking-tighter">
            Bezawit.
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-[#1E293B]/50 p-1.5 rounded-full border border-[#334155]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#3B82F6] text-white shadow-lg'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <a 
          href="mailto:bezawitmamo27@gmail.com"
          className="px-6 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
