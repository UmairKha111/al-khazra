"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { site } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">
              AK
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-slate-900">{site.name}</p>
              <p className="text-xs text-slate-500">@{site.handle}</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link href="/packages" className="hover:text-slate-900">
              Packages
            </Link>
            <Link href="/gallery" className="hover:text-slate-900">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phones[0]}`}
              className="hidden sm:inline-flex rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Call
            </a>
            <a
              href={`https://wa.me/91${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
