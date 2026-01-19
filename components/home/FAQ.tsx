"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before booking your Umrah journey."
        />

        <div className="mt-12 space-y-4 max-w-3xl">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-slate-200 p-5"
            >
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
