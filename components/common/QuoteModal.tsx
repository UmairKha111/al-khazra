"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-5 z-50 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-slate-800"
      >
        Get Quote
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-slate-900">Get a Quote</h3>

            <form className="mt-4 space-y-3">
              <input placeholder="Your Name" className="w-full border p-3 rounded-lg" />
              <input placeholder="Phone Number" className="w-full border p-3 rounded-lg" />
              <select className="w-full border p-3 rounded-lg">
                <option>Select City</option>
                {site.cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 py-3 text-white font-semibold"
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 text-sm text-slate-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
