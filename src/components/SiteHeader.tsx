import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/quartz-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/employers", label: "Employers" },
  { to: "/candidates", label: "Candidates" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className={`header ${variant === "solid" ? "header-solid" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="The Quartz Agency" />
          </Link>
          <ul className="nav-menu">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className={pathname === n.to ? "active" : ""}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-nav">
            Let's Connect
          </Link>
          <div className="mobile-toggle">
            <i className="fa-solid fa-bars" />
          </div>
        </nav>
      </div>
    </header>
  );
}
