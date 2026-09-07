import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";

export function ClosingCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Start Your Child's Journey Today
          </h2>
          <p className="mt-5 text-base leading-relaxed opacity-85">
            Give your child the opportunity to learn, grow, and succeed in a supportive and
            structured environment at Cornerstone Schools.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              hash="admissions"
              className="bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              hash="contact"
              className="border border-primary-foreground/50 px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
