import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import servicesImage from "@/assets/services.jpg";
import office from "@/assets/office.jpg";
import founder from "@/assets/founder.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const heroImg = hero;
const servicesImg = servicesImage;
const officeImg = office;
const founderImg = founder;

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: "fa-user-tie", title: "Executive Search", text: "Identifying outstanding executives and senior leaders who drive strategic growth and long-term success." },
  { icon: "fa-users", title: "Permanent Placements", text: "Connecting exceptional professionals with organisations seeking employees who fit both the role and culture." },
  { icon: "fa-file-contract", title: "Contract Staffing", text: "Flexible staffing solutions that provide experienced professionals exactly when your business needs them." },
  { icon: "fa-laptop-house", title: "Remote Professionals", text: "Access highly skilled remote talent throughout South Africa to support your growing business." },
];

const values = [
  { letter: "Q", title: "Quality", text: "Delivering exceptional recruitment standards in every placement." },
  { letter: "U", title: "Understanding", text: "Listening first to understand every client's unique needs." },
  { letter: "A", title: "Accountability", text: "Taking ownership and delivering on every commitment we make." },
  { letter: "R", title: "Respect", text: "Building meaningful relationships through professionalism." },
  { letter: "T", title: "Trust", text: "Creating lasting partnerships built on honesty and integrity." },
  { letter: "Z", title: "Zeal", text: "Bringing passion, energy and commitment to every recruitment journey." },
];

const industries = [
  { icon: "fa-building-columns", name: "Financial Services" },
  { icon: "fa-users", name: "Professional Services" },
  { icon: "fa-microchip", name: "Technology & Digital" },
  { icon: "fa-heart-pulse", name: "Healthcare" },
  { icon: "fa-gears", name: "Engineering & Manufacturing" },
  { icon: "fa-building", name: "Administration & Office" },
  { icon: "fa-calculator", name: "Finance & Accounting" },
  { icon: "fa-headset", name: "Customer Service" },
];

const processSteps = [
  { n: "01", title: "Consultation", text: "We take time to understand your business, culture and hiring goals." },
  { n: "02", title: "Search", text: "We source exceptional professionals through targeted search and our network." },
  { n: "03", title: "Assessment", text: "Every candidate is carefully screened, interviewed and reference checked." },
  { n: "04", title: "Placement", text: "We coordinate interviews, negotiations and onboarding." },
  { n: "05", title: "Partnership", text: "We continue supporting both client and candidate long after placement." },
];

function Index() {
  return (
    <>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-tag">EXECUTIVE RECRUITMENT & STAFFING SOLUTIONS</span>
            <h1>
              Exceptional Talent.
              <span>Extraordinary Impact.</span>
            </h1>
            <p>
              Connecting visionary organisations with exceptional leaders, skilled
              professionals and high-performing teams who drive innovation, growth
              and lasting business success.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Find Your Next Leader</Link>
              <Link to="/services" className="btn-secondary">Explore Our Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Executive Recruitment in South Africa" loading="eager" />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">OUR RECRUITMENT SERVICES</span>
            <h2>Tailored Recruitment Solutions.<br /><span>Built Around Your Business.</span></h2>
            <p className="section-description">
              At The Quartz Agency, we understand that every organisation has unique
              hiring needs. We provide personalised recruitment solutions that connect
              exceptional talent with businesses looking to grow.
            </p>
          </div>
          <div className="services-showcase">
            <div className="services-image">
              <img src={office} alt="Professional Recruitment Services" loading="lazy" />
            </div>
            <div className="services-grid">
              {services.map((s) => (
                <article className="service-item" key={s.title}>
                  <div className="service-icon"><i className={`fa-solid ${s.icon}`} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">THE QUARTZ STANDARD</span>
            <h2>Our Values Shape<br /><span>Every Partnership.</span></h2>
            <p className="section-description">
              Everything we do is built on trust, integrity and a commitment to
              delivering exceptional recruitment experiences.
            </p>
          </div>
          <div className="quartz-values">
            {values.map((v) => (
              <div className="quartz-item" key={v.letter}>
                <div className="quartz-letter">{v.letter}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">INDUSTRIES WE SERVE</span>
            <h2>Industry Expertise.<br /><span>People First.</span></h2>
            <p className="section-description">
              We recruit exceptional talent across a diverse range of industries,
              partnering with organisations that value excellence and innovation.
            </p>
          </div>
          <div className="industries-wrapper">
            <div className="industries-grid">
              {industries.map((i) => (
                <article className="industry-item" key={i.name}>
                  <i className={`fa-solid ${i.icon}`} />
                  <h4>{i.name}</h4>
                </article>
              ))}
            </div>
            <div className="industries-image">
              <img src={servicesImage} alt="Industries We Recruit For" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">OUR RECRUITMENT PROCESS</span>
            <h2>A Seamless Journey To<br /><span>Exceptional Talent.</span></h2>
          </div>
          <div className="process-timeline">
            {processSteps.map((p) => (
              <article className="process-step" key={p.n}>
                <div className="step-number">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <span className="section-subtitle">BUILD YOUR TEAM WITH CONFIDENCE</span>
              <h2>Finding Exceptional People<br />Starts Here.</h2>
              <p>
                Whether you're recruiting one specialist or building an entire
                workforce, The Quartz Agency delivers recruitment solutions tailored
                to your business.
              </p>
              <div className="cta-buttons">
                <Link to="/employers" className="btn-primary">Request Talent</Link>
                <Link to="/candidates" className="btn-secondary">Submit Your CV</Link>
              </div>
            </div>
            <div className="cta-image">
              <img src={founder} alt="Founder of The Quartz Agency" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="recruitment-banner">
        <img src={heroImg} alt="The Quartz Agency" loading="lazy" />
      </section>

      <SiteFooter />
    </>
  );
}
