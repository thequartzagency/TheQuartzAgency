import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact The Quartz Agency | Executive Recruitment" },
      { name: "description", content: "Contact The Quartz Agency for executive search, recruitment and staffing solutions across South Africa." },
      { property: "og:title", content: "Contact The Quartz Agency" },
      { property: "og:description", content: "Let's build something exceptional together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <PageHero
        eyebrow="CONTACT THE QUARTZ AGENCY"
        title="Let's Build Something Exceptional Together"
        intro="Whether you are seeking outstanding talent or your next career opportunity, our team is ready to assist."
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-subtitle">GET IN TOUCH</span>
              <h2>Start A Conversation.</h2>
              <p>Our recruitment consultants are available to discuss executive search, recruitment solutions and career opportunities.</p>

              <div className="contact-item">
                <i className="fa-solid fa-location-dot" />
                <div>
                  <h4>Location</h4>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-envelope" />
                <div>
                  <h4>Email</h4>
                  <p>info@thequartzagency.co.za</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone" />
                <div>
                  <h4>Phone</h4>
                  <p>+27 XX XXX XXXX</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="Company" />
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <select defaultValue="">
                  <option value="" disabled>I am interested in...</option>
                  <option>Hiring Talent</option>
                  <option>Finding A Job</option>
                  <option>Executive Search</option>
                </select>
                <textarea rows={6} placeholder="Your Message" />
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-wrapper cta-single">
            <div className="cta-content">
              <span className="section-subtitle">PARTNER WITH QUARTZ</span>
              <h2>Exceptional Talent Starts With A Conversation</h2>
              <p>Whether you are building your leadership team or advancing your career, The Quartz Agency is ready to help you achieve your goals.</p>
              <div className="cta-buttons">
                <Link to="/services" className="btn-primary">Explore Services</Link>
                <Link to="/candidates" className="btn-secondary">Submit CV</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
