import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageBanner, PlaceholderNote, SchoolFooter, SchoolHeader, SectionHeading } from "@/components/school/SchoolShell";
import { Button } from "@/components/ui/button";
import { facilityLabels, photographs, schoolFacilities } from "@/data/school";

export const Route = createFileRoute("/facilities")({
  head: () => ({ meta: [
    { title: "Facilities | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Explore the learning spaces and campus environment at APG Matriculation Higher Secondary School." },
    { property: "og:title", content: "School Facilities at APG" },
    { property: "og:description", content: "Explore spaces for learning, sports, activities, and time together." },
  ] }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="Spaces that support possibility." description="A positive school environment gives students room to learn, explore, and connect with one another." image={photographs.campus} />
    <section className="section-space"><div className="site-wrap"><SectionHeading eyebrow="The school environment" title="Room to learn, move, and create" description="A first look at the spaces that shape a school day. Contact the school to confirm available facilities." />
      <div className="facility-grid">{schoolFacilities.map((item) => <div className="facility-tile" key={item.name}><img src={item.image} alt={item.alt} width={1536} height={1024} loading="lazy" /><strong>{item.name}</strong></div>)}</div>
      <div className="facility-list">{facilityLabels.map((label) => <span className="facility-pill" key={label}><Check size={14} aria-hidden="true" />{label}</span>)}</div>
      <PlaceholderNote>Facility names above are editable examples from the school brief. Please confirm which facilities are currently available before publication.</PlaceholderNote>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap story-grid"><div className="story-copy"><span className="eyebrow">Visit & learn more</span><h2>Come discover the school.</h2><p>Families can contact the school to ask about facilities, the campus environment, transport, and opportunities to visit.</p><Button asChild className="school-button"><Link to="/contact">Contact the school <ArrowRight aria-hidden="true" /></Link></Button></div><div className="mini-photo-row"><img src={photographs.classroom} alt="A bright classroom and teacher" width={1536} height={1024} loading="lazy" /><img src={photographs.sports} alt="Students enjoying outdoor activity" width={1536} height={1024} loading="lazy" /></div></div></section>
  </main><SchoolFooter /></>;
}