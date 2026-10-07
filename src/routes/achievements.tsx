import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Sparkles, Star, Trophy } from "lucide-react";
import { PageBanner, PlaceholderNote, SchoolFooter, SchoolHeader, SectionHeading } from "@/components/school/SchoolShell";
import { Button } from "@/components/ui/button";
import { achievementCategories, photographs } from "@/data/school";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [
    { title: "Achievements | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Celebrate the effort and milestones of APG students in academics, sports, culture, competitions, and more." },
    { property: "og:title", content: "Student Achievements at APG" },
    { property: "og:description", content: "A space to recognise student effort, achievement, and personal growth." },
  ] }),
  component: AchievementsPage,
});

const icons = [BookOpen, Trophy, Sparkles, Award, Star];

function AchievementsPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="Every step forward matters." description="We celebrate the dedication, curiosity, and effort students bring to their learning and interests." image={photographs.culture} />
    <section className="section-space"><div className="site-wrap"><SectionHeading eyebrow="Student milestones" title="A place for every success story" description="Use this space to recognise student accomplishments across school life." />
      <div className="achievement-grid">{achievementCategories.map((item, index) => { const Icon = icons[index] ?? Award; return <article key={item.name} className="achievement-card"><div className="achievement-copy"><div className="achievement-mark"><Icon size={20} aria-hidden="true" /></div><h3>{item.name}</h3><p>Add a verified student story or school achievement here when one is available.</p></div></article>; })}</div>
      <PlaceholderNote>No awards, rankings, results, or achievements have been provided. Replace these prompts with confirmed school-approved examples.</PlaceholderNote>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap story-grid"><div className="story-copy"><span className="eyebrow">Recognising the journey</span><h2>Progress deserves a moment.</h2><p>Every achievement begins with effort: a new skill practised, a challenge approached, or a goal reached through perseverance.</p><p>Families can contact the school for confirmed details about current achievements and student recognition.</p><Button asChild className="school-button"><Link to="/contact">Contact the school <ArrowRight aria-hidden="true" /></Link></Button></div><div className="story-image-wrap"><img className="story-image" src={photographs.culture} alt="Students sharing a proud performance together" width={1536} height={1024} loading="lazy" /></div></div></section>
  </main><SchoolFooter /></>;
}