"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="grid min-h-[80vh] items-center gap-12 py-20 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-flex items-center rounded-full bg-slate-900/5 px-4 py-1 text-sm font-medium text-slate-700">
              Trusted Umrah & Hajj Partner
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Umrah & Hajj Packages <br />
              <span className="text-slate-700">With Complete Ground Support</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              {site.name} provides premium Umrah & Hajj services with hotels near Haram,
              guided ziyarat, visa assistance and 24×7 support for pilgrims.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/91${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get Quote on WhatsApp
              </a>

              <a
                href="/packages"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View Packages
              </a>
            </div>

            <div className="mt-10 flex gap-8 text-sm text-slate-600">
              <div>
                <p className="text-2xl font-bold text-slate-900">1000+</p>
                Happy Pilgrims
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">10+</p>
                Years Experience
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">5</p>
                Cities Served
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1589187155478-06e2e0a7c59c?q=80&w=1200"
                alt="Masjid al Haram"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
