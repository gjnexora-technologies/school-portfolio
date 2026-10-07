import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Heart, Lightbulb, Sparkles, Sprout, Trophy, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchoolFooter, SchoolHeader, SectionHeading } from "@/components/school/SchoolShell";
import { achievementCategories, learningStages, photographs, schoolFacilities, schoolValues } from "@/data/school";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "APG Matriculation Higher Secondary School | Learning for Life" },
    { name: "description", content: "Discover learning, student life, admissions, and the school community at APG Matriculation Higher Secondary School." },
    { property: "og:title", content: "APG Matriculation Higher Secondary School" },
    { property: "og:description", content: "Inspiring young minds and building bright futures through learning, character, and creativity." },
  ] }),
  component: HomePage,
});

const highlightItems = [
  { title: "Academic excellence", note: "Learning with purpose", icon: BookOpen },
  { title: "Experienced faculty", note: "Guidance that encourages", icon: UsersRound },
  { title: "Modern learning", note: "Ready to explore", icon: Lightbulb },
  { title: "Sports & activities", note: "Room to find your spark", icon: Trophy },
  { title: "Student development", note: "Growing in every way", icon: Sprout },
];
const stageIcons = [Sprout, BookOpen, Award, Sparkles];

function HomePage() {
  return <>
    <SchoolHeader />
    <main>
      <section className="hero">
        <img className="hero-photo" src={photographs.classroom} alt="A teacher encouraging students in their classroom" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content"><div className="hero-copy reveal">
          <span className="eyebrow">A place to learn and belong</span>
          <h1>Inspiring Young Minds. Building Bright Futures.</h1>
          <p>APG Matriculation Higher Secondary School provides a supportive learning environment where academic excellence, discipline, creativity, and character grow together.</p>
          <div className="hero-actions">
            <Button asChild className="school-button school-button-light"><Link to="/admissions">Apply for Admission <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" className="school-button border-background/50 bg-background/10 text-background hover:bg-background/20"><Link to="/about">Explore Our School <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="hero-note">A welcoming community for every stage of learning.</div>
        </div></div>
      </section>
      <section className="highlight-band" aria-label="School highlights"><div className="site-wrap highlight-grid">
        {highlightItems.map(({ title, note, icon: Icon }) => <div className="highlight-item" key={title}><div className="highlight-icon"><Icon size={18} aria-hidden="true" /></div><div><strong>{title}</strong><span>{note}</span></div></div>)}
      </div></section>

      <section className="section-space"><div className="site-wrap story-grid">
        <div className="story-image-wrap"><img className="story-image" src={photographs.campus} alt="Students arriving at a welcoming, green school campus" width={1536} height={1024} loading="lazy" /><span className="photo-caption">A community where young minds grow</span></div>
        <div className="story-copy"><span className="eyebrow">A school for every possibility</span><h2>Education Beyond the Classroom.</h2><p>At APG Matriculation Higher Secondary School, every student is encouraged to learn with purpose, find their strengths, and grow into a thoughtful, confident individual.</p><p>We believe strong foundations are built through academic development, discipline, creativity, and care for one another.</p><Link className="text-link" to="/about">Get to know APG <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div></section>

      <section className="section-space section-paper"><div className="site-wrap">
        <SectionHeading eyebrow="What matters here" title="A strong foundation for what comes next" description="A caring approach to learning helps students develop in the classroom and beyond." />
        <div className="values-grid">{schoolValues.map((value) => { const Icon = value.icon === "Heart" ? Heart : value.icon === "Sparkles" ? Sparkles : BookOpen; return <article className="value-item" key={value.name}><Icon size={23} color="var(--school-teal)" aria-hidden="true" /><h3>{value.name}</h3><p>{value.description}</p></article>; })}</div>
      </div></section>

      <section className="section-space"><div className="site-wrap">
        <SectionHeading eyebrow="Learning at every stage" title="Growing one step at a time" description="A thoughtful learning journey from first foundations through higher secondary education." />
        <div className="stage-grid">{learningStages.map((stage, index) => { const Icon = stageIcons[index] ?? BookOpen; return <article className="stage-card" key={stage.name}><img src={index < 2 ? photographs.classroom : photographs.campus} alt="" width={1536} height={1024} loading="lazy" /><div className="stage-card-copy"><span className="tag"><Icon size={13} aria-hidden="true" /> {stage.range}</span><h3>{stage.name}</h3><p>{stage.description}</p></div></article>; })}</div>
        <Link className="text-link" to="/academics">Explore academics <ArrowRight size={16} aria-hidden="true" /></Link>
      </div></section>

      <section className="section-space section-paper"><div className="site-wrap">
        <SectionHeading eyebrow="Spaces to explore" title="Learning happens in many places" description="The school experience extends across learning, movement, creativity, and time spent together." />
        <div className="facility-grid">{schoolFacilities.map((facility) => <div key={facility.name} className="facility-tile"><img src={facility.image} alt={facility.alt} width={1536} height={1024} loading="lazy" /><strong>{facility.name}</strong></div>)}</div>
        <Link className="text-link" to="/facilities">Explore school facilities <ArrowRight size={16} aria-hidden="true" /></Link>
      </div></section>

      <section className="section-space"><div className="site-wrap story-grid">
        <div className="story-copy"><span className="eyebrow">Beyond the classroom</span><h2>Find your place. Find your spark.</h2><p>Sports, cultural events, arts, clubs, competitions, and educational activities give students new ways to discover what they enjoy.</p><Link className="text-link" to="/student-life">Discover student life <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <div className="story-image-wrap"><img className="story-image" src={photographs.sports} alt="Students enjoying a team game on the school field" width={1536} height={1024} loading="lazy" /></div>
      </div></section>

      <section className="cta-band"><div className="site-wrap cta-inner"><div><h2>Start your child’s journey with APG.</h2><p>Connect with the school to ask about the admissions process.</p></div><Button asChild className="school-button school-button-light"><Link to="/admissions">Admissions enquiries <ArrowRight aria-hidden="true" /></Link></Button></div></section>

      <section className="section-space section-paper"><div className="site-wrap">
        <SectionHeading eyebrow="Student milestones" title="Every achievement deserves to be celebrated" description="We value the effort, curiosity, and courage students bring to everything they do." />
        <div className="achievement-grid">{achievementCategories.slice(0, 3).map((item) => { const Icon = item.icon === "Trophy" ? Trophy : item.icon === "Sparkles" ? Sparkles : Award; return <article key={item.name} className="achievement-card"><div className="achievement-copy"><div className="achievement-mark"><Icon size={20} aria-hidden="true" /></div><h3>{item.name}</h3><p>Student milestones and school updates will be added by the school.</p></div></article>; })}</div>
        <Link className="text-link" to="/achievements">Explore achievements <ArrowRight size={16} aria-hidden="true" /></Link>
      </div></section>
    </main>
    <SchoolFooter />
  </>;
}