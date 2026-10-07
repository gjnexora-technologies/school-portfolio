import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Clock3, Mail, MapPin, Menu, Phone, School, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, schoolContact, schoolName } from "@/data/school";

function Brand() {
  return (
    <Link className="school-brand" to="/" aria-label={`${schoolName} home`}>
      <span className="school-mark" aria-hidden="true">APG</span>
      <span>
        <span className="school-name">{schoolName}</span>
        <span className="school-kicker">Learn · Grow · Flourish</span>
      </span>
    </Link>
  );
}

export function SchoolHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-wrap site-head-main">
        <Brand />
        <Button asChild className="school-button head-apply"><Link to="/admissions" aria-label="Apply for admission"><span>Apply Now</span><ArrowRight aria-hidden="true" /></Link></Button>
        <button className="mobile-menu-trigger" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <nav className="desktop-nav site-wrap" aria-label="Main navigation">
        {navigation.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ "data-status": "active" }}>{item.label}</Link>)}
      </nav>
      {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ "data-status": "active" }} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
        <Button asChild className="school-button mobile-apply"><Link to="/admissions" onClick={() => setMenuOpen(false)}>Apply for Admission <ArrowRight aria-hidden="true" /></Link></Button>
      </nav>}
      <span className="sr-only" aria-live="polite">Current page: {navigation.find((item) => item.to === pathname)?.label ?? "School"}</span>
    </header>
  );
}

export function SchoolFooter() {
  const footerLinks = navigation.filter((item) => item.to !== "/");
  return (
    <footer className="site-footer">
      <div className="site-wrap footer-main">
        <div className="footer-brand">
          <Brand />
          <p>A school community where learning, character, creativity, and confidence grow together.</p>
        </div>
        <div>
          <div className="footer-heading">Explore</div>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <div className="footer-heading">Get in touch</div>
          <div className="footer-contact">
            <span><MapPin size={14} aria-hidden="true" /> {schoolContact.address}</span>
            <span><Phone size={14} aria-hidden="true" /> {schoolContact.phone}</span>
            <span><Mail size={14} aria-hidden="true" /> {schoolContact.email}</span>
            <span><Clock3 size={14} aria-hidden="true" /> {schoolContact.hours}</span>
            <span className="contact-disclaimer">Fictional contact details — not for real enquiries.</span>
          </div>
        </div>
      </div>
      <div className="site-wrap footer-bottom"><span>© {new Date().getFullYear()} {schoolName}</span><span>Learning together, every day.</span></div>
    </footer>
  );
}

export function PageBanner({ title, description, image, eyebrow = "APG Matriculation Higher Secondary School" }: { title: string; description: string; image?: string; eyebrow?: string }) {
  return <section className="page-banner"><div className="site-wrap page-banner-inner">
    {image && <img className="banner-image" src={image} alt="" width={1536} height={1024} />}
    <div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p>
  </div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return <div className="placeholder-note"><School size={17} aria-hidden="true" /><span>{children}</span></div>;
}