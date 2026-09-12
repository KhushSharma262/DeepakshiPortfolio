import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import Publication from "./pages/Publication";
import Illustration from "./pages/Illustration";
import Branding from "./pages/Branding";
import Packaging from "./pages/Packaging";

export function Nav() {
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
              onError={function (e) { e.target.style.display = "none"; }}
            />
          </div>

          <div className="hidden sm:flex items-center">
            {navLinks.map(function (link, i) {
              return (
                <div key={link} className="flex items-center">
                  <a
                    href={"#" + link.toLowerCase()}
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

function Hero() {
  return (
    <div
      className="relative z-20 w-full"
      style={{
        filter: "drop-shadow(0 35px 40px rgba(27,19,60,0.45))",
        WebkitFilter: "drop-shadow(0 35px 40px rgba(27,19,60,0.45))",
      }}
    >
      <section
        className="relative h-screen w-full overflow-hidden flex flex-col"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        <video
          className="absolute inset-0 z-0 w-full h-[130%] object-cover object-top"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-canela text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl mx-auto text-center">
            Deepakshi Bametha
          </h1>

          <p className="mt-3 text-sm sm:text-base italic text-[#1B133C]/60 tracking-wide">
            where ideas meet vision
          </p>

          <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-center text-sm sm:text-base md:text-lg leading-relaxed text-[#1B133C]/80">
            I'm a visual designer creating thoughtful identities, packaging, and visual experiences that connect ideas with people. i believe good design goes beyond aesthetics.
          </p>
        </div>
      </section>
    </div>
  );
}

function About() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const cursorPosRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0, nx: 0, ny: 0, active: false });

  function handlePortraitMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 14 });
  }

  function handlePortraitLeave() {
    setTilt({ x: 0, y: 0 });
  }

  function handleSectionMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({
      x: x,
      y: y,
      nx: x / rect.width - 0.5,
      ny: y / rect.height - 0.5,
      active: true,
    });
    cursorPosRef.current = { x: x, y: y, active: true };
  }

  function handleSectionLeave() {
    setCursor(function (c) {
      return { x: c.x, y: c.y, nx: c.nx, ny: c.ny, active: false };
    });
    cursorPosRef.current = { x: -9999, y: -9999, active: false };
  }

  const headingShiftX = cursor.active ? cursor.nx * 16 : 0;
  const headingShiftY = cursor.active ? cursor.ny * 10 : 0;

  useEffect(function () {
    const canvas = canvasRef.current;
    const section = ref.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");

    function setup() {
      const rect = section.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = rect.width * rect.height;
      const count = Math.max(250, Math.min(900, Math.floor(area / 700)));
      const particles = [];
      for (let i = 0; i < count; i++) {
        const bx = Math.random() * rect.width;
        const by = Math.random() * rect.height;
        const cornerX = bx < rect.width / 2 ? -40 : rect.width + 40;
        const cornerY = by < rect.height / 2 ? -40 : rect.height + 40;
        particles.push({
          bx: bx,
          by: by,
          x: bx,
          y: by,
          cornerX: cornerX,
          cornerY: cornerY,
          r: 0.5 + Math.random() * 1.3,
          a: 0.15 + Math.random() * 0.35,
        });
      }
      particlesRef.current = particles;
    }

    setup();
    window.addEventListener("resize", setup);

    function tick() {
      const rect = section.getBoundingClientRect();
      const cursorPos = cursorPosRef.current;
      ctx.clearRect(0, 0, rect.width, rect.height);
      const repelRadius = 180;
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let targetX = p.bx;
        let targetY = p.by;
        if (cursorPos.active) {
          const dx = p.x - cursorPos.x;
          const dy = p.y - cursorPos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repelRadius) {
            const strength = 1 - dist / repelRadius;
            targetX = p.bx + (p.cornerX - p.bx) * strength;
            targetY = p.by + (p.cornerY - p.by) * strength;
          }
        }
        p.x += (targetX - p.x) * 0.09;
        p.y += (targetY - p.y) * 0.09;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(24,14,40," + p.a + ")";
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return function () {
      window.removeEventListener("resize", setup);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const bio = [
    "I\u2019m Deepakshi Bametha, a visual designer who transforms ideas into thoughtful and distinctive visual experiences.",
    "My practice includes branding, editorial design, packaging, illustration, and digital design with a strong focus on typography, composition, and visual storytelling.",
    "I believe effective design is not only visually engaging but also purposeful, clear, and memorable, bringing ideas to life with intention and creativity.",
    ];

  return (
    <div
      className="relative z-10 w-full"
      style={{
        filter: "drop-shadow(0 35px 40px rgba(27,19,60,0.45))",
        WebkitFilter: "drop-shadow(0 35px 40px rgba(27,19,60,0.45))",
      }}
    >
    <section
      id="about"
      ref={ref}
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="relative bg-gradient-to-br from-[#B9A3D9] via-[#A98CC7] to-[#7C5DA6] pt-24 sm:pt-32 pb-24 sm:pb-32 overflow-hidden"
      style={{
        marginTop: "-9vh",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          left: cursor.x - 180,
          top: cursor.y - 180,
          width: 360,
          height: 360,
          background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
          opacity: cursor.active ? 1 : 0,
          transition: "opacity 0.35s ease, left 0.06s linear, top 0.06s linear",
          filter: "blur(6px)",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-4 md:right-10 font-canela text-[180px] sm:text-[240px] md:text-[300px] leading-none text-[#3B2352]/[0.06]"
      >
        01
      </span>

      <div className="hidden md:block absolute top-10 right-10 text-[11px] font-mono tracking-[0.15em] uppercase text-[#3B2352]/60">
        Exhibit 01 &mdash; About
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-14 grid md:grid-cols-[0.85fr_1.3fr] gap-14 md:gap-0 items-start">
        <div className="md:sticky md:top-28">
          <div
            className="relative w-full max-w-xs mx-auto md:mx-0"
            style={{ perspective: "1000px" }}
            onMouseMove={handlePortraitMove}
            onMouseLeave={handlePortraitLeave}
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-[#3B2352]/20"
              style={{
                transform: "rotateX(" + tilt.x * 0.6 + "deg) rotateY(" + tilt.y * 0.6 + "deg)",
                transition: "transform 0.2s ease-out",
              }}
            />
            <div
              className="absolute -top-2 -left-2 w-full h-full border border-[#3B2352]/30"
              style={{
                transform: "rotateX(" + tilt.x * 0.8 + "deg) rotateY(" + tilt.y * 0.8 + "deg)",
                transition: "transform 0.2s ease-out",
              }}
            />
            <div
              className="relative aspect-[3/4] overflow-hidden bg-[#3B2352]/10 shadow-[0_30px_60px_-15px_rgba(36,31,32,0.35)]"
              style={{
                transform: "rotateX(" + tilt.x + "deg) rotateY(" + tilt.y + "deg)",
                transition: "transform 0.2s ease-out",
              }}
            >
              <img
                src="/deepakshi-portrait.jpeg"
                alt="Deepakshi Bametha"
                className="w-full h-full object-cover grayscale-[15%]"
                onError={function (e) { e.target.style.display = "none"; }}
              />
            </div>
          </div>
          <div className="mt-5 flex items-baseline justify-between max-w-xs mx-auto md:mx-0 border-t border-[#3B2352]/20 pt-3">
            <p className="text-[11px] font-mono tracking-[0.15em] uppercase text-[#3B2352]/60">
              Fig. I &mdash; Portrait
            </p>
            <p className="text-[11px] font-mono text-[#3B2352]/60">2026</p>
          </div>
        </div>

        <div className="md:pl-16 md:border-l md:border-[#3B2352]/20 md:pt-10">
          <div className="w-10 h-px bg-[#3B2352]/50 mb-5" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#3B2352]/70">
            About
          </span>

          <h2
            className="mt-4 font-canela text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#3B2352] max-w-xl"
            style={{
              transform: "translate(" + headingShiftX + "px, " + headingShiftY + "px)",
              transition: "transform 0.15s ease-out",
            }}
          >
            Designing with purpose
            <br />
            and <em className="not-italic italic">creating</em> with soul
          </h2>

          <div className="mt-9 space-y-5 max-w-xl">
            {bio.map(function (para, i) {
              if (i === 0) {
                const first = para.charAt(0);
                const rest = para.slice(1);
                return (
                  <p key={i} className="text-sm sm:text-base leading-relaxed text-[#FFFFF0]">
                    <span
                      className="float-left font-canela text-4xl sm:text-5xl leading-[0.85] mr-2 text-[#3B2352]"
                      style={{ marginTop: "-1px" }}
                    >
                      {first}
                    </span>
                    {rest}
                  </p>
                );
              }
              return (
                <p key={i} className="text-sm sm:text-base leading-relaxed text-[#FFFFF0]">
                  {para}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

function PaperTexture({ id, opacity }) {
  const highlightId = id + "-highlight";
  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "overlay", opacity: opacity }}
        preserveAspectRatio="none"
      >
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="5"
            seed="11"
            result="noise"
          />
          <feDiffuseLighting
            in="noise"
            lightingColor="#ffffff"
            surfaceScale="5.5"
            diffuseConstant="1.25"
            result="light"
          >
            <feDistantLight azimuth="235" elevation="48" />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter={"url(#" + id + ")"} />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "soft-light", opacity: opacity * 0.45 }}
        preserveAspectRatio="none"
      >
        <filter id={highlightId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="5"
            seed="11"
            result="noise2"
          />
          <feSpecularLighting
            in="noise2"
            lightingColor="#ffffff"
            surfaceScale="5.5"
            specularConstant="0.55"
            specularExponent="12"
            result="spec"
          >
            <feDistantLight azimuth="55" elevation="50" />
          </feSpecularLighting>
        </filter>
        <rect width="100%" height="100%" filter={"url(#" + highlightId + ")"} />
      </svg>
    </>
  );
}

function VintageEdgeVignette() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(66,44,26,0.03) 82%, rgba(48,30,14,0.08) 100%)",
        mixBlendMode: "multiply",
      }}
    />
  );
}




function buildTreeLayout(categories) {
  const marginY = 60;
  const categorySpacing = 130;
  const rootCardW = 118;
  const rootCardH = 48;
  const categoryX = 210;
  const categoryCardH = 48;
  const catToLeafGap = 56;
  const leafCardH = 46;
  const leafGapX = 22;
  const marginRight = 60;

  function catWidth(title) { return Math.max(150, title.length * 8.4 + 66); }
  function leafWidth(label) { return Math.max(88, label.length * 7.6 + 44); }

  let maxRightEdge = 0;

  const cats = categories.map(function (cat, ci) {
    const y = marginY + ci * categorySpacing;
    const cw = catWidth(cat.title);
    const rightEdge = categoryX + cw;
    let runningX = rightEdge + catToLeafGap;
    const leaves = cat.items.map(function (label) {
      const lw = leafWidth(label);
      const cx = runningX + lw / 2;
      runningX += lw + leafGapX;
      return { x: cx, width: lw, y: y, label: label };
    });
    const lastLeaf = leaves[leaves.length - 1];
    const rowRightEdge = lastLeaf.x + lastLeaf.width / 2;
    if (rowRightEdge > maxRightEdge) maxRightEdge = rowRightEdge;
    return { x: categoryX, width: cw, y: y, title: cat.title, leaves: leaves };
  });

  const width = maxRightEdge + marginRight;
  const height = marginY * 2 + (categories.length - 1) * categorySpacing;
  const rootY = height / 2;
  const root = { x: 30, width: rootCardW, height: rootCardH, y: rootY };

  return { width: width, height: height, root: root, cats: cats, categoryCardH: categoryCardH, leafCardH: leafCardH };
}

function Skills() {
  const sectionRef = useRef(null);
  const catRefs = useRef([]);
  const categories = [
    { title: "Branding & Identity Design", items: ["Logo Design", "Packaging Design"] },
    { title: "Layout & Print Design", items: ["Illustrator", "Typography"] },
    { title: "Visual Communication", items: ["Concept Development", "Figma"] },
  ];

  const layout = buildTreeLayout(categories);
  const [revealed, setRevealed] = useState(categories.map(function () { return false; }));
  const [cursor, setCursor] = useState({ nx: 0, ny: 0, active: false });
  const [hoveredCat, setHoveredCat] = useState(null);
  const [rootHovered, setRootHovered] = useState(false);

  function handleSectionMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ nx: x / rect.width - 0.5, ny: y / rect.height - 0.5, active: true });
  }

  function handleSectionLeave() {
    setCursor(function (c) { return { nx: c.nx, ny: c.ny, active: false }; });
  }

  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-cat-index"));
            setRevealed(function (prev) {
              if (prev[idx]) return prev;
              const next = prev.slice();
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    catRefs.current.forEach(function (el) { if (el) observer.observe(el); });
    return function () { observer.disconnect(); };
  }, []);

  const numeralShiftX = cursor.active ? cursor.nx * 18 : 0;
  const numeralShiftY = cursor.active ? cursor.ny * 12 : 0;
  const headingShiftX = cursor.active ? cursor.nx * 6 : 0;
  const headingShiftY = cursor.active ? cursor.ny * 4 : 0;

  
  

  return (
    <div className="relative z-20" style={{ marginTop: "-11vh" }}>
      <section
        id="skills"
        ref={sectionRef}
        onMouseMove={handleSectionMove}
        onMouseLeave={handleSectionLeave}
        className="relative overflow-hidden bg-gradient-to-r from-[#AB8FC9] to-[#8465AC] pt-24 sm:pt-32 pb-32 sm:pb-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
          style={{ height: "600px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(130,102,159,0) 0%, rgba(130,102,159,0.55) 30%, #82669F 80%, #82669F 100%)",
            }}
          />
          <PaperTexture id="skillsToolsGrain" opacity={0.1} />
        </div>

        
        <div className="absolute inset-0 overflow-hidden m-0 p-0">
          <img
            src="/images/torn-paper.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 select-none pointer-events-none"
            style={{ width: "100%", height: "100%", objectFit: "fill", margin: 0, padding: 0, display: "block", transform: "scaleY(1.25)", transformOrigin: "center" }}
            onError={function (e) { e.target.style.display = "none"; }}
          />
        </div>
        <VintageEdgeVignette />

        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-10 left-2 md:left-8 font-canela text-[150px] sm:text-[220px] md:text-[280px] leading-none text-[#3B2352]/[0.05]"
          style={{
            transform: "translate(" + numeralShiftX + "px, " + numeralShiftY + "px)",
            transition: "transform 0.2s ease-out",
          }}
        >
          02
        </span>

        <div className="hidden md:block absolute top-10 right-10 text-[11px] font-mono tracking-[0.15em] uppercase text-[#3B2352]/60">
          Exhibit 02 &mdash; Skills
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-14">
          <div className="max-w-xl">
            <div className="w-10 h-px bg-[#3B2352]/50 mb-5" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#3B2352]/70">
              Skills
            </span>
            <h2
              className="mt-4 font-canela text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#3B2352]"
              style={{
                transform: "translate(" + headingShiftX + "px, " + headingShiftY + "px)",
                transition: "transform 0.15s ease-out",
              }}
            >
              A working vocabulary
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#3B2352]/70 max-w-md">
              The disciplines I work across, shaping ideas into thoughtful and purposeful visual experiences.
            </p>
          </div>

          <div className="mt-14 md:mt-16 -mx-6 md:mx-0 py-8 overflow-x-auto">
            <style>{"@keyframes skillsBreathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.035); } } @keyframes skillsShine { 0% { transform: translateX(-120%) skewX(-20deg); } 100% { transform: translateX(220%) skewX(-20deg); } }"}</style>
            <svg
              viewBox={"0 0 " + layout.width + " " + layout.height}
              className="h-auto px-6 md:px-0"
              style={{ minWidth: Math.max(900, layout.width * 0.6), width: layout.width, display: "block", overflow: "visible" }}
              role="img"
              aria-label="Skills organized as three domains, each expanding into a row of specific disciplines"
            >
              <defs>
                <filter id="skillsGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
                  <feFlood floodColor="#7C5DA6" floodOpacity="0.55" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="shineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <line
                x1={layout.root.x + layout.root.width + 36}
                y1={layout.cats[0].y}
                x2={layout.root.x + layout.root.width + 36}
                y2={layout.cats[layout.cats.length - 1].y}
                className="stroke-[#3B2352]/25"
                strokeWidth={1.4}
              />
              <line
                x1={layout.root.x + layout.root.width}
                y1={layout.root.y}
                x2={layout.root.x + layout.root.width + 36}
                y2={layout.root.y}
                className="stroke-[#3B2352]/25"
                strokeWidth={1.4}
              />

              <g
                onMouseEnter={function () { setRootHovered(true); }}
                onMouseLeave={function () { setRootHovered(false); }}
                style={{ cursor: "pointer", animation: rootHovered ? "skillsBreathe 2.6s ease-in-out infinite" : "none", transformOrigin: (layout.root.x + layout.root.width / 2) + "px " + layout.root.y + "px" }}
              >
                <rect
                  x={layout.root.x}
                  y={layout.root.y - layout.root.height / 2}
                  width={layout.root.width}
                  height={layout.root.height}
                  rx={12}
                  className="fill-[#F3ECE0] stroke-[#3B2352]/20"
                  strokeWidth={1.2}
                />
                <circle cx={layout.root.x + 20} cy={layout.root.y} r={5} className="fill-[#7C5DA6]" />
                <text
                  x={layout.root.x + 34}
                  y={layout.root.y + 5}
                  textAnchor="start"
                  className="font-canela fill-[#3B2352]"
                  style={{ fontSize: 16, fontWeight: 600 }}
                >
                  Skills
                </text>
              </g>

              {layout.cats.map(function (cat, ci) {
                const accent = ["#7C5DA6", "#3B2352", "#A98CC7"][ci % 3];
                const isRevealed = revealed[ci];
                const spineX = layout.root.x + layout.root.width + 36;
                const firstLeaf = cat.leaves[0];
                const stubStartX = cat.x + cat.width;
                const stubEndX = firstLeaf.x - firstLeaf.width / 2;
                const isHovered = hoveredCat === ci;
                const isDimmed = hoveredCat !== null && hoveredCat !== ci;
                const groupOpacity = !isRevealed ? 0 : (isDimmed ? 0.2 : 1);

                return (
                  <g
                    key={cat.title}
                    ref={function (el) { catRefs.current[ci] = el; }}
                    data-cat-index={ci}
                    className="group/cat"
                    onMouseEnter={function () { setHoveredCat(ci); }}
                    onMouseLeave={function () { setHoveredCat(null); }}
                    style={{
                      opacity: groupOpacity,
                      transition: isRevealed ? "opacity 0.35s ease-out" : "opacity 0.6s ease-out",
                      transitionDelay: isRevealed ? "0ms" : ci * 150 + "ms",
                    }}
                  >
                    <line
                      x1={spineX}
                      y1={cat.y}
                      x2={cat.x}
                      y2={cat.y}
                      className="stroke-[#3B2352]/25"
                      strokeWidth={1.4}
                    />

                    <g style={{ cursor: "pointer" }}>
                      <g
                        filter={isHovered ? "url(#skillsGlow)" : undefined}
                        style={{ animation: (isHovered || rootHovered) ? "skillsBreathe 2.6s ease-in-out infinite" : "none", animationDelay: (ci * 0.15) + "s", transformOrigin: (cat.x + cat.width / 2) + "px " + cat.y + "px" }}
                      >
                        <rect
                          x={cat.x}
                          y={cat.y - layout.categoryCardH / 2}
                          width={cat.width}
                          height={layout.categoryCardH}
                          rx={12}
                          className="fill-[#F3ECE0]"
                          stroke={isHovered ? "#7C5DA6" : "rgba(59,35,82,0.2)"}
                          strokeWidth={isHovered ? 1.8 : 1.2}
                          style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                        />
                        {isHovered && (
                          <g clipPath={"inset(0 round 12px)"}>
                            <rect
                              x={cat.x}
                              y={cat.y - layout.categoryCardH / 2}
                              width={cat.width * 0.35}
                              height={layout.categoryCardH}
                              fill="url(#shineGradient)"
                              style={{ animation: "skillsShine 2.2s ease-in-out infinite" }}
                            />
                          </g>
                        )}
                        <circle cx={cat.x + 20} cy={cat.y} r={5} fill={accent} />
                        <text
                          x={cat.x + 34}
                          y={cat.y + 5}
                          textAnchor="start"
                          className="font-canela fill-[#3B2352]"
                          style={{ fontSize: 16, fontWeight: 600 }}
                        >
                          {cat.title}
                        </text>
                      </g>
                    </g>

                    <line
                      x1={stubStartX}
                      y1={cat.y}
                      x2={stubEndX}
                      y2={cat.y}
                      stroke={isHovered ? "#7C5DA6" : "rgba(59,35,82,0.2)"}
                      strokeWidth={isHovered ? 1.8 : 1.2}
                      pathLength={1}
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: isRevealed ? 0 : 1,
                        transition: "stroke-dashoffset 0.7s ease-out, stroke 0.3s ease, stroke-width 0.3s ease",
                        transitionDelay: isRevealed ? ci * 150 + 150 + "ms" : "0ms",
                      }}
                    />

                    {cat.leaves.map(function (leaf, li) {
                      const leafDelay = ci * 150 + 260 + li * 90;
                      return (
                        <g
                          key={leaf.label}
                          className="group/leaf"
                          style={{
                            opacity: isRevealed ? 1 : 0,
                            transition: "opacity 0.45s ease-out",
                            transitionDelay: isRevealed ? leafDelay + "ms" : "0ms",
                          }}
                        >
                          <g
                            filter={isHovered ? "url(#skillsGlow)" : undefined}
                            style={{ animation: (isHovered || rootHovered) ? "skillsBreathe 2.6s ease-in-out infinite" : "none", animationDelay: (ci * 0.15 + li * 0.08) + "s", transformOrigin: leaf.x + "px " + leaf.y + "px" }}
                          >
                            <rect
                              x={leaf.x - leaf.width / 2}
                              y={leaf.y - layout.leafCardH / 2}
                              width={leaf.width}
                              height={layout.leafCardH}
                              rx={10}
                              className="fill-white/40"
                              stroke={isHovered ? "#7C5DA6" : "rgba(59,35,82,0.15)"}
                              strokeWidth={isHovered ? 1.6 : 1}
                              style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                            />
                            {isHovered && (
                              <g clipPath={"inset(0 round 10px)"}>
                                <rect
                                  x={leaf.x - leaf.width / 2}
                                  y={leaf.y - layout.leafCardH / 2}
                                  width={leaf.width * 0.4}
                                  height={layout.leafCardH}
                                  fill="url(#shineGradient)"
                                  style={{ animation: "skillsShine 2.2s ease-in-out infinite", animationDelay: (li * 0.1) + "s" }}
                                />
                              </g>
                            )}
                            <text
                              x={leaf.x}
                              y={leaf.y - 1}
                              textAnchor="middle"
                              className="font-mono uppercase fill-[#3B2352]/75"
                              style={{ fontSize: 10.5, letterSpacing: "0.05em", fontWeight: 600 }}
                            >
                              {leaf.label}
                            </text>
                            <rect
                              x={leaf.x - (leaf.width - 28) / 2}
                              y={leaf.y + 10}
                              width={leaf.width - 28}
                              height={3}
                              rx={1.5}
                              fill={accent}
                              opacity={isHovered ? 0.9 : 0.55}
                              style={{ transition: "opacity 0.3s ease" }}
                            />
                          </g>
                        </g>
                      );
                    })}
                  </g>
                );
              })}


            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolIcon({ tool }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -26, y: px * 26 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  return (
    <div
      className="tool-icon-wrap"
      style={{ "--icon-scale": tool.scale || 1 }}
      onMouseEnter={function () { setHovered(true); }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        aria-hidden="true"
        className="tool-icon-glow"
        style={{ opacity: hovered ? 1 : 0 }}
      />
      <span
        className="tool-icon-clip"
        style={{
          transform:
            "perspective(500px) rotateX(" + tilt.x + "deg) rotateY(" + tilt.y + "deg) scale(" +
            (hovered ? 1.6 : 1) + ")",
        }}
      >
        <img
          src={tool.icon}
          alt={tool.name}
          className="tool-icon-img"
          onError={function (e) { e.target.style.display = "none"; }}
        />
      </span>
      <span className="tool-icon-label font-canela text-sm sm:text-base text-[#F3ECE0]/85">
        {tool.name}
      </span>
    </div>
  );
}

function ToolsBackgroundArt() {
  return (
    <>
      <PaperTexture id="toolsGrain" opacity={0.1} />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="70" cy="860" r="230" fill="#6C5488" opacity="0.4" />
        <circle cx="70" cy="860" r="180" fill="none" stroke="#B9A7C8" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="70" cy="860" r="130" fill="none" stroke="#B9A7C8" strokeOpacity="0.1" strokeWidth="1" />

        <circle cx="-110" cy="360" r="260" fill="none" stroke="#B9A7C8" strokeOpacity="0.28" strokeWidth="1" />
        <line x1="58" y1="0" x2="58" y2="900" stroke="#B9A7C8" strokeOpacity="0.16" strokeWidth="1" />
        <circle cx="58" cy="190" r="3.5" fill="#B9A7C8" fillOpacity="0.45" />
        <line x1="46" y1="190" x2="70" y2="190" stroke="#B9A7C8" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="58" y1="178" x2="58" y2="202" stroke="#B9A7C8" strokeOpacity="0.4" strokeWidth="1" />

        <path
          d="M 150 78 L 154 90 L 166 94 L 154 98 L 150 110 L 146 98 L 134 94 L 146 90 Z"
          fill="#B9A7C8"
          fillOpacity="0.35"
        />

        <g stroke="#B9A7C8" strokeOpacity="0.22" strokeWidth="1">
          <line x1="1180" y1="40" x2="1180" y2="170" />
          <line x1="1220" y1="40" x2="1220" y2="170" />
          <line x1="1260" y1="40" x2="1260" y2="170" />
          <line x1="1300" y1="40" x2="1300" y2="170" />
          <line x1="1180" y1="40" x2="1300" y2="40" />
          <line x1="1180" y1="80" x2="1300" y2="80" />
          <line x1="1180" y1="120" x2="1300" y2="120" />
          <line x1="1180" y1="160" x2="1300" y2="160" />
        </g>
        <circle cx="1240" cy="100" r="20" fill="none" stroke="#B9A7C8" strokeOpacity="0.3" strokeWidth="1" />
        <line x1="1220" y1="100" x2="1260" y2="100" stroke="#B9A7C8" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="1240" y1="80" x2="1240" y2="120" stroke="#B9A7C8" strokeOpacity="0.35" strokeWidth="1" />
        <path d="M 1120 60 C 1180 20, 1260 20, 1320 70" fill="none" stroke="#B9A7C8" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="1320" cy="70" r="3" fill="#B9A7C8" fillOpacity="0.4" />

        <circle cx="1560" cy="480" r="300" fill="none" stroke="#B9A7C8" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="1560" cy="480" r="220" fill="none" stroke="#B9A7C8" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 7" />
        <circle cx="1300" cy="440" r="3.5" fill="#B9A7C8" fillOpacity="0.4" />
        <line x1="1288" y1="440" x2="1312" y2="440" stroke="#B9A7C8" strokeOpacity="0.35" strokeWidth="1" />
        <line x1="1300" y1="428" x2="1300" y2="452" stroke="#B9A7C8" strokeOpacity="0.35" strokeWidth="1" />
        <path
          d="M 1420 260 L 1424 272 L 1436 276 L 1424 280 L 1420 292 L 1416 280 L 1404 276 L 1416 272 Z"
          fill="#B9A7C8"
          fillOpacity="0.3"
        />

        <path
          d="M -50 520 C 150 420, 300 250, 480 380 C 650 500, 780 300, 950 340 C 1150 390, 1300 250, 1500 300"
          fill="none"
          stroke="#B9A7C8"
          strokeOpacity="0.32"
          strokeWidth="1.4"
        />
        <circle cx="150" cy="420" r="3.5" fill="#B9A7C8" fillOpacity="0.4" />
        <rect x="475" y="375" width="8" height="8" fill="none" stroke="#B9A7C8" strokeOpacity="0.4" strokeWidth="1" transform="rotate(45 480 380)" />
        <g stroke="#B9A7C8" strokeOpacity="0.4" strokeWidth="1">
          <line x1="770" y1="300" x2="790" y2="300" />
          <line x1="780" y1="290" x2="780" y2="310" />
        </g>
        <rect x="1144" y="384" width="10" height="10" fill="none" stroke="#B9A7C8" strokeOpacity="0.35" strokeWidth="1" transform="rotate(45 1150 390)" />

        <path
          d="M 100 780 C 400 720, 700 800, 1000 740 C 1200 710, 1350 750, 1450 720"
          fill="none"
          stroke="#B9A7C8"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        <circle cx="400" cy="722" r="3" fill="#B9A7C8" fillOpacity="0.35" />
        <circle cx="1200" cy="712" r="3" fill="#B9A7C8" fillOpacity="0.35" />

        <path
          d="M 1320 780 L 1323 789 L 1332 792 L 1323 795 L 1320 804 L 1317 795 L 1308 792 L 1317 789 Z"
          fill="#B9A7C8"
          fillOpacity="0.3"
        />
      </svg>
    </>
  );
}

function Tools() {
  const tools = [
    { name: "Adobe Illustrator", icon: "/icons/adobe-illustrator.png", scale: 1.1 },
    { name: "Adobe Photoshop", icon: "/icons/adobe-photoshop.png", scale: 1.1 },
    { name: "Adobe InDesign", icon: "/icons/adobe-indesign.png", scale: 1.1 },
    { name: "Adobe After Effects", icon: "/icons/adobe-aftereffects.png", scale: 1.1 },
    { name: "Figma", icon: "/icons/figma.png", scale: 1.1 },
    { name: "Procreate", icon: "/icons/procreate.png", scale: 1.1 },
    { name: "Canva", icon: "/icons/canva.png", scale: 1.1 },
  ];
  const [cursor, setCursor] = useState({ nx: 0, ny: 0, active: false });

  function handleSectionMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ nx: x / rect.width - 0.5, ny: y / rect.height - 0.5, active: true });
  }

  function handleSectionLeave() {
    setCursor(function (c) { return { nx: c.nx, ny: c.ny, active: false }; });
  }

  const numeralShiftX = cursor.active ? cursor.nx * 16 : 0;
  const numeralShiftY = cursor.active ? cursor.ny * 10 : 0;

  return (
    <section
      id="tool"
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="relative overflow-hidden bg-[#82669F] pt-16 sm:pt-20 pb-32 sm:pb-40"
      style={{ marginTop: "-6px" }}
    >
      <ToolsBackgroundArt />
      <style>{"@keyframes toolFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } } .tools-row { display: grid; grid-auto-flow: column; grid-auto-columns: clamp(60px, 7vw, 84px); column-gap: clamp(48px, 6.5vw, 76px); justify-items: center; align-items: end; overflow: visible; padding: 44px 0 64px; } .tool-icon-wrap { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; cursor: pointer; padding: 10px 0; opacity: 1; transition: opacity 0.4s ease; } .tool-icon-glow { position: absolute; top: 50%; left: 50%; width: 140px; height: 140px; transform: translate(-50%, -50%); border-radius: 50%; background: radial-gradient(circle, rgba(196,168,224,0.55) 0%, rgba(196,168,224,0) 70%); filter: blur(6px); transition: opacity 0.4s ease; pointer-events: none; z-index: 0; } .tool-icon-clip { position: relative; z-index: 1; display: block; overflow: hidden; border-radius: 22%; width: clamp(52px, 6vw, 76px); height: clamp(52px, 6vw, 76px); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease; animation: toolFloat 3.4s ease-in-out infinite; } .tool-icon-img { display: block; width: 100%; height: 100%; object-fit: cover; transform: scale(var(--icon-scale, 1)); } .tool-icon-label { margin-top: 16px; opacity: 0; transform: translateY(6px); transition: opacity 0.3s ease, transform 0.3s ease; white-space: nowrap; pointer-events: none; } .tools-row:hover .tool-icon-wrap:not(:hover) { opacity: 0.28; } .tool-icon-wrap:hover { z-index: 10; } .tool-icon-wrap:hover .tool-icon-clip { filter: drop-shadow(0 0 28px rgba(243,236,224,0.65)) drop-shadow(0 0 10px rgba(243,236,224,0.9)) drop-shadow(0 18px 22px rgba(0,0,0,0.35)); animation-play-state: paused; } .tool-icon-wrap:hover .tool-icon-label { opacity: 1; transform: translateY(0); }"}</style>



      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-8 right-2 md:right-10 font-canela text-[150px] sm:text-[220px] md:text-[280px] leading-none text-[#F3ECE0]/[0.05]"
        style={{
          transform: "translate(" + numeralShiftX + "px, " + numeralShiftY + "px)",
          transition: "transform 0.2s ease-out",
        }}
      >
        03
      </span>

      <div className="hidden md:block absolute top-10 right-10 text-[11px] font-mono tracking-[0.15em] uppercase text-[#F3ECE0]/50">
        Exhibit 03 &mdash; Tools
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-14">
        <div className="w-10 h-px bg-[#F3ECE0]/40 mb-5" />
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#F3ECE0]/60">
          Tools
        </span>
        <h2 className="mt-4 font-canela text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#F3ECE0] max-w-xl">
          Instruments of the trade
        </h2>

        <div className="tools-row mt-16 md:mt-20">
          {tools.map(function (tool) {
            return <ToolIcon key={tool.name} tool={tool} />;
          })}
        </div>
      </div>
    </section>
  );
}






function ProjectCard({ item }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 14 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
        marginTop: item.offset,
      }}
    >
      <Link
        to={item.slug === "publication" ? "/publication" : item.slug === "illustration" ? "/illustration" : "/work/" + item.slug}
        onMouseEnter={function () { setHovered(true); }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group block relative overflow-hidden rounded-2xl border border-[#F3ECE0]/10 shadow-[0_35px_70px_-25px_rgba(0,0,0,0.65),0_10px_25px_-10px_rgba(0,0,0,0.45)]"
        style={{
          transform:
            "rotateX(" + tilt.x + "deg) rotateY(" + tilt.y + "deg) rotate(" + item.rotate + "deg)",
          transition: "transform 0.25s ease-out",
          aspectRatio: "3 / 4",
        }}
      >
        <Link to={item.slug === "publication" ? "/publication" : item.slug === "illustration" ? "/illustration" : "/work/" + item.slug}><Link to={item.slug === "publication" ? "/publication" : item.slug === "illustration" ? "/illustration" : "/work/" + item.slug}><img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={function (e) { e.target.style.display = "none"; }}
        /></Link></Link>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: item.tint,
            opacity: hovered ? 0 : 0.82,
            transition: "opacity 0.5s ease",
            mixBlendMode: "multiply",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: item.tint,
            opacity: hovered ? 0 : 0.35,
            transition: "opacity 0.5s ease",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 1px 0 rgba(243,236,224,0.14), inset 0 0 0 1px rgba(0,0,0,0.25)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-canela text-2xl sm:text-3xl text-[#F3ECE0] tracking-wide text-center px-4"
            style={{
              opacity: hovered ? 0 : 1,
              transform: hovered ? "translateY(-6px)" : "translateY(0)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {item.name}
          </span>
        </div>
      </Link>
    </div>
  );
}

function ProjectsGrid() {
  const [cursor, setCursor] = useState({ nx: 0, ny: 0, active: false });

  function handleSectionMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ nx: x / rect.width - 0.5, ny: y / rect.height - 0.5, active: true });
  }

  function handleSectionLeave() {
    setCursor(function (c) { return { nx: c.nx, ny: c.ny, active: false }; });
  }

  const items = [
    { name: "Branding", slug: "branding", image: "/work/Branding.jpg", tint: "#7C5DA6", rotate: -2, offset: "0px" },
    { name: "Packaging", slug: "packaging", image: "/work/Packaging.jpg", tint: "#3B2352", rotate: 2, offset: "56px" },
    { name: "Illustration", slug: "illustration", image: "/work/Illustration.jpg", tint: "#8465AC", rotate: -1.5, offset: "-28px" },
    { name: "Publication", slug: "publication", image: "/work/Publication.jpg", tint: "#AB8FC9", rotate: 3, offset: "84px" },
  ];

  const shift1X = cursor.active ? cursor.nx * 24 : 0;
  const shift1Y = cursor.active ? cursor.ny * 18 : 0;
  const shift2X = cursor.active ? cursor.nx * -34 : 0;
  const shift2Y = cursor.active ? cursor.ny * -24 : 0;
  const shift3X = cursor.active ? cursor.nx * 16 : 0;
  const shift3Y = cursor.active ? cursor.ny * -14 : 0;

  return (
    <section
      id="project"
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="relative overflow-hidden bg-[#4F3B63] pt-24 sm:pt-32 pb-32 sm:pb-40"
    ><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-30 h-20"><svg className="h-full w-full" viewBox="0 0 1000 80" preserveAspectRatio="none"><path d="M0,0 H1000 V0 C875,0 750,28 625,28 C500,28 375,0 250,0 C125,0 0,28 0,28 Z" fill="#82669F"/></svg></div><style>{`#project{position:relative;}#project::before{content:"";position:absolute;z-index:20;pointer-events:none;left:0;right:0;top:-1px;height:72px;background:#4F3B63;clip-path:path("M0 18 C25 18 25 68 50 68 C75 68 75 18 100 18 L100 100 L0 100 Z");transform:scaleX(1.01);transform-origin:top;}`}</style>
      <PaperTexture id="projectsGrain" opacity={0.11} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(243,236,224,0.07) 0%, rgba(243,236,224,0) 70%)",
          transform: "translate(" + shift1X + "px, " + shift1Y + "px)",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 w-[38rem] h-[38rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(15,8,20,0.28) 0%, rgba(15,8,20,0) 70%)",
          transform: "translate(" + shift2X + "px, " + shift2Y + "px)",
          transition: "transform 0.3s ease-out",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[22rem] -left-[22rem] w-[44rem] h-[44rem] rounded-full hidden sm:block"
        style={{
          border: "1px solid rgba(243,236,224,0.10)",
          transform: "translate(" + shift3X + "px, " + shift3Y + "px)",
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[26rem] -right-[20rem] w-[48rem] h-[48rem] rounded-full hidden sm:block"
        style={{ border: "1px solid rgba(243,236,224,0.08)" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-8 w-px h-32 hidden md:block"
        style={{ background: "linear-gradient(to bottom, rgba(243,236,224,0.16), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-8 w-px h-40 hidden md:block"
        style={{ background: "linear-gradient(to top, rgba(243,236,224,0.16), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-[14%] w-px h-20 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, rgba(243,236,224,0.10), transparent)" }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute top-24 right-12 hidden md:block" style={{ width: 18, height: 18 }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 1, background: "rgba(243,236,224,0.22)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 1, background: "rgba(243,236,224,0.22)" }} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-14 left-14 hidden sm:block" style={{ width: 14, height: 14 }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 1, background: "rgba(243,236,224,0.16)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 1, background: "rgba(243,236,224,0.16)" }} />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute rounded-full hidden md:block" style={{ top: "8%", left: "6%", width: 3, height: 3, background: "rgba(243,236,224,0.24)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full hidden md:block" style={{ bottom: "10%", right: "7%", width: 3, height: 3, background: "rgba(243,236,224,0.2)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full hidden lg:block" style={{ top: "46%", right: "4%", width: 2, height: 2, background: "rgba(243,236,224,0.18)" }} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-48 h-48 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(243,236,224,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,236,224,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at top right, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at top right, black 0%, transparent 75%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(243,236,224,0.05) 0%, rgba(0,0,0,0) 45%), radial-gradient(ellipse at center, rgba(15,8,20,0) 55%, rgba(15,8,20,0.4) 100%)" }}
      />

      <div className="hidden md:block absolute top-10 right-10 text-[11px] font-mono tracking-[0.15em] uppercase text-[#F3ECE0]/50">
        Exhibit 04 &mdash; Projects
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-14">
        <div className="max-w-xl">
          <div className="w-10 h-px bg-[#F3ECE0]/40 mb-5" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#F3ECE0]/60">
            Projects
          </span>
          <h2 className="mt-4 font-canela text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#F3ECE0]">
            Selected work
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#F3ECE0]/70 max-w-md">
            A selection of work shaped by curiosity, creativity, and visuals storytelling. Exploring branding, packaging, illustration, and publication.
          </p>
        </div>

        <div className="relative mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map(function (item) {
            return <ProjectCard key={item.slug} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const [cursor, setCursor] = useState({ nx: 0, ny: 0, active: false });

  function handleSectionMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ nx: x / rect.width - 0.5, ny: y / rect.height - 0.5, active: true });
  }

  function handleSectionLeave() {
    setCursor(function (c) { return { nx: c.nx, ny: c.ny, active: false }; });
  }

  const drift1X = cursor.active ? cursor.nx * 10 : 0;
  const drift1Y = cursor.active ? cursor.ny * 6 : 0;
  const drift2X = cursor.active ? cursor.nx * -8 : 0;
  const drift2Y = cursor.active ? cursor.ny * -5 : 0;

  return (
    <section
      id="contact"
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="relative overflow-hidden bg-[#2a1c3b] py-32 sm:py-44"
    ><div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-30 h-20"><svg className="h-full w-full" viewBox="0 0 1000 80" preserveAspectRatio="none"><path d="M0,0 H1000 V0 C850,0 700,48 500,78 C300,48 150,0 0,0 Z" fill="#4F3B63"/></svg></div><style>{`#contact{position:relative;}#contact::before{content:"";position:absolute;z-index:20;pointer-events:none;left:0;right:0;top:-1px;height:78px;background:#2a1c3b;clip-path:path("M0 0 C25 0 35 62 50 70 C65 62 75 0 100 0 L100 100 L0 100 Z");transform:scaleX(1.01);transform-origin:top;}`}</style>
      {/* fine grain texture, reusing existing PaperTexture technique */}
      <PaperTexture id="contactGrain" opacity={0.14} />

      {/* large cropped circle, top-left, bleeding off edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[28rem] -left-[28rem] w-[56rem] h-[56rem] rounded-full"
        style={{
          border: "1px solid rgba(185,167,200,0.08)",
          transform: "translate(" + drift1X + "px, " + drift1Y + "px)",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* secondary faint arc, right side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[22rem] -right-[18rem] w-[44rem] h-[44rem] rounded-full hidden sm:block"
        style={{
          border: "1px solid rgba(185,167,200,0.06)",
          transform: "translate(" + drift2X + "px, " + drift2Y + "px)",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* thin construction lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[18%] w-px h-24 hidden md:block"
        style={{ background: "linear-gradient(to bottom, rgba(185,167,200,0.14), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[22%] w-px h-28 hidden md:block"
        style={{ background: "linear-gradient(to top, rgba(185,167,200,0.14), transparent)" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[42%] w-px h-16 hidden md:block"
        style={{ background: "linear-gradient(to bottom, rgba(185,167,200,0.10), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[8%] w-px h-32 hidden md:block"
        style={{ background: "linear-gradient(to top, rgba(185,167,200,0.12), transparent)" }}
      />

      {/* crosshair, upper right */}
      <div aria-hidden="true" className="pointer-events-none absolute top-14 right-14 hidden md:block" style={{ width: 18, height: 18 }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 1, background: "rgba(185,167,200,0.18)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 1, background: "rgba(185,167,200,0.18)" }} />
      </div>

      {/* crosshair, lower left */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-20 left-10 hidden sm:block" style={{ width: 14, height: 14 }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 1, background: "rgba(185,167,200,0.14)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 1, background: "rgba(185,167,200,0.14)" }} />
      </div>

      {/* small nodes */}
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full hidden md:block" style={{ top: "22%", left: "12%", width: 3, height: 3, background: "rgba(185,167,200,0.2)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute rounded-full hidden md:block" style={{ bottom: "18%", right: "16%", width: 3, height: 3, background: "rgba(185,167,200,0.15)" }} />

      {/* cropped grid fragment, bottom-right corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(185,167,200,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(185,167,200,0.07) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(circle at bottom right, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at bottom right, black 0%, transparent 75%)",
        }}
      />

      {/* subtle vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(7,5,10,0) 55%, rgba(0,0,0,0.35) 100%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-14 text-left">
        <div className="w-10 h-px bg-[#F3ECE0]/25 mb-5" />
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#F3ECE0]/50">
          Contact
        </span>
        <h2 className="mt-4 font-canela text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[#F3ECE0]">
          Let&rsquo;s work together
        </h2>
        <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#F3ECE0]/60 max-w-md">
          Have a project in mind? I&rsquo;d love to hear about it.
        </p>
        
          <div className="mt-8 flex flex-col items-start gap-3">
          <a href="mailto:deepakshibametha@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-[#F3ECE0]/20 hover:bg-[#F3ECE0] hover:text-[#2a1c3b] px-6 py-3 text-xs font-mono uppercase tracking-[0.15em] text-[#F3ECE0] transition-colors duration-300">
            deepakshibametha@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/deepakshi-bametha-577917316/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#F3ECE0]/20 hover:bg-[#F3ECE0] hover:text-[#2a1c3b] px-6 py-3 text-xs font-mono uppercase tracking-[0.15em] text-[#F3ECE0] transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://www.behance.net/deepaksbametha" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#F3ECE0]/20 hover:bg-[#F3ECE0] hover:text-[#2a1c3b] px-6 py-3 text-xs font-mono uppercase tracking-[0.15em] text-[#F3ECE0] transition-colors duration-300">
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkDetail() {
  const { slug } = useParams();
  const title = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "";

  if (slug === "branding") {
    return <Branding />;
  }

  if (slug === "packaging") {
    return <Packaging />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#503c6a] text-[#F3ECE0] px-6 text-center">
      <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#F3ECE0]/50 mb-4">
        Coming soon
      </span>
      <h1 className="font-canela text-4xl sm:text-5xl md:text-6xl mb-6">{title}</h1>
      <p className="max-w-md text-sm sm:text-base text-[#F3ECE0]/70 mb-8">
        This section is still being designed. Check back soon for the full {title.toLowerCase()} work.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-[#F3ECE0]/25 hover:bg-[#F3ECE0] hover:text-[#503c6a] px-5 py-2.5 text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-300"
      >
        Back home
      </Link>
    </div>
  );
}
function Home() {
  return (
    <>
      
        <Nav />
    <OrganicScrollbar />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <ProjectsGrid />
      <Contact />
    </>
  );
}

function OrganicScrollbar() {
  const [progress, setProgress] = useState(0);

  useEffect(function () {
    function updateProgress() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return function () {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const x = 50 + Math.sin(progress * Math.PI * 2) * 20;

  return (
    <>
      <style>{`
        html {
          scrollbar-width: none;
        }

        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-0 top-0 z-[9999] hidden md:block"
        style={{
          width: "34px",
          height: "100vh",
        }}
      >
        <svg
          width="34"
          height="100%"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M50 0 C18 125 82 250 50 375 C18 500 82 625 50 750 C18 875 82 950 50 1000"
            fill="none"
            stroke="rgba(243,236,224,0.22)"
            strokeWidth="1.4"
          />
        </svg>

        <div
          className="absolute h-11 w-[7px] rounded-full"
          style={{
            left: `${x}%`,
            top: `calc(${progress * 100}% - 22px)`,
            transform: "translateX(-50%)",
            background:
              "linear-gradient(180deg, rgba(243,236,224,0.95), rgba(126,98,153,0.9), rgba(243,236,224,0.8))",
            boxShadow:
              "0 0 8px rgba(243,236,224,0.45), 0 0 18px rgba(126,98,153,0.5)",
          }}
        />
      </div>
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route path="/publication" element={<Publication />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}





function ScrollToTop() {
  const location = useLocation();
  useEffect(function () {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}








