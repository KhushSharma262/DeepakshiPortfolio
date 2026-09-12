import React from "react";
import Nav from "../Nav";

export default function Publication() {
  return (
    <main className="publication-page">
      <Nav />

      <style>{`
        .publication-page {
          --paper: #eee8dc;
          --paper-light: #f5f0e7;
          --ink: #241d19;
          --muted: #766b62;
          --line: rgba(45, 35, 29, .16);
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.5), transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(125,100,75,.06), transparent 35%),
            var(--paper);
          color: var(--ink);
          font-family: Inter, system-ui, sans-serif;
          overflow-x: hidden;
        }

        .publication-page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .16;
          z-index: 20;
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        .publication-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 110px;
        }

        .publication-hero::before {
          content: "";
          position: absolute;
          width: 72vw;
          height: 72vw;
          max-width: 900px;
          max-height: 900px;
          border: 1px solid rgba(67,54,45,.1);
          border-radius: 50%;
          left: -38%;
          bottom: -48%;
        }

        .publication-hero::after {
          content: "";
          position: absolute;
          width: 48vw;
          height: 48vw;
          max-width: 650px;
          max-height: 650px;
          border: 1px solid rgba(67,54,45,.08);
          border-radius: 50%;
          right: -22%;
          top: -20%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
        }

        .hero-eyebrow {
          font-size: 11px;
          letter-spacing: .32em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 22px;
        }

        .hero-title {
          margin: 0;
          font-family: "Canela", "Instrument Serif", Georgia, serif;
          font-size: clamp(70px, 13vw, 170px);
          font-weight: 400;
          line-height: .86;
          letter-spacing: -.025em;
        }

        .hero-rule {
          width: 180px;
          height: 1px;
          background: var(--line);
          margin: 42px auto 28px;
          position: relative;
        }

        .hero-rule::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border: 1px solid var(--muted);
          transform: rotate(45deg);
          left: calc(50% - 4px);
          top: -3px;
          background: var(--paper);
        }

        .hero-description {
          max-width: 590px;
          margin: 0 auto;
          font-family: "Canela", "Instrument Serif", Georgia, serif;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.55;
          color: #50463e;
        }

        .section {
          position: relative;
          padding: 120px 5vw 150px;
        }

        .section-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1380px;
          margin: 0 auto 52px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--line);
          font-size: 11px;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .section-title {
          max-width: 1380px;
          margin: 0 auto 70px;
          font-family: "Canela", "Instrument Serif", Georgia, serif;
          font-size: clamp(42px, 7vw, 92px);
          font-weight: 400;
          line-height: .95;
          letter-spacing: -.015em;
        }

        .art-stage {
          max-width: 1250px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .jacket-image {
          margin-top: 90px;
          width: min(100%, 1300px);
          height: auto;
          display: block;
          transition: transform .6s cubic-bezier(.2,.75,.25,1), filter .6s ease;
          filter: drop-shadow(0 25px 35px rgba(38,28,22,.13));
        }

        .jacket-image:hover {
          transform: translateY(-8px) scale(1.008);
          filter: drop-shadow(0 35px 45px rgba(38,28,22,.18));
        }

        .book-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; align-items: center; gap: 70px; min-height: 100vh; }

        .book-cover-image { width: min(100%, 620px); max-height: 82vh; object-fit: contain; display: block; margin: 0 auto; }

        .book-cover-image:hover {
          transform: translateY(-8px) rotate(-.4deg);
        }

        .mockup-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .book-mockup { width: min(100%, 850px); max-height: 88vh; object-fit: contain; display: block; margin: 0 auto; }

        .book-mockup:hover {
          transform: perspective(1200px) rotateY(-3deg) rotateX(2deg) translateY(-10px) scale(1.015);
        }

        .magazine-section {
          background:
            linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),
            var(--paper-light);
          border-top: 1px solid var(--line);
        }

        .magazine-cover-stage { min-height: 18vh; display: flex; align-items: center; justify-content: center; padding: 0 8vw; }

        .magazine-cover { width: min(100%, 520px); max-height: 78vh; object-fit: contain; display: block; }

        .magazine-cover:hover {
          transform: translateY(-10px) scale(1.012);
        }

        .subheading {
          max-width: 1380px;
          margin: 0 auto 48px;
          font-size: 12px;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .spread-list {
          max-width: 1450px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 110px;
        }

        .spread-frame { min-height: 100vh; display: flex; align-items: center; justify-content: center; }

        .spread-image { width: min(92vw, 1400px); max-height: 78vh; object-fit: contain; display: block; margin: 0 auto; }

        .spread-image:hover {
          transform: translateY(-8px) scale(1.006);
        }

        .flipbook-section {
          padding-bottom: 180px;
          background: var(--paper);
        }

        .flipbook-intro {
          max-width: 1380px;
          margin: 0 auto 45px;
        }

        .flipbook-title {
          font-family: "Canela", "Instrument Serif", Georgia, serif;
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 400;
          margin: 0 0 16px;
        }

        .flipbook-description {
          max-width: 600px;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .flipbook-frame {
          max-width: 1250px;
          height: min(78vh, 850px);
          min-height: 520px;
          margin: 0 auto;
          border: 1px solid var(--line);
          background: #171311;
          box-shadow: 0 30px 70px rgba(31,23,18,.14);
          overflow: hidden;
        }

        .flipbook-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        html {
          scrollbar-width: thin;
          scrollbar-color: rgba(82,67,54,.48) transparent;
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
            rgba(112,91,72,.42),
            rgba(65,52,41,.62)
          );
          border-radius: 999px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        html::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(112,91,72,.62),
            rgba(65,52,41,.82)
          );
          border: 1px solid transparent;
          background-clip: padding-box;
        }

        @media (max-width: 800px) {
          .publication-hero {
            min-height: 92vh;
          }

          .section {
            padding: 90px 22px 110px;
          }

          .section-label {
            margin-bottom: 38px;
          }

          .section-title {
            margin-bottom: 48px;
          }

          .book-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; align-items: center; gap: 70px; min-height: 100vh; }

          .magazine-cover-stage { min-height: 18vh; display: flex; align-items: center; justify-content: center; padding: 0 8vw; }

          .spread-list {
            gap: 65px;
          }

          .flipbook-frame {
            min-height: 450px;
            height: 65vh;
          }
        }
      `}</style>

      <section className="publication-hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Selected Editorial &amp; Book Work</div>
          <h1 className="hero-title">PUBLICATION</h1>

          <div className="hero-rule" />

          <p className="hero-description">
            A publication is a designed medium that combines text, images, typography, and layout to communicate information, ideas, or stories in a engaging way.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-label">
          <span>01. Book Design</span>
          <span>Jacket / Image / Narrative</span>
        </div>

        <h2 className="section-title">JACKET COVER PAGE</h2>

        <div className="art-stage">
          <img
            className="jacket-image"
            src="/publication/GANDHARI JACKET BOOK COVER'.jpg"
            alt="Gandhari jacket book cover design"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-label">
          <span>02. Book Design</span>
          <span>Cover / Object / Form</span>
        </div>

        <h2 className="section-title">BOOK COVER PAGE</h2>

        <div className="book-layout">
          <div>
            <img
              className="book-cover-image"
              src="/publication/BOOK COVER PAGE.PNG"
              alt="Gandhari book cover page design"
            />
          </div>

          <div className="mockup-wrap">
            <img
              className="book-mockup"
              src="/publication/BOOK  MOCKUP.png"
              alt="Gandhari book mockup"
            />
          </div>
        </div>
      </section>

      <section className="section magazine-section">
        <div className="section-label">
          <span>03. Editorial</span>
          <span>Magazine / Culture / Story</span>
        </div>

        <h2 className="section-title">MAGAZINE DESIGN</h2>

        <div className="subheading">MAGAZINE COVER PAGE</div>

        <div className="magazine-cover-stage">
          <img
            className="magazine-cover"
            src="/publication/MAGAZINE COVER PAGE.png"
            alt="Paroksha magazine cover design"
          />
        </div>

        <div className="subheading">EDITORIAL SPREADS</div>

        <div className="spread-list">
          <div className="spread-frame">
            <img
              className="spread-image"
              src="/publication/EDITORIAL SPREAD 1.png"
              alt="Editorial spread one"
            />
          </div>

          <div className="spread-frame">
            <img
              className="spread-image"
              src="/publication/EDITORIAL SPREAD 2.png"
              alt="Editorial spread two"
            />
          </div>

          <div className="spread-frame">
            <img
              className="spread-image"
              src="/publication/EDITORIAL SPREAD 3.png"
              alt="Editorial spread three"
            />
          </div>
        </div>
      </section>

      <section className="section flipbook-section">
        <div className="section-label">
          <span>04. Full Publication</span>
          <span>Interactive Edition</span>
        </div>

        <div className="flipbook-intro">
          <h2 className="flipbook-title">FLIPBOOK</h2>
          <p className="flipbook-description">
            Explore the interactive flipbook version of the magazine.
          </p>
        </div>

        <div className="flipbook-frame">
          <iframe
            src="https://heyzine.com/flip-book/32ca8ebb9a.html"
            title="Paroksha interactive flipbook"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}













