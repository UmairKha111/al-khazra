"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const images = [
  "https://images.unsplash.com/photo-1589187155478-06e2e0a7c59c?q=80&w=1200",
  "https://images.unsplash.com/photo-1591608516484-ec9b1d3f1f10?q=80&w=1200",
  "https://images.unsplash.com/photo-1589187155478-06e2e0a7c59c?q=80&w=1200",
  "https://images.unsplash.com/photo-1591608516484-ec9b1d3f1f10?q=80&w=1200",
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments From Our Pilgrimages"
          subtitle="A glimpse of our past Umrah & Hajj journeys."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Gallery"
              className="h-48 w-full rounded-xl object-cover"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            View Full Gallery
          </a>
        </div>
      </Container>
    </section>
  );
}
