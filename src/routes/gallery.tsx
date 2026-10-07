import { createFileRoute } from "@tanstack/react-router";
import { PageBanner, SchoolFooter, SchoolHeader } from "@/components/school/SchoolShell";
import { SchoolGallery } from "@/components/school/SchoolGallery";
import { photographs } from "@/data/school";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Photo Gallery | APG Matriculation Higher Secondary School" },
    { name: "description", content: "Browse moments of learning, campus life, sports, activities, and school celebrations at APG." },
    { property: "og:title", content: "Photo Gallery at APG" },
    { property: "og:description", content: "Explore school life through a gallery of learning, activities, campus, and events." },
  ] }),
  component: GalleryPage,
});

function GalleryPage() {
  return <><SchoolHeader /><main>
    <PageBanner title="A glimpse into school life." description="Explore the moments that bring learning, friendship, activities, and school celebrations to life." image={photographs.culture} />
    <section className="section-space"><div className="site-wrap"><SchoolGallery /></div></section>
  </main><SchoolFooter /></>;
}