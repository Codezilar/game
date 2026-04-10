import Link from "next/link";
import type { ReactNode } from "react";
import { navItems, runes } from "../site-data";

type FeatureCard = {
  eyebrow: string;
  title: string;
  copy: string;
};

type FrozeverseShellProps = {
  activePath?: string;
  title: ReactNode;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  sideNote?: string;
  sceneVariant?: string;
  sectionLabel?: string;
  cards?: FeatureCard[];
  bottomLabel?: string;
};

export function FrozeverseShell({
  activePath = "/",
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  sideNote,
  sceneVariant,
  sectionLabel = "Origin Realm",
  cards = [],
  bottomLabel = "Open World Signal",
}: FrozeverseShellProps) {
  return (
    <main className="page-shell">
      <div className="starfield" />
      <section className="frame">
        <div className="frame-glow" />
        <header className="topbar">
          <Link className="brand" href="/">
            <span className="brand-star">✦</span>
            <span>
              Froze
              <br />
              Verse
            </span>
          </Link>

          <div className="topbar-center">
            <button className="lang-pill">EN</button>
            <nav>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={item.href === activePath ? "is-active" : undefined}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <button className="sign-in">Sign In</button>
        </header>

        <div className="hero">
          <div className="hero-copy">
            <div className="accent-line" />
            <span className="section-label">{sectionLabel}</span>
            <h1>{title}</h1>

            <div className="cta-row">
              <Link className="primary-cta" href={ctaHref}>
                {ctaLabel}
              </Link>
              <p>{description}</p>
            </div>

            <div className="scroll-badge">
              <span>Scroll</span>
              <span>To Explore</span>
            </div>

            {cards.length > 0 ? (
              <div className="feature-grid">
                {cards.map((card) => (
                  <article key={card.title} className="feature-card">
                    <span>{card.eyebrow}</span>
                    <h2>{card.title}</h2>
                    <p>{card.copy}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          <div className={`scene ${sceneVariant ?? ""}`.trim()} aria-hidden="true">
            <div className="scene-vignette" />
            <div className="mist mist-left" />
            <div className="mist mist-right" />
            <div className="portal-ring portal-ring-one" />
            <div className="portal-ring portal-ring-two" />
            <div className="crystal-beam" />
            <div className="crystal-core">
              <div className="crystal-inner" />
            </div>
            <div className="particles" />
            <div className="monolith monolith-left" />
            <div className="monolith monolith-center" />
            <div className="monolith monolith-right" />
            <div className="floating-rock rock-left" />
            <div className="floating-rock rock-right" />
            <div className="ground" />
            <div className="robot-hand">
              {runes.map((rune) => (
                <span key={rune}>{rune}</span>
              ))}
            </div>
          </div>
        </div>

        <footer className="badges">
          <div className="store-badge">
            <span className="store-mini">{bottomLabel}</span>
            <span className="store-name">App Store</span>
          </div>
          <div className="store-badge">
            <span className="store-mini">{sideNote ?? "Cross-chain access"}</span>
            <span className="store-name">Google Play</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
