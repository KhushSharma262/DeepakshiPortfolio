import React from "react";
import Nav from "../Nav";

export default function Branding() {


  return (
    <main className="branding-page">
      <Nav />
      <style>{`
        .branding-page {
          --paper: #f4efe7;
          --ink: #241c19;
          --muted: #756a63;
          --line: rgba(36,28,25,.16);
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.7), transparent 32%),
            radial-gradient(circle at 80% 70%, rgba(120,90,60,.07), transparent 35%),
            var(--paper);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .branding-page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .045;
          z-index: 20;
          background-image:
            repeating-radial-gradient(circle at 0 0, #000 0 0.7px, transparent 0.8px 4px);
          mix-blend-mode: multiply;
        }

        .branding-page::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .12;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 120px 120px;
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }

        .brand-intro {
          min-height: 92vh;
          display: flex;
          align-items: flex-end;
          padding: 16vw 7vw 3vw;
          position: relative;
          border-bottom: 1px solid var(--line);
        }

        .intro-number {
          position: absolute;
          top: 5vw;
          right: 7vw;
          font-size: 11px;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .intro-mark {
          display: none;
        }

        .intro-cybersigil { position:absolute; top:7%; left:50%; width:120px; height:120px; transform:translate(calc(-50% + var(--px, 0px)), var(--py, 0px)) perspective(900px) rotateX(var(--my, 0deg)) rotateY(var(--mx, 0deg)); transform-origin:center center; z-index:2; pointer-events:auto; transition:transform 700ms cubic-bezier(.22,.61,.36,1); }

        .intro-cybersigil svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .sigil-main {
          fill: none;
          stroke: rgba(48,36,30,.62);
          stroke-width: 1.05;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .sigil-main .sigil-core {
          fill: rgba(48,36,30,.62);
          stroke: none;
        }

        .intro-cybersigil::after {
          content: "";
          position: absolute;
          inset: 18% 18% 18% 18%;
          pointer-events: none;
          background: radial-gradient(
            ellipse,
            rgba(122,92,70,.035),
            transparent 68%
          );
          filter: blur(14px);
        }

        .intro-content {
          max-width: 1050px;
        }

        .eyebrow {
          font-size: 11px;
          letter-spacing: .34em;
          text-transform: uppercase;
          margin-bottom: 28px;
          color: var(--muted);
        }

        .brand-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(82px, 15vw, 220px);
          font-weight: 400;
          line-height: .78;
          letter-spacing: -.055em;
        }

        .intro-copy {
          max-width: 620px;
          margin-top: 55px;
          font-size: clamp(18px, 2vw, 25px);
          line-height: 1.45;
          color: #554943;
        }

        .project-section {
          position: relative;
          padding: 11vw 7vw;
          border-bottom: 1px solid var(--line);
        }

        .project-section:nth-of-type(odd) {
          background: rgba(255,255,255,.17);
        }

        .project-grid {
          max-width: 1380px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(260px, .72fr) minmax(400px, 1.28fr);
          gap: clamp(50px, 8vw, 150px);
          align-items: center;
        }

        .project-section.reverse .project-grid {
          grid-template-columns: minmax(400px, 1.28fr) minmax(260px, .72fr);
        }

        .project-section.reverse .project-info {
          order: 2;
        }

        .project-section.reverse .project-image {
          order: 1;
        }

        .project-index {
          font-size: 10px;
          letter-spacing: .3em;
          color: var(--muted);
          margin-bottom: 25px;
        }

        .project-name {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(48px, 6vw, 92px);
          line-height: .9;
          letter-spacing: -.045em;
          margin: 0 0 32px;
        }

        .project-meta {
          font-size: 11px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 32px;
        }

        .project-description {
          font-size: clamp(16px, 1.45vw, 20px);
          line-height: 1.65;
          color: #5c514b;
          max-width: 470px;
        }

        .project-line {
          width: 80px;
          height: 1px;
          background: var(--ink);
          margin: 38px 0;
          opacity: .45;
        }

        .project-image {
          position: relative;
        }

        .project-image img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 3px;
          box-shadow: 0 28px 70px rgba(38,25,18,.14);
        }

        .image-label {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          font-size: 9px;
          letter-spacing: .27em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .construction {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 1px solid var(--line);
          border-radius: 50%;
          right: 3vw;
          bottom: 5vw;
          opacity: .55;
        }

        .construction::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -20px;
          width: 1px;
          height: 140px;
          background: var(--line);
        }

        .construction::after {
          content: "";
          position: absolute;
          top: 50%;
          left: -20px;
          width: 140px;
          height: 1px;
          background: var(--line);
        }

        .logofolio {
          padding: 12vw 5vw 14vw;
          position: relative;
        }

        .logofolio-header {
          max-width: 1380px;
          margin: 0 auto 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
        }

        .logo-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(70px, 12vw, 180px);
          line-height: .8;
          font-weight: 400;
          letter-spacing: -.06em;
        }

        .logo-copy {
          max-width: 430px;
          font-size: 18px;
          line-height: 1.6;
          color: var(--muted);
          padding-bottom: 8px;
        }

        .logo-image-wrap {
          max-width: 1380px;
          margin: 0 auto;
          position: relative;
        }

        .logo-image-wrap img {
          display: block;
          width: 100%;
          height: auto;
          box-shadow: 0 35px 90px rgba(38,25,18,.12);
        }

        .logo-caption {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          font-size: 9px;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 800px) {
          .brand-intro {
            min-height: 78vh;
            padding: 25vw 7vw 15vw;
          }

          .intro-mark {
            top: 12%;
            width: 55px;
            height: 55px;
          }

          .intro-copy {
            margin-top: 38px;
          }

          .project-section,
          .logofolio {
            padding: 22vw 7vw;
          }

          .project-grid,
          .project-section.reverse .project-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .project-section.reverse .project-info,
          .project-section.reverse .project-image {
            order: initial;
          }

          .project-name {
            font-size: clamp(55px, 16vw, 90px);
          }

          .logofolio-header {
            grid-template-columns: 1fr;
            gap: 35px;
            margin-bottom: 50px;
          }

          .logo-title {
            font-size: clamp(72px, 19vw, 130px);
          }

          .construction {
            display: none;
          }
        }
      `}</style>

      {/* INTRO */}
      <style>{`
  /* BRANDING_MINIMAL_SCROLLBAR */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(55,42,30,0.45) transparent;
  }

  html::-webkit-scrollbar {
    width: 5px;
  }

  html::-webkit-scrollbar-track {
    background: transparent;
  }

  html::-webkit-scrollbar-thumb {
    background: rgba(55,42,30,0.42);
    border-radius: 999px;
  }

  html::-webkit-scrollbar-thumb:hover {
    background: rgba(55,42,30,0.62);
  }
`}</style><section className="brand-intro"><div className="branding-hero-scribbles" aria-hidden="true">
  <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
    <path d="M-80 250 C180 130 350 340 600 245 S1050 110 1680 270" />
    <path className="soft" d="M-100 285 C190 165 370 370 620 275 S1080 145 1700 300" />
    <path className="soft" d="M-100 315 C180 195 390 395 640 300 S1110 175 1700 325" />

    <path d="M-100 735 C180 625 380 770 620 690 S1100 590 1700 710" />
    <path className="soft" d="M-100 765 C180 655 400 800 650 720 S1120 620 1700 740" />

    <path className="soft" d="M180 -40 C120 150 250 300 190 470 S120 720 230 940" />
    <path className="soft" d="M1420 -40 C1360 150 1490 300 1430 470 S1360 720 1470 940" />

    <circle cx="175" cy="245" r="3" />
    <circle cx="1425" cy="710" r="3" />

    <line x1="145" y1="210" x2="165" y2="210" />
    <line x1="155" y1="200" x2="155" y2="220" />

    <line x1="1435" y1="675" x2="1455" y2="675" />
    <line x1="1445" y1="665" x2="1445" y2="685" />

    <rect x="1320" y="175" width="10" height="10"
      transform="rotate(45 1325 180)"
      className="soft"
    />
  </svg>
</div>

<style>{`
  .branding-hero-scribbles {
    position:absolute;
    inset:0;
    pointer-events:none;
    overflow:hidden;
    z-index:0;
  }

  .branding-hero-scribbles svg {
    width:100%;
    height:100%;
    display:block;
  }

  .branding-hero-scribbles path,
  .branding-hero-scribbles circle,
  .branding-hero-scribbles line,
  .branding-hero-scribbles rect {
    fill:none;
    stroke:rgba(70,52,38,0.10);
    stroke-width:0.8;
  }

  .branding-hero-scribbles .soft {
    stroke:rgba(70,52,38,0.055);
  }
`}</style>
        <div className="intro-number">01 / Branding</div>
        <div
  className="intro-cybersigil"
  aria-hidden="true"
  onMouseMove={(e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    e.currentTarget.style.setProperty("--mx", `${x * 2}deg`);
    e.currentTarget.style.setProperty("--my", `${y * -1.5}deg`);
    e.currentTarget.style.setProperty("--px", `${x * 6}px`);
    e.currentTarget.style.setProperty("--py", `${y * 4}px`);
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.setProperty("--mx", "0deg");
    e.currentTarget.style.setProperty("--my", "0deg");
    e.currentTarget.style.setProperty("--px", "0px");
    e.currentTarget.style.setProperty("--py", "0px");
  }}
>
  <style>{`
@keyframes brandingSigilScroll {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  45% {
    transform: translate3d(-18px, 28px, 0) rotate(-3deg) scale(1.035);
  }
  100% {
    transform: translate3d(22px, 70px, 0) rotate(4deg) scale(1.07);
  }
}
`}
</style>
</div>

        <div className="intro-content">
          <div className="eyebrow">Selected Identity Work</div>

          <h1 className="brand-title">
            BRANDING
          </h1>

          <p className="intro-copy">
            A collection of identity projects across different industries,
            exploring visual language, typography, colour and form to create
            distinctive, memorable and meaningful brand experiences.
          </p>
        </div>
      </section>

      {/* LIJJAT PAPAD */}
      <section className="project-section">
        <div className="project-grid">
          <div className="project-info">
            <div className="project-index">01 — Identity / FMCG</div>

            <h2 className="project-name">
              Lijjat
              <br />
              Papad
            </h2>

            <div className="project-meta">2025 · Food</div>

            <p className="project-description">
              Lijjat Papad is a remarkable story of seven Mumbai women who started a small business in 1959 and grew it into a household name as small venture grew into a nation wide brand, empowring thousands of women through self-reliance, quality and equal opportunity.
            </p>

            <div className="project-line" />

            <p className="project-description">
              The visual identity draws inspiration from the papad itself, its round form warm earthy hues, and everyday familiarity. The identity integrates the Devnagari letterform with a bindi.
            </p>
          </div>

          <div className="project-image">
            <img
              src="/LIJJAT PAPAD.png"
              alt="Lijjat Papad branding project"
            />
            <div className="image-label">
              <span>Visual Identity</span>
              <span>01</span>
            </div>
          </div>
        </div>

        <div className="construction" />
      </section>

      {/* PEACH */}
      <section className="project-section reverse">
        <div className="project-grid">
          <div className="project-info">
            <div className="project-index">02 — Identity / Beauty</div>

            <h2 className="project-name">
              Peach
            </h2>

            <div className="project-meta">2026 · Kids Makeup</div>

            <p className="project-description">
              Our brand is a celebration of little stars, soft glam, and big imagination. 
            </p>

            <div className="project-line" />

            <p className="project-description">
              Created for kids, it blends playfulness with gentle elegance, making every moment feel special. 
            </p>
          </div>

          <div className="project-image">
            <img
              src="/PEACH.png"
              alt="Peach branding project"
            />
            <div className="image-label">
              <span>Visual Identity</span>
              <span>02</span>
            </div>
          </div>
        </div>

        <div className="construction" />
      </section>

      {/* SAYA */}
      <section className="project-section">
        <div className="project-grid">
          <div className="project-info">
            <div className="project-index">03 — Identity / Fashion</div>

            <h2 className="project-name">
              SĀYA
            </h2>

            <div className="project-meta">2024 · Fashion & Lifestyle</div>

            <p className="project-description">
              A contemporary fashion identity inspired by the quiet power of
              shadows. The system explores soft femininity, self-expression
              and beauty through elegant typography and restrained earthy
              tones.
            </p>

            <div className="project-line" />

            <p className="project-description">
              Delicate graphic elements inspired by movement, nature, light
              and shadow create a brand world that feels intimate,
              sophisticated and timeless.
            </p>
          </div>

          <div className="project-image">
            <img
              src="/SAYA.jpeg"
              alt="SAYA branding project"
            />
            <div className="image-label">
              <span>Visual Identity</span>
              <span>03</span>
            </div>
          </div>
        </div>

        <div className="construction" />
      </section>

      {/* LOGOFOLIO */}
      <section className="logofolio">
        <div className="logofolio-header">
          <div>
            <div className="eyebrow">A collection of marks</div>

            <h2 className="logo-title">
              LOGOFOLIO
            </h2>
          </div>

          <p className="logo-copy">
            A logofolio is a curated collection of a designer's best logo and branding work, presented togather in a visually appealing way. it showcases different logo concepts, styles, and applications.
          </p>
        </div>

        <div className="logo-image-wrap">
          <img
            src="/logo folio.png"
            alt="Logo folio"
          />

          <div className="logo-caption">
            <span>Selected Marks</span>
            <span>Logo / Symbol / Wordmark</span>
          </div>
        </div>
      </section>
    </main>
  );
}


