"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { packages } from "@/data/packages";
import Link from "next/link";

export default function FeaturedPackages() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Packages"
          title="Our Most Popular Umrah Packages"
          subtitle="Choose from carefully designed packages with complete comfort & guidance."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  {pkg.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {pkg.duration} • {pkg.hotel}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-slate-900">{pkg.price}</p>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
