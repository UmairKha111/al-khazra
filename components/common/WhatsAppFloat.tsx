"use client";

import { site } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/91${site.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-700"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
