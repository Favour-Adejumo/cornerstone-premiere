import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src="/students.png"
        alt="The Cornerstone Schools campus at sunset"
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--primary)_88%,transparent)_0%,color-mix(in_oklab,var(--primary)_60%,transparent)_45%,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--primary)_70%,transparent),transparent_45%)]"
      />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:items-center lg:pb-24">
        <div className="max-w-2xl text-primary-foreground">
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            Exalted of God
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Building Confident, Disciplined and Future-Ready Students
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">
            At Cornerstone Schools, we combine strong academic excellence with character development
            to prepare your child for success in life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              hash="admissions"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Apply for Admission
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/about"
              hash="visit"
              className="inline-flex items-center gap-2 border border-primary-foreground/50 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground/10"
            >
              Visit the School
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
