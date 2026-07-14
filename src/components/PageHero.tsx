import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </div>
    </section>
  );
}
