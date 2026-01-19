"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const points = [
  "Hotels Near Haram & Masjid Nabawi",
  "Visa & Documentation Assistance",
  "Experienced Group Leaders",
  "Guided Ziyarat Tours",
  "24×7 Ground Support",
  "Transparent Pricing (No Hidden Cost)",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          title="Why Thousands Trust Al Khazra"
          subtitle="We handle your journey with care, transparency and spiritual focus."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm"
            >
              ✓ {p}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
