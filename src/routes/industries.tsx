import { createFileRoute, Link } from "@tanstack/react-router";
import services from "@/assets/services.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | The Quartz Agency" },
      { name: "description", content: "The Quartz Agency provides specialist recruitment solutions across finance, technology, engineering, healthcare, construction and more." },
      { property: "og:title", content: "Industries We Serve — The Quartz Agency" },
      { property: "og:description", content: "Specialist recruitment across key business sectors." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: "fa-building-columns", title: "Financial Services", text: "Banking, investment, accounting and financial leadership roles." },
  { icon: "fa-shield-halved", title: "Insurance", text: "Specialist professionals for insurance and risk environments." },
  { icon: "fa-gears", title: "Engineering", text: "Technical experts and engineering professionals." },
  { icon: "fa-hard-hat", title: "Construction", text: "Connecting businesses with skilled construction talent." },
  { icon: "fa-industry", title: "Manufacturing", text: "Operational and leadership recruitment solutions." },
  { icon: "fa-truck-fast", title: "Logistics", text: "Supply chain, transport and operational specialists." },
  { icon: "fa-laptop-code", title: "Information Technology", text: "Digital specialists, developers, analysts and technology leaders." },
  { icon: "fa-heart-pulse", title: "Healthcare", text: "Healthcare professionals and specialists supporting critical services." },
  { icon: "fa-cart-shopping", title: "Retail & FMCG", text: "Commercial, operational and leadership recruitment solutions." },
  { icon: "fa-scale-balanced", title: "Legal", text: "Connecting firms with experienced legal professionals." },
  { icon: "fa-users-gear", title: "Human Resources", text: "HR specialists and people-focused professionals." },
  { icon: "fa-bullhorn", title: "Sales & Marketing", text: "Commercial talent that drives growth and brand success." },
];

function IndustriesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <PageHero
        eyebrow="INDUSTRIES WE SERVE"
        title="Specialist Recruitment Across Key Business Sectors."
        intro="Connecting organisations with professionals who understand their industry's unique challenges and opportunities."
      />

      <section className="industry-intro">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">OUR INDUSTRY EXPERTISE</span>
            <h2>Deep Knowledge.<br />Exceptional Talent.<br />Meaningful Results.</h2>
            <p className="section-description">
              Our consultants understand the skills, experience and leadership
              qualities required across specialised industries.
            </p>
          </div>
        </div>
      </section>

      <section className="industry-list">
        <div className="container">
          <div className="industry-card-grid">
            {industries.map((i) => (
              <div className="industry-card-large" key={i.title}>
                <i className={`fa-solid ${i.icon}`} />
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-advantage">
        <div className="container">
          <div className="advantage-grid">
            <div className="advantage-content">
              <span className="section-subtitle">OUR APPROACH</span>
              <h2>Industry Knowledge Creates Better Recruitment Outcomes.</h2>
              <p>Successful recruitment requires more than finding available candidates. It requires understanding markets, skills, business challenges and organisational culture.</p>
              <p>Our consultants build strong networks within specialist industries, allowing us to identify professionals who bring genuine value to our clients.</p>
              <Link to="/contact" className="btn-primary">Partner With Us</Link>
            </div>
            <div className="advantage-image">
              <img src={services} alt="Industry Expertise" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper cta-single">
            <div className="cta-content">
              <span className="section-subtitle">FIND THE RIGHT PEOPLE</span>
              <h2>Exceptional Talent For Every Industry.</h2>
              <p>Speak with The Quartz Agency about your recruitment requirements and discover a smarter approach to talent.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
