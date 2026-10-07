import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageBanner, SchoolFooter, SchoolHeader } from "@/components/school/SchoolShell";
import { Button } from "@/components/ui/button";
import { activities, photographs } from "@/data/school";

export const Route = createFileRoute("/student-life")({
  head: () => ({ meta: [
    { title: "Student Life | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Discover sports, cultural events, arts, clubs, competitions, educational activities, and school celebrations at APG." },
    { property: "og:title", content: "Student Life at APG Matriculation Higher Secondary School" },
    { property: "og:description", content: "A glimpse into the activities and experiences that make school life memorable." },
  ] }),
  component: StudentLifePage,
});

function StudentLifePage() {
  return <><SchoolHeader /><main>
    <PageBanner title="Room to discover who you are." description="School life brings students together to explore new interests, celebrate culture, work as a team, and have fun." image={photographs.sports} />
    <section className="section-space"><div className="site-wrap">
      <div className="life-feature"><img src={photographs.culture} alt="Students participating in a cultural performance" width={1536} height={1024} loading="lazy" /><div className="life-feature-copy"><span className="eyebrow">Beyond academics</span><h2>Make memories. Find your strengths.</h2><p>Every day brings opportunities to explore, contribute, practise, and celebrate. From a team game to a creative performance, students learn about themselves and one another along the way.</p><Button asChild className="school-button school-button-light"><Link to="/gallery">Explore the gallery <ArrowRight aria-hidden="true" /></Link></Button></div></div>
      <div className="activity-list">{activities.map((item) => <div className="activity-item" key={item}><Check size={15} aria-hidden="true" />{item}</div>)}</div>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap story-grid"><div className="story-copy"><span className="eyebrow">Learning with others</span><h2>Growing together, in every setting.</h2><p>Taking part helps students build confidence, collaboration, creativity, and respect. Activities can also offer a welcome balance to the school day.</p><p>For the current schedule of clubs, events, or extracurricular activities, please check directly with the school.</p></div><div className="story-image-wrap"><img className="story-image" src={photographs.sports} alt="Students being active on the school field" width={1536} height={1024} loading="lazy" /></div></div></section>
  </main><SchoolFooter /></>;
}