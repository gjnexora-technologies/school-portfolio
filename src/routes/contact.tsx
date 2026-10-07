import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/school/EnquiryForm";
import { PageBanner, PlaceholderNote, SchoolFooter, SchoolHeader } from "@/components/school/SchoolShell";
import { photographs, schoolContact } from "@/data/school";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Get in touch with APG Matriculation Higher Secondary School for school information and admission enquiries." },
    { property: "og:title", content: "Contact APG Matriculation Higher Secondary School" },
    { property: "og:description", content: "Contact the school with questions about learning, admissions, and school life." },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="We'd be glad to hear from you." description="Reach out with your questions about school life, learning, or admissions." image={photographs.campus} />
    <section className="section-space"><div className="site-wrap contact-grid">
      <div className="contact-info"><span className="eyebrow">Get in touch</span><h2>Let's start a conversation.</h2><p>Here are the school's contact details.</p>
        <div className="detail-list"><div className="detail-row"><MapPin size={18} /><span>{schoolContact.address}</span></div><div className="detail-row"><Phone size={18} /><span>{schoolContact.phone}</span></div><div className="detail-row"><Mail size={18} /><span>{schoolContact.email}</span></div><div className="detail-row"><Clock3 size={18} /><span>{schoolContact.hours}</span></div></div>
        <div className="social-links" aria-label="Social media"><span className="social-placeholder">Add official Facebook</span><span className="social-placeholder">Add official Instagram</span><span className="social-placeholder">Add official YouTube</span></div>
        <PlaceholderNote>The names and contact details are fictional, and enquiries are not sent to an inbox. Replace them with verified school information before publishing.</PlaceholderNote>
      </div>
      <EnquiryForm contact />
    </div></section>
    <section className="contact-map-section" aria-label="School location map">
      <iframe
        className="contact-map-frame"
        src={schoolContact.mapEmbedUrl}
        title="Map showing FCI Road, Ganapathy, Coimbatore"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="site-wrap contact-map-details">
        <a className="contact-map-link" href={schoolContact.mapUrl} target="_blank" rel="noreferrer">Open this area in Google Maps</a>
        <p className="contact-map-caption">Map of FCI Road, Ganapathy, Coimbatore. The exact school location has not been verified.</p>
      </div>
    </section>
  </main><SchoolFooter /></>;
}