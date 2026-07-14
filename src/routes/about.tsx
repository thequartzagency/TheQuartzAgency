import { createFileRoute, Link } from "@tanstack/react-router";
import office from "@/assets/office.jpg";
import founder from "@/assets/founder.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Quartz Agency | Executive Recruitment Specialists" },
      { name: "description", content: "Discover The Quartz Agency's approach to executive recruitment, leadership search and professional staffing solutions across South Africa." },
      { property: "og:title", content: "About The Quartz Agency" },
      { property: "og:description", content: "A premium South African recruitment partner." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const whyItems = [
  { icon: "fa-user-tie", title: "Executive Expertise", text: "Specialised recruitment solutions designed for leadership and critical appointments." },
  { icon: "fa-handshake", title: "Trusted Partnerships", text: "Long-term relationships built on transparency, confidentiality and results." },
  { icon: "fa-chart-line", title: "Strategic Approach", text: "Combining experience and insight to identify the right talent for every organisation." },
];

function AboutPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <PageHero
        eyebrow="ABOUT THE QUARTZ AGENCY"
        title={<>Building Connections. Creating Careers.<br />Driving Success.</>}
        intro="A premium recruitment partner connecting exceptional professionals with organisations that value excellence."
      />

      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle">OUR STORY</span>
              <h2>Recruitment Built On<br />Trust And Understanding.</h2>
              <p>The Quartz Agency was created with a simple belief: exceptional businesses are built by exceptional people.</p>
              <p>Our approach combines industry knowledge, personalised service and strategic talent acquisition to deliver recruitment solutions that create lasting impact.</p>
              <Link to="/contact" className="btn-primary">Partner With Us</Link>
            </div>
            <div className="about-image">
              <img src={office} alt="Quartz Office" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image">
              <img src={founder} alt="Founder" loading="lazy" />
            </div>
            <div className="founder-content">
              <span className="section-subtitle">OUR APPROACH</span>
              <h2>A Personal Approach To Executive Search</h2>
              <p>We believe recruitment is more than filling a position. It is about understanding people, businesses and ambitions.</p>
              <p>Every partnership is built around confidentiality, professionalism and long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-box">
              <span className="section-subtitle">OUR MISSION</span>
              <h2>Connecting Exceptional Talent With Exceptional Opportunity.</h2>
              <p>Our mission is to create meaningful connections between ambitious professionals and organisations seeking outstanding leadership and expertise.</p>
            </div>
            <div className="mission-box dark">
              <span className="section-subtitle">OUR VISION</span>
              <h2>To Become South Africa's Most Trusted Recruitment Partner.</h2>
              <p>We aim to redefine recruitment through integrity, innovation and a commitment to delivering exceptional talent solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-quartz">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">WHY THE QUARTZ AGENCY</span>
            <h2>A Recruitment Partnership Built Around Excellence.</h2>
            <p className="section-description">Our approach combines market intelligence, professional relationships and a deep understanding of business requirements.</p>
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

      <section className="about-values">
        <div className="container">
          <div className="about-values-content">
            <span>THE QUARTZ STANDARD</span>
            <h2>Quality. Integrity. Results.</h2>
            <p>Every candidate, every client and every placement receives the highest level of professionalism.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper cta-single">
            <div className="cta-content">
              <span className="section-subtitle">START A CONVERSATION</span>
              <h2>Let's Find Exceptional Talent Together.</h2>
              <p>Partner with The Quartz Agency and discover a recruitment approach designed around your success.</p>
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
