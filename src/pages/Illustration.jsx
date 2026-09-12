import React from "react";
import Nav from "../Nav";

export default function Illustration() {
  const [lightbox, setLightbox] = React.useState(null);
  const storyboard = [
    ["01.jpeg", "Mom, Whats there for Lunch?"],
    ["02.jpeg", "No, I don't want to eat that. I want to eat something else."],
    ["03.jpeg", "Same Vegies, I want something else."],
    ["04.jpeg", "Then Mom, adds Maggie Masala Magic."],
    ["05.jpeg", "A magical transformation begins."],
    ["06.jpeg", "Same Old Vegies, but now with a magical twist."],
    ["07.jpeg", "Ahh! Again this boaring Lunch."],
    ["08.jpeg", "I don't want to eat this, I also want Burger, Pizza, and Ice Cream."],
    ["09.jpeg", "TaaDaaa! Something magical happens."],
    ["10.jpeg", "Now it becomes a magical dish, with a magical taste."],
    ["11.jpeg", "Mom, I love this magical dish, I want to eat this everyday."],
    ["12.jpeg", "Turns out, Maggie Masala Magic is the secret ingredient that makes the dish magical."],
  ];

  const masculine = [
    "Masculine power.png",
    "masculine power (2).png",
    "Masculine power (1).png"
  ];

  const feminine = [
    "Feminine power.jpeg",
    "Feminine power.png",
    "kali Feminine power.png",
    "Laxmi Feminine power.jpeg"
  ];

  return (
    <main className="illustration-page">
      <Nav />

      <style>{`
        .illustration-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% 18%, rgba(124,93,166,.07), transparent 28%),
            radial-gradient(circle at 88% 72%, rgba(171,143,201,.08), transparent 30%),
            #f3eee5;
          color: #241d19;
          overflow-x: hidden;
        }

        .illustration-hero {
          min-height: 88vh;
          padding: 150px 7vw 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .illustration-hero:after {
          content: "";
          position: absolute;
          width: 34vw;
          height: 34vw;
          border: 1px solid rgba(59,35,82,.13);
          border-radius: 50%;
          right: -12vw;
          top: 16vh;
        }

        .hero-kicker {
          font-size: 11px;
          letter-spacing: .32em;
          text-transform: uppercase;
          color: #725f7e;
          margin-bottom: 28px;
        }

        .hero-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(72px, 12vw, 190px);
          line-height: .82;
          font-weight: 400;
          letter-spacing: -.055em;
          margin: 0;
        }

        .hero-description {
          max-width: 520px;
          margin-top: 45px;
          margin-left: 13vw;
          font-size: 15px;
          line-height: 1.8;
          color: #665b55;
        }

        .project {
          padding: 120px 6vw 150px;
          position: relative;
        }

        .project-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 70px;
          border-bottom: 1px solid rgba(36,29,25,.15);
          padding-bottom: 22px;
        }

        .project-number {
          font-size: 11px;
          letter-spacing: .25em;
          color: #725f7e;
          text-transform: uppercase;
        }

        .project-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 7vw, 100px);
          font-weight: 400;
          letter-spacing: -.04em;
          line-height: .9;
          margin: 12px 0 0;
        }

        .project-note {
          max-width: 300px;
          font-size: 13px;
          line-height: 1.7;
          color: #716761;
        }

        .storyboard-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 72px 28px;
        }

        .story-card {
          min-width: 0;
        }

        .story-image-wrap {
          overflow: hidden;
          background: #e9e2d8;
        }

        .story-image {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(.2,.75,.25,1);
        }

        .story-card:hover .story-image {
          transform: scale(1.025);
        }

        .story-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #887b73;
        }

        .story-caption {
          max-width: 92%;
          margin-top: 9px;
          font-size: 13px;
          line-height: 1.65;
          color: #514741;
        }

        .god-project {
          background: #e9e0d2;
          margin-top: 0;
        }

        .power-section {
          margin-top: 100px;
        }

        .power-heading {
          display: flex;
          align-items: baseline;
          gap: 20px;
          margin-bottom: 35px;
        }

        .power-heading span {
          font-size: 10px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #806d62;
        }

        .power-heading h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          font-weight: 400;
          margin: 0;
          letter-spacing: -.035em;
        }

        .power-grid {
          display: grid;
          gap: 24px;
        }

        .masculine-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .feminine-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .power-image {
          width: 100%;
          height: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(.2,.75,.25,1);
        }

        .power-frame {
          overflow: hidden;
          background: #ddd3c4;
        }

        .power-frame:hover .power-image {
          transform: scale(1.025);
        }

        @media (max-width: 900px) {
          .storyboard-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .masculine-grid,
          .feminine-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hero-description {
            margin-left: 0;
          }
        }

        @media (max-width: 600px) {
          .illustration-hero {
            padding: 130px 6vw 80px;
          }

          .project {
            padding: 80px 5vw 100px;
          }

          .storyboard-grid,
          .masculine-grid,
          .feminine-grid {
            grid-template-columns: 1fr;
          }

          .project-header {
            display: block;
          }

          .project-note {
            margin-top: 20px;
          }
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
          background: rgba(82,67,54,.52);
          border-radius: 999px;
        }
        .story-image, .power-image { cursor: zoom-in; }

        .lightbox { position: fixed; inset: 0; z-index: 100; background: rgba(12,9,14,.94); display: flex; align-items: center; justify-content: center; padding: 5vh 5vw; }

        .lightbox img { max-width: 92vw; max-height: 90vh; object-fit: contain; }

        .lightbox button { position: absolute; top: 24px; right: 30px; border: 0; background: none; color: white; font-size: 42px; line-height: 1; cursor: pointer; }

      `}</style>

      <section className="illustration-hero">
        <div className="hero-kicker">Selected Illustration Work</div>
        <h1 className="hero-title">ILLUSTRATION</h1>
        <p className="hero-description" style={{ textAlign: "left", marginLeft: "0", marginRight: "auto" }}>
          Illustration brings stories, ideas, characters, and visual worlds
          into form through hand-crafted imagery and expressive visual
          storytelling.
        </p>
      </section>

      <section className="project">
        <div className="project-header">
          <div>
            <div className="project-number">01 / Storyboard</div>
            <h2 className="project-title">FMCG STORYBOARD</h2>
          </div>
          <p className="project-note">
            An illustrated storyboard created for an FMCG advertisement,
            developing the narrative frame by frame through character,
            environment, and visual storytelling.
          </p>
        </div>

        <div className="storyboard-grid">
          {storyboard.map(([image, caption], index) => (
            <article className="story-card" key={image}>
              <div className="story-image-wrap">
                <img
                  onClick={() => setLightbox("/illustration/storyboard/" + image)}
                  className="story-image"
                  src={"/illustration/storyboard/" + image}
                  alt={"Storyboard frame " + (index + 1)}
                />
              </div>
              <div className="story-meta">
                <span>Frame {String(index + 1).padStart(2, "0")}</span>
                <span>Storyboard</span>
              </div>
              <p className="story-caption">{caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project god-project">
        <div className="project-header">
          <div>
            <div className="project-number">02 / God Illustration</div>
            <h2 className="project-title">GOD ILLUSTRATION</h2>
          </div>
          <p className="project-note">
            A collection exploring divine strength, presence, identity, and
            symbolism through illustrated interpretations of masculine and
            feminine power.
          </p>
        </div>

        <div className="power-section">
          <div className="power-heading">
            <span>01</span>
            <h3>Masculine Power</h3>
          </div>

          <div className="power-grid masculine-grid">
            {masculine.map((image) => (
              <div className="power-frame" key={image}>
                <img
                  onClick={() => setLightbox("/illustration/god illustration/" + image)}
                  className="power-image"
                  src={"/illustration/god illustration/" + image}
                  alt="Masculine power illustration"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="power-section">
          <div className="power-heading">
            <span>02</span>
            <h3>Feminine Power</h3>
          </div>

          <div className="power-grid feminine-grid">
            {feminine.map((image) => (
              <div className="power-frame" key={image}>
                <img
                  onClick={() => setLightbox("/illustration/god illustration/" + image)}
                  className="power-image"
                  src={"/illustration/god illustration/" + image}
                  alt="Feminine power illustration"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Full screen illustration" onClick={(e) => e.stopPropagation()} />
          <button type="button" onClick={() => setLightbox(null)}>×</button>
        </div>
      )}
    </main>
  );
}





