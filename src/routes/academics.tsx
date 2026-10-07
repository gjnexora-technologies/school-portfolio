import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, GraduationCap, Lightbulb, Sprout } from "lucide-react";
import { PageBanner, SchoolFooter, SchoolHeader, SectionHeading } from "@/components/school/SchoolShell";
import { learningStages, photographs } from "@/data/school";

export const Route = createFileRoute("/academics")({
  head: () => ({ meta: [
    { title: "Academics | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Explore learning stages, classroom learning, academic support, examination preparation, and guidance at APG." },
    { property: "og:title", content: "Academics at APG Matriculation Higher Secondary School" },
    { property: "og:description", content: "A thoughtful learning journey from primary through higher secondary education." },
  ] }),
  component: AcademicsPage,
});

const learningThemes = [
  { icon: BookOpen, title: "Curriculum & classroom learning", description: "Engaging with the curriculum through clear teaching, class participation, and a strong foundation." },
  { icon: Lightbulb, title: "Digital learning", description: "Opportunities to bring curiosity and modern learning resources into the classroom." },
  { icon: Sprout, title: "Academic support", description: "Encouragement and guidance as students strengthen skills and understanding." },
  { icon: Compass, title: "Examinations & guidance", description: "Preparation for important assessments and thoughtful conversations about future pathways." },
];

function AcademicsPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="Curiosity opens every door." description="A supportive learning journey that builds strong foundations, confidence, and a readiness for what comes next." image={photographs.classroom} />
    <section className="section-space"><div className="site-wrap"><SectionHeading eyebrow="Learning at every stage" title="A place for every next step" description="Explore the learning stages offered at APG Matriculation Higher Secondary School." />
      <div className="stage-grid">{learningStages.map((stage, index) => { const Icon = [Sprout, BookOpen, Compass, GraduationCap][index] ?? BookOpen; return <article className="stage-card" key={stage.name}><img src={index < 2 ? photographs.classroom : photographs.campus} alt="" width={1536} height={1024} loading="lazy" /><div className="stage-card-copy"><span className="tag"><Icon size={13} aria-hidden="true" /> {stage.range}</span><h3>{stage.name}</h3><p>{stage.description}</p></div></article>; })}</div>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap"><SectionHeading eyebrow="A complete learning experience" title="Support for learning and growth" description="Strong learning combines classroom teaching with encouragement, practice, and a clear sense of progress." />
      <div className="values-grid">{learningThemes.map((item) => <article key={item.title} className="value-item"><item.icon size={23} color="var(--school-teal)" aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </div></section>
    <section className="section-space"><div className="site-wrap story-grid"><div className="story-copy"><span className="eyebrow">Guidance for the journey</span><h2>Learning today. Preparing for tomorrow.</h2><p>Students are encouraged to build knowledge and good study habits, explore their interests, and consider the options that lie ahead.</p><p>For current curriculum details, subject choices, and class availability, please contact the school.</p><Link className="text-link" to="/contact">Ask the school a question <ArrowRight size={16} /></Link></div><div className="story-image-wrap"><img className="story-image" src={photographs.classroom} alt="Students learning with a teacher" width={1536} height={1024} loading="lazy" /></div></div></section>
  </main><SchoolFooter /></>;
}