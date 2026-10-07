import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryPhotos } from "@/data/school";

const filters = ["All", "Campus", "Academics", "Sports", "Events", "Activities"] as const;

export function SchoolGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visiblePhotos = filter === "All" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === filter);
  const activePhoto = activeIndex === null ? null : visiblePhotos[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return undefined;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % visiblePhotos.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current - 1 + visiblePhotos.length) % visiblePhotos.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, visiblePhotos.length]);

  function changeFilter(value: (typeof filters)[number]) {
    setFilter(value);
    setActiveIndex(null);
  }

  return <>
    <div className="gallery-filters" role="group" aria-label="Filter gallery photos">
      {filters.map((item) => <button key={item} type="button" className="gallery-filter" aria-pressed={filter === item} onClick={() => changeFilter(item)}>{item}</button>)}
    </div>
    <div className="gallery-grid">
      {visiblePhotos.map((photo, index) => <button key={`${photo.title}-${index}`} type="button" className="gallery-tile" aria-label={`View ${photo.title} photo`} onClick={() => setActiveIndex(index)}>
        <img src={photo.image} srcSet={(photo as any).srcSet ?? undefined} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" alt={photo.alt} loading="lazy" width={1536} height={1024} />
        <span className="gallery-caption">{photo.title}<span className="sr-only">, {photo.category}</span></span>
      </button>)}
    </div>
    {activePhoto && activeIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
      <div className="lightbox-top"><span className="lightbox-caption">{activePhoto.title} · {activePhoto.category}</span><button className="lightbox-close" type="button" aria-label="Close photo viewer" onClick={() => setActiveIndex(null)}><X size={21} /></button></div>
      <div className="lightbox-image-wrap"><img className="lightbox-image" src={activePhoto.image} alt={activePhoto.alt} width={1536} height={1024} /></div>
      <div className="lightbox-controls">
        <button className="lightbox-control" type="button" aria-label="Previous photo" onClick={() => setActiveIndex((activeIndex - 1 + visiblePhotos.length) % visiblePhotos.length)}><ArrowLeft size={20} /></button>
        <span className="lightbox-caption">{activeIndex + 1} / {visiblePhotos.length}</span>
        <button className="lightbox-control" type="button" aria-label="Next photo" onClick={() => setActiveIndex((activeIndex + 1) % visiblePhotos.length)}><ArrowRight size={20} /></button>
      </div>
    </div>}
  </>;
}