import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Heart, Target } from "lucide-react";
import { SchoolFooter, SchoolHeader, PageBanner, PlaceholderNote, SectionHeading } from "@/components/school/SchoolShell";
import { Button } from "@/components/ui/button";
import { photographs, schoolLeaders, schoolValues } from "@/data/school";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About APG | Our School, Vision & Values" },
    { name: "description", content: "Learn about APG Matriculation Higher Secondary School's approach to learning, character, creativity, and student growth." },
    { property: "og:title", content: "About APG Matriculation Higher Secondary School" },
    { property: "og:description", content: "Our school, our vision, and the values that support every student's growth." },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="Education Beyond the Classroom." description="A supportive school community where learning, character, creativity, and confidence grow together." image={photographs.campus} />
    <section className="section-space"><div className="site-wrap story-grid">
      <div className="story-image-wrap"><img className="story-image" src={photographs.classroom} alt="A teacher supporting students as they learn" width={1536} height={1024} loading="lazy" /></div>
      <div className="story-copy"><span className="eyebrow">Our school</span><h2>A place to grow with purpose.</h2><p>APG Matriculation Higher Secondary School is a learning community focused on helping each student build a strong foundation for the future.</p><p>We value academic development alongside the qualities that help young people flourish: discipline, character, creativity, confidence, and care for others.</p><Button asChild className="school-button"><Link to="/academics">Explore academics <ArrowRight aria-hidden="true" /></Link></Button></div>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap">
      <SectionHeading eyebrow="Our guiding purpose" title="Learning with intention, growing together" description="The school's vision and mission can be updated here with the approved wording from the school." />
      <div className="values-grid"><article className="value-item"><Eye size={23} color="var(--school-teal)" aria-hidden="true" /><h3>Vision</h3><p>To inspire young minds and nurture bright futures through a supportive learning community. Replace with the school's official vision statement.</p></article><article className="value-item"><Target size={23} color="var(--school-teal)" aria-hidden="true" /><h3>Mission</h3><p>To foster learning, discipline, creativity, confidence, and character as every student grows. Replace with the school's official mission statement.</p></article><article className="value-item"><Heart size={23} color="var(--school-teal)" aria-hidden="true" /><h3>Core values</h3><p>Learning with purpose. Respect for others. Responsibility, curiosity, creativity, and confidence.</p></article></div>
      <PlaceholderNote>Vision and mission copy is introductory and should be replaced with the school’s approved statements.</PlaceholderNote>
    </div></section>
    <section className="section-space"><div className="site-wrap"><SectionHeading eyebrow="School leadership & faculty" title="Meet the people who make learning possible" description="Add approved staff names, roles, portraits, and introductions when the school is ready." />
      <div className="leader-grid">{schoolLeaders.map((leader) => <article className="leader-card" key={leader.role}><img className="leader-photo" src={leader.image} alt={`Portrait placeholder for ${leader.role}`} width={512} height={420} loading="lazy" /><div className="leader-copy"><h3>{leader.name}</h3><p>{leader.role}</p><p>{leader.description}</p></div></article>)}</div>
      <PlaceholderNote>Portraits are generated placeholders and do not represent APG staff. Replace these along with each staff member’s name and introduction before publication.</PlaceholderNote>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap"><SectionHeading eyebrow="What we nurture" title="A whole-child approach" /><div className="values-grid">{schoolValues.map((value) => <article className="value-item" key={value.name}><h3>{value.name}</h3><p>{value.description}</p></article>)}</div></div></section>
  </main><SchoolFooter /></>;
}