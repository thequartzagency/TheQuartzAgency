import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "Employers | The Quartz Agency Recruitment Solutions" },
      { name: "description", content: "Partner with The Quartz Agency to find exceptional professionals through executive search, recruitment and staffing solutions." },
      { property: "og:title", content: "For Employers — The Quartz Agency" },
      { property: "og:description", content: "Building teams that drive business success." },
      { property: "og:url", content: "/employers" },
    ],
    links: [{ rel: "canonical", href: "/employers" }],
  }),
  component: EmployersPage,
});

const challenges = [
  { icon: "fa-clock", title: "Time Constraints", text: "Reduce lengthy hiring processes through targeted candidate sourcing." },
  { icon: "fa-user-slash", title: "Talent Shortages", text: "Access specialised professionals through our network and search strategies." },
  { icon: "fa-chart-line", title: "Growth Requirements", text: "Build teams that support expansion and business goals." },
];

const solutions = [
  { icon: "fa-user-tie", title: "Executive Search", text: "Identify experienced leaders and specialists who align with your strategic objectives." },
  { icon: "fa-briefcase", title: "Permanent Recruitment", text: "Secure professionals who bring the skills and culture fit required for long-term success." },
  { icon: "fa-users", title: "Contract Staffing", text: "Flexible workforce solutions designed around your operational requirements." },
];

const steps = [
  { n: "01", title: "Consultation", text: "Understanding your business, culture and specific hiring requirements." },
  { n: "02", title: "Talent Search", text: "Using targeted sourcing methods to identify high-quality candidates." },
  { n: "03", title: "Candidate Selection", text: "Presenting professionals who match your technical and cultural needs." },
  { n: "04", title: "Successful Placement", text: "Supporting your organisation throughout the hiring journey." },
];

const bullets = [
  "Confidential executive search",
  "Specialist industry knowledge",
  "Quality-focused candidate selection",
  "Long-term partnership approach",
];

function EmployersPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <PageHero
        eyebrow="FOR EMPLOYERS"
        title="Building Teams That Drive Business Success."
        intro="We help organisations attract, evaluate and secure exceptional professionals who create long-term value."
      />

      <section className="intro">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">YOUR TALENT PARTNER</span>
            <h2>More Than Recruitment.<br />A Strategic Partnership.</h2>
            <p className="section-description">
              The Quartz Agency works alongside businesses to understand their goals,
              culture and challenges before identifying the professionals who can help
              them succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="challenges">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">WE HELP SOLVE</span>
            <h2>Recruitment Challenges That Businesses Face.</h2>
          </div>
          <div className="challenge-grid">
            {challenges.map((c) => (
              <div className="challenge-card" key={c.title}>
                <i className={`fa-solid ${c.icon}`} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="employer-solutions">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">OUR SOLUTIONS</span>
            <h2>Recruitment Services Built For Employers.</h2>
          </div>
          <div className="solution-grid">
            {solutions.map((s) => (
              <div className="solution-card" key={s.title}>
                <i className={`fa-solid ${s.icon}`} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to="/services">Learn More <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process light">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">HOW WE WORK</span>
            <h2>A Simple Process. Exceptional Results.</h2>
          </div>
          <div className="process-timeline four">
            {steps.map((s) => (
              <article className="process-step" key={s.n}>
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="container">
          <div className="partner-content-single">
            <span className="section-subtitle">WHY QUARTZ</span>
            <h2>A Recruitment Partner You Can Trust.</h2>
            <p>We combine professional expertise, industry insight and personalised service to deliver recruitment outcomes that matter.</p>
            <ul className="check-list">
              {bullets.map((b) => (
                <li key={b}><i className="fa-solid fa-circle-check" />{b}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">Discuss Your Hiring Needs</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper cta-single">
            <div className="cta-content">
              <span className="section-subtitle">BUILD YOUR TEAM</span>
              <h2>Ready To Find Exceptional Talent?</h2>
              <p>Partner with The Quartz Agency and access a recruitment process designed around your business goals.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-primary">Start Hiring</Link>
                <Link to="/services" className="btn-secondary">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
