import React from "react";
import Nav from "../Nav";
export default function Packaging() {
  const items = [
    {
      name: "CREAMY GOODNESS",
      description: "RICH. SMOOTH. NATURAL.",
      label: "/Creamy_Label.png",
      mockup: "/Creamy_mockup.png",
    },
    {
      name: "EXTRA CRUNCHY",
      description: "BOLD TEXTURE. BIGGER BITES.",
      label: "/Extra_label.png",
      mockup: "/Extra_Mockup.png",
    },
    {
      name: "HONEY FLAVORED",
      description: "SWEETENING A BRIGHTER TOMORROW.",
      label: "/honey_label.png",
      mockup: "/honey_mockup.png",
    },
  ];

  return (
    <main className="packaging-page">
      <Nav />
            

<style>{`
        html {
          scrollbar-width: thin;
          scrollbar-color: rgba(82, 67, 54, .48) transparent;
        }

        html::-webkit-scrollbar {
          width: 7px;
        }

        html::-webkit-scrollbar-track {
          background: transparent;
        }

        html::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(112, 91, 72, .42),
            rgba(65, 52, 41, .62)
          );
          border: 2px solid transparent;
          background-clip: padding-box;
          border-radius: 999px;
          min-height: 80px;
        }

        html::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(112, 91, 72, .62),
            rgba(65, 52, 41, .82)
          );
          border: 1px solid transparent;
          background-clip: padding-box;
        }
        .packaging-page {
          --paper: #f2ece1;
          --ink: #30251d;
          --muted: #766b61;
          --line: rgba(61, 49, 39, 0.22);

          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 15% 12%, rgba(255,255,255,.58), transparent 24%),
            radial-gradient(circle at 82% 38%, rgba(220,204,181,.18), transparent 30%),
            radial-gradient(circle at 45% 82%, rgba(255,255,255,.38), transparent 28%),
            var(--paper);
          color: var(--ink);
          font-family: Inter, system-ui, sans-serif;
        }

        .packaging-page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .20;
          z-index: 20;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(70,55,42,.035) 0px,
              rgba(70,55,42,.035) 1px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(70,55,42,.025) 0px,
              rgba(70,55,42,.025) 1px,
              transparent 1px,
              transparent 5px
            );
          mix-blend-mode: multiply;
        }

        .packaging-page::after {
          content: "";
          position: absolute;
          width: 720px;
          height: 720px;
          border: 1px solid rgba(72,59,47,.11);
          border-radius: 50%;
          left: -430px;
          top: 280px;
          pointer-events: none;
        }

        .packaging-hero {
          min-height: 600px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 112px 58px 76px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-top-mark {
          position: absolute;
          top: 92px;
          right: 56px;
          font-size: 10px;
          letter-spacing: .32em;
          text-transform: uppercase;
          color: var(--muted);
        }.hero-copy {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .packaging-eyebrow {
          font-size: 10px;
          letter-spacing: .42em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
        }

        .packaging-title {
          margin: 0;
          font-family: "Canela", "Instrument Serif", Georgia, serif;
          font-size: clamp(72px, 11vw, 158px);
          font-weight: 400;
          line-height: .86;
          letter-spacing: -.045em;
        }

        .hero-rule {
          width: 250px;
          height: 1px;
          margin: 34px auto 21px;
          background: var(--line);
          position: relative;
        }

        .hero-rule::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border: 1px solid var(--ink);
          transform: rotate(45deg);
          left: calc(50% - 4px);
          top: -3px;
          background: var(--paper);
        }

        .packaging-subtitle {
          margin: 0;
          font-size: 11px;
          letter-spacing: .38em;
          text-transform: uppercase;
          color: var(--muted);
        }.hero-arc {
          position: absolute;
          width: 620px;
          height: 260px;
          border: 1px solid rgba(76,64,52,.15);
          border-left: 0;
          border-bottom: 0;
          border-radius: 0 100% 0 0;
          right: -120px;
          top: 185px;
          transform: rotate(-12deg);
        }

        .hero-arc-two {
          position: absolute;
          width: 480px;
          height: 220px;
          border: 1px solid rgba(76,64,52,.12);
          border-right: 0;
          border-bottom: 0;
          border-radius: 100% 0 0 0;
          left: -180px;
          bottom: 20px;
          transform: rotate(10deg);
        }

        .work-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px 150px;
          position: relative;
        }

        .section-heading {
          margin-top: 90px;
          margin-top: 90px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 0 4px 20px;
          margin-bottom: 8px;
          border-bottom: 1px solid var(--line);
        }

        .section-number {
          font-size: 11px;
          letter-spacing: .30em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .section-caption {
          font-size: 10px;
          letter-spacing: .24em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .packaging-item {
          min-height: 100vh;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.45fr);
          gap: 68px;
          align-items: center;
          padding: 74px 0 88px;
          border-bottom: 1px solid var(--line);
          position: relative;
        }

        .packaging-item.reverse {
          grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr);
        }

        .packaging-item.reverse .mockup-area {
          order: 2;
        }

        .packaging-item.reverse .label-area {
          order: 1;
        }

        .mockup-area {
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .mockup-area::before {
          content: "";
          position: absolute;
          width: 310px;
          height: 310px;
          border: 1px solid rgba(76,64,52,.10);
          border-radius: 50%;
          z-index: 0;
        }

        .mockup-image {
          position: relative;
          z-index: 1;
          width: min(100%, 470px);
          height: auto;
          display: block;
          mix-blend-mode: multiply;
          filter: contrast(1.01);
        }

        .label-area {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .item-index {
          font-size: 10px;
          letter-spacing: .30em;
          color: var(--muted);
          margin-bottom: 17px;
        }

        .item-name {
          margin: 0 0 14px;
          font-family: "Canela", "Instrument Serif", Georgia, serif;
          font-weight: 400;
          font-size: clamp(32px, 4vw, 56px);
          line-height: .95;
          letter-spacing: -.025em;
        }

        .item-description {
          margin: 0 0 30px;
          max-width: 250px;
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .label-image,
        .mockup-image {
          transition:
            transform 0.45s cubic-bezier(.2,.75,.25,1),
            filter 0.45s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .label-image:hover {
          transform: perspective(1100px) rotateX(2deg) rotateY(-3deg) translateY(-8px) scale(1.015);
          filter:
            drop-shadow(0 18px 22px rgba(48,37,29,.13))
            drop-shadow(0 4px 7px rgba(48,37,29,.08));
        }

        .mockup-image:hover {
          transform: perspective(1100px) rotateX(2deg) rotateY(4deg) translateY(-10px) scale(1.025);
          filter:
            drop-shadow(0 24px 28px rgba(48,37,29,.16))
            drop-shadow(0 5px 8px rgba(48,37,29,.09));
        }
        .label-image {
          width: 100%;
          max-width: 780px;
          height: auto;
          display: block;
          mix-blend-mode: multiply;
        }

        .item-note {
          position: absolute;
          right: 0;
          bottom: 30px;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 14px;
          color: rgba(82,70,59,.45);
          transform: rotate(-5deg);
        }

        .mockup-caption {
          position: absolute;
          bottom: -36px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-family: "Canela", Georgia, serif;
          font-size: 19px;
          letter-spacing: .05em;
        }

        .final-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 25px 48px 120px;
          text-align: center;
          position: relative;
        }

        .final-rule {
          width: 300px;
          height: 1px;
          margin: 0 auto 28px;
          background: var(--line);
          position: relative;
        }

        .final-rule::before,
        .final-rule::after {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          border: 1px solid var(--ink);
          transform: rotate(45deg);
          top: -3px;
        }

        .final-rule::before {
          left: 0;
        }

        .final-rule::after {
          right: 0;
        }

        .final-text {
          margin: 0;
          font-size: 10px;
          letter-spacing: .42em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 900px) {
          .packaging-hero {
            padding: 110px 28px 70px;
            min-height: 520px;
          }.hero-top-mark {
            right: 28px;
          }

          .hero-script,
          .hero-arc,
          .hero-arc-two {
            display: none;
          }

          .work-section,
          .final-section {
            padding-left: 24px;
            padding-right: 24px;
          }

          .packaging-item,
          .packaging-item.reverse {
            grid-template-columns: 1fr;
            gap: 55px;
            padding: 70px 0 100px;
          }

          .packaging-item.reverse .mockup-area,
          .packaging-item.reverse .label-area {
            order: initial;
          }

          .label-area {
            text-align: center;
            align-items: center;
          }

          .item-description {
            max-width: 300px;
          }

          .item-note {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .packaging-title {
            font-size: 19vw;
          }

          .packaging-eyebrow {
            letter-spacing: .28em;
          }

          .packaging-subtitle {
            letter-spacing: .20em;
            font-size: 9px;
          }.section-heading {
          margin-top: 90px;
            align-items: flex-start;
            flex-direction: column;
            gap: 9px;
          }

          .packaging-item {
            min-height: auto;
          }

          .mockup-area::before {
            width: 230px;
            height: 230px;
          }

          .mockup-image {
            width: 82%;
          }
        }
      `}</style>

      <header className="packaging-hero">
        <div className="hero-top-mark">02 / PACKAGING</div>

        <div className="hero-arc" />
        <div className="hero-arc-two" />

        <div className="hero-copy">
          <div className="packaging-eyebrow">
            Selected Packaging Work
          </div>

          <h1 className="packaging-title">PACKAGING</h1>

          <div className="hero-rule" />

          <p className="packaging-subtitle">
            Same Essence, A New Form
          </p>
        </div>
      </header>

      <section className="work-section">
        <div className="section-heading">
          <span className="section-number">01. Packaging Studies</span>
          <span className="section-caption">Form / Material / Story</span>
        </div>

        {items.map(function (item, index) {
          const reverse = index % 2 === 1;

          return (
            <article
              className={"packaging-item" + (reverse ? " reverse" : "")}
              key={item.name}
            >
              <div className="mockup-area">
                <img
                  src={item.mockup}
                  alt={item.name + " packaging mockup"}
                  className="mockup-image"
                />
                <div className="mockup-caption">{item.name}</div>
              </div>

              <div className="label-area">
                <div className="item-index">
                  0{index + 1} / {item.name}
                </div>

                <h2 className="item-name">{item.name}</h2>

                <p className="item-description">
                  {item.description}
                </p>

                <img
                  src={item.label}
                  alt={item.name + " label design"}
                  className="label-image"
                />

                <div className="item-note">
                  Details<br />
                  That Matter
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="final-section">
        <div className="final-rule" />
        <p className="final-text">More Than Packaging</p>
      </footer>
    </main>
  );
}












