"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Mohd. Asif",
    city: "Lucknow",
    text: "Al Khazra made our Umrah journey extremely smooth. Hotels were near Haram and support was available 24x7.",
  },
  {
    name: "Mrs. Fatima",
    city: "Delhi",
    text: "Very professional service. Visa, hotel, transport everything was well managed.",
  },
  {
    name: "Haji Irfan",
    city: "Mumbai",
    text: "Best Umrah experience. Transparent pricing and excellent guidance throughout the trip.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Pilgrims Say"
          subtitle="Real experiences from people who travelled with us."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
            >
              <p className="text-slate-600 italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-slate-900">
                {t.name} – {t.city}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
