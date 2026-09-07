import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const title = "About & Admissions — Cornerstone Schools";
const description =
  "About Cornerstone Schools, Apata, Ibadan. Admissions ongoing for the 2026/27 session — reach us by phone or email to apply or arrange a school visit.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-36 sm:px-8 lg:pt-44">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Exalted of God</p>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
        About Cornerstone Schools
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        At Cornerstone Schools, we go beyond academics. We are committed to raising confident,
        disciplined, and purpose-driven students who are equipped to succeed in school and in life.
      </p>

      <section id="admissions" className="mt-16 scroll-mt-28 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-semibold text-primary">Admissions</h2>
        <p className="mt-3 text-base text-muted-foreground">
          Admissions ongoing for 2026/27 session. Please contact the school to begin an application.
        </p>
      </section>

      <section id="visit" className="mt-12 scroll-mt-28 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-semibold text-primary">Visit the School</h2>
        <p className="mt-3 text-base text-muted-foreground">
          You are welcome to visit us at our campus in Apata, Ibadan. Call ahead to arrange a
          convenient time.
        </p>
      </section>

      <section id="contact" className="mt-12 scroll-mt-28 border-t border-border pt-10">
        <h2 className="font-display text-2xl font-semibold text-primary">Contact</h2>
        <ul className="mt-5 space-y-4 text-base">
          <li className="flex gap-3">
            <MapPin className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
            <span className="text-muted-foreground">Olakunle Bus-stop, Apata, Ibadan</span>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
            <a href="tel:+2349064367102" className="text-primary hover:underline">
              +2349064367102
            </a>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-1 size-4 shrink-0 text-teal" aria-hidden="true" />
            <a
              href="mailto:cornerstoneschools1@gmail.com"
              className="break-all text-primary hover:underline"
            >
              cornerstoneschools1@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
