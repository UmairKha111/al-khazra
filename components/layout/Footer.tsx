import Container from "../ui/Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-bold text-slate-900">{site.name}</p>
            <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
            <p className="mt-3 text-sm text-slate-600">
              {site.cities.join(" • ")}
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="/packages">Packages</a></li>
              <li><a className="hover:text-slate-900" href="/gallery">Gallery</a></li>
              <li><a className="hover:text-slate-900" href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Contact</p>
            <p className="mt-3 text-sm text-slate-600">
              Phone: {site.phones.join(" / ")}
            </p>
            <a
              className="mt-3 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              href={`https://wa.me/91${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="pb-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
