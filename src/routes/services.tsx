import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | The Quartz Agency Executive Recruitment" },
      { name: "description", content: "Explore premium executive search, recruitment and staffing solutions from The Quartz Agency." },
      { property: "og:title", content: "Recruitment Services — The Quartz Agency" },
      { property: "og:description", content: "Executive search, permanent recruitment, contract staffing and remote talent." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const cards = [
  { icon: "fa-user-tie", title: "Executive Search", text: "Identifying and securing exceptional leaders and specialists who create measurable impact within organisations." },
  { icon: "fa-briefcase", title: "Permanent Recruitment", text: "Connecting businesses with professionals who align with their culture, goals and long-term vision." },
  { icon: "fa-users", title: "Contract Staffing", text: "Flexible workforce solutions providing skilled professionals for projects, growth periods and operational needs." },
  { icon: "fa-laptop", title: "Remote Talent Solutions", text: "Access skilled professionals who deliver outstanding results through modern remote working solutions." },
];

const timeline = [
  { n: "01", title: "Consultation", text: "We understand your business objectives, culture and specific recruitment requirements." },
  { n: "02", title: "Talent Identification", text: "We search, assess and engage professionals through our recruitment networks and market expertise." },
  { n: "03", title: "Candidate Assessment", text: "Candidates are carefully evaluated to ensure technical ability, experience and cultural alignment." },
  { n: "04", title: "Placement Success", text: "We support both clients and candidates throughout the process to ensure long-term success." },
];

const whyItems = [
  { icon: "fa-gem", title: "Premium Service", text: "A personalised approach designed around every client's unique requirements." },
  { icon: "fa-magnifying-glass", title: "Market Expertise", text: "Access to experienced professionals across multiple industries and disciplines." },
  { icon: "fa-handshake", title: "Trusted Partnerships", text: "Long-term relationships built on integrity, confidentiality and results." },
];

function ServicesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <PageHero
        eyebrow="OUR SERVICES"
        title="Recruitment Solutions Designed Around Success"
        intro="Connecting organisations with exceptional professionals through strategic talent acquisition."
      />

      <section className="intro">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">OUR EXPERTISE</span>
            <h2>Premium Recruitment Solutions For Modern Organisations</h2>
            <p className="section-description">
              Our tailored approach combines market insight, industry expertise and a
              deep understanding of people to deliver exceptional hiring outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="container">
          <div className="service-cards">
            {cards.map((c) => (
              <div className="service-card" key={c.title}>
                <i className={`fa-solid ${c.icon}`} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <Link to="/contact">Learn More <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story feature-block">
        <div className="container">
          <div className="feature-content">
            <span className="section-subtitle">EXECUTIVE SEARCH</span>
            <h2>Finding Leaders Who Shape The Future</h2>
            <p>Our executive search process identifies high-performing professionals who possess the experience, leadership ability and values required to drive organisational success.</p>
            <p>Through targeted research, confidential engagement and strategic assessment, we connect businesses with exceptional leadership talent.</p>
            <Link to="/contact" className="btn-primary">Discuss Your Recruitment Needs</Link>
          </div>
        </div>
      </section>

      <section className="process light">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">OUR APPROACH</span>
            <h2>A Strategic Recruitment Process Built Around Results</h2>
            <p className="section-description">Every search is carefully managed through a structured process designed to deliver the right talent efficiently and professionally.</p>
          </div>
          <div className="process-timeline four">
            {timeline.map((p) => (
              <article className="process-step" key={p.n}>
                <div className="step-number">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-quartz">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">WHY PARTNER WITH US</span>
            <h2>More Than Recruitment. A Strategic Talent Partnership</h2>
            <p className="section-description">We combine professional expertise, market knowledge and personal relationships to deliver recruitment solutions that create lasting value.</p>
          </div>
          <div className="why-grid">
            {whyItems.map((w) => (
              <div className="why-item" key={w.title}>
                <i className={`fa-solid ${w.icon}`} />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper cta-single">
            <div className="cta-content">
              <span className="section-subtitle">START YOUR SEARCH</span>
              <h2>Ready To Find Exceptional Talent?</h2>
              <p>Partner with The Quartz Agency and experience a recruitment process built around excellence.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/industries" className="btn-secondary">Explore Industries</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
