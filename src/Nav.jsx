import React, { useEffect, useState } from "react";

export default function Nav() {
  const navLinks = ["About", "Skills", "Tool", "Project", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.72);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pillClass = scrolled
    ? "flex items-center gap-1 rounded-full border border-[#3B2352]/15 bg-[#F3ECE0]/80 backdrop-blur-xl pl-2 pr-2 py-2 shadow-[0_8px_32px_rgba(59,35,82,0.15)] ring-1 ring-[#3B2352]/10 transition-colors duration-300"
    : "flex items-center gap-1 rounded-full border border-white/50 bg-white/10 backdrop-blur-xl pl-2 pr-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.15)] ring-1 ring-white/20 transition-colors duration-300";

  const logoWrapClass = scrolled
    ? "w-10 h-10 rounded-full bg-[#3B2352]/10 border border-[#3B2352]/25 flex items-center justify-center overflow-hidden shrink-0 mr-1 transition-colors duration-300"
    : "w-10 h-10 rounded-full bg-white/30 border border-white/60 flex items-center justify-center overflow-hidden shrink-0 mr-1 transition-colors duration-300";

  const linkClass = scrolled
    ? "relative px-4 py-2 rounded-full text-sm font-medium text-[#3B2352]/80 hover:bg-[#3B2352] hover:text-[#F3ECE0] transition-all duration-300"
    : "relative px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-black/80 hover:text-white transition-all duration-300";

  const dotClass = scrolled
    ? "w-1 h-1 rounded-full bg-[#3B2352]/30 transition-colors duration-300"
    : "w-1 h-1 rounded-full bg-white/40 transition-colors duration-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6">
      <div className={pillClass}>
        <div className={logoWrapClass}>
          <img
            src="/deepakshi-portrait.jpeg"
            alt="Deepakshi Bametha logo"
            className="w-full h-full object-cover"
            onError={function (e) {
              e.target.style.display = "none";
            }}
          />
        </div>

        <div className="hidden sm:flex items-center">
          {navLinks.map(function (link, i) {
            return (
              <div key={link} className="flex items-center">
                <a
                  href={"/#" + link.toLowerCase()}
                  className={linkClass}
                >
                  {link}
                </a>
                {i < navLinks.length - 1 && (
                  <span className={dotClass} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}


