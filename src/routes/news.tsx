import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, CalendarDays } from "lucide-react";
import { PageBanner, PlaceholderNote, SchoolFooter, SchoolHeader, SectionHeading } from "@/components/school/SchoolShell";
import { Button } from "@/components/ui/button";
import { newsItems, photographs } from "@/data/school";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [
    { title: "News & Events | APG Matriculation Higher Secondary School" },
    { name: "description", content: "School notices, events, learning updates, competitions, workshops, and celebrations at APG." },
    { property: "og:title", content: "News & Events at APG" },
    { property: "og:description", content: "School community announcements and events in one place." },
  ] }),
  component: NewsPage,
});

function NewsPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="What's happening at APG?" description="A home for school announcements, important notices, upcoming events, workshops, and community celebrations." image={photographs.culture} />
    <section className="section-space"><div className="site-wrap"><SectionHeading eyebrow="The notice board" title="School updates & events" description="Visit for news from across the APG community." />
      <div className="event-grid">{newsItems.map((item) => <article className="event-card" key={item.title}><img src={item.image} alt="" width={1536} height={1024} loading="lazy" /><div className="event-copy"><span className="tag">{item.category}</span><time className="event-date"><CalendarDays size={13} aria-hidden="true" /> {item.date}</time><h3>{item.title}</h3><p>{item.description}</p><Link className="text-link" to="/contact">Read more <ArrowRight size={15} aria-hidden="true" /></Link></div></article>)}</div>
      <PlaceholderNote>News cards and dates are editable placeholders. Ask the school for approved announcements and the publication schedule.</PlaceholderNote>
    </div></section>
    <section className="section-space section-paper"><div className="site-wrap story-grid"><div className="story-copy"><span className="eyebrow">Stay connected</span><h2>Important information, from the school.</h2><p>Contact the school directly to confirm dates, notices, and event details.</p><Button asChild className="school-button"><Link to="/contact">Get in touch <Bell aria-hidden="true" /></Link></Button></div><div className="notice-panel"><h3>Upcoming events</h3><p>Confirmed upcoming events and dates will be added here by the school.</p></div></div></section>
  </main><SchoolFooter /></>;
}