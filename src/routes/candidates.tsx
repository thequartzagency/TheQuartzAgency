import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/candidates")({
  head: () => ({
    meta: [
      { title: "Candidates | The Quartz Agency Career Opportunities" },
      { name: "description", content: "Discover career opportunities with The Quartz Agency. Connect with leading employers and find your next professional opportunity." },
      { property: "og:title", content: "For Candidates — The Quartz Agency" },
      { property: "og:description", content: "Your next career opportunity starts here." },
      { property: "og:url", content: "/candidates" },
    ],
    links: [{ rel: "canonical", href: "/candidates" }],
  }),
  component: CandidatesPage,
});

const benefits = [
  { icon: "fa-compass", title: "Career Guidance", text: "Receive professional advice throughout your career journey." },
  { icon: "fa-briefcase", title: "Exclusive Opportunities", text: "Access roles with respected organisations across multiple industries." },
  { icon: "fa-user-check", title: "Personal Support", text: "Work with consultants who understand your professional goals." },
];

const steps = [
  { n: "01", title: "Register", text: "Share your experience, skills and career goals with our consultants." },
  { n: "02", title: "Consultation", text: "We learn about your ambitions and identify suitable opportunities." },
  { n: "03", title: "Interview Preparation", text: "Receive guidance and support before meeting potential employers." },
  { n: "04", title: "Career Success", text: "Secure a role that matches your professional goals." },
];

const bullets = [
  "Confidential candidate service",
  "Access to professional opportunities",
  "Career-focused consultation",
  "Support throughout the hiring process",
];

function CandidatesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <PageHero
        eyebrow="FOR CANDIDATES"
        title="Your Next Career Opportunity Starts Here."
        intro="We connect ambitious professionals with organisations looking for exceptional talent."
      />

      <section className="intro">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">YOUR CAREER PARTNER</span>
            <h2>More Than A Job Search.<br />A Career Journey.</h2>
            <p className="section-description">
              At The Quartz Agency, we take the time to understand your experience,
              goals and ambitions to connect you with opportunities that align with
              your future.
            </p>
          </div>
        </div>
      </section>

      <section className="candidate-benefits">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">WHY WORK WITH US</span>
            <h2>Supporting Your Professional Growth.</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <div className="benefit-card" key={b.title}>
                <i className={`fa-solid ${b.icon}`} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="container">
          <div className="partner-content-single">
            <span className="section-subtitle">JOIN OUR NETWORK</span>
            <h2>Be Considered For Future Opportunities.</h2>
            <p>Submit your details and become part of The Quartz Agency candidate network. Our consultants will connect you with suitable opportunities aligned with your experience.</p>
            <ul className="check-list">
              {bullets.map((b) => (
                <li key={b}><i className="fa-solid fa-circle-check" />{b}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">Submit Your CV</Link>
          </div>
        </div>
      </section>

      <section className="process light">
        <div className="container">
          <div className="section-heading">
            <span className="section-subtitle">HOW IT WORKS</span>
            <h2>A Simple Path To Your Next Opportunity.</h2>
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

      <section className="about-story feature-block">
        <div className="container">
          <div className="feature-content">
            <span className="section-subtitle">CAREER INSIGHTS</span>
            <h2>Helping Professionals Make Better Career Decisions.</h2>
            <p>Our consultants provide market insight, interview preparation and guidance to help professionals confidently navigate their careers.</p>
            <Link to="/contact" className="btn-primary">Speak With A Consultant</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper cta-single">
            <div className="cta-content">
              <span className="section-subtitle">YOUR NEXT MOVE</span>
              <h2>Ready To Take The Next Step In Your Career?</h2>
              <p>Connect with The Quartz Agency and discover opportunities designed around your experience, skills and ambitions.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-primary">Submit Your CV</Link>
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
