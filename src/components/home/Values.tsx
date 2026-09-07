import backdrop from "@/assets/school-backdrop.asset.json";
import { Reveal } from "@/components/site/Reveal";

export function Values() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={backdrop.url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover object-bottom"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[color-mix(in_oklab,var(--teal)_82%,transparent)]"
      />
      <div className="mx-auto max-w-4xl px-5 py-24 text-center text-primary-foreground sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Strong Educational Values
          </h2>
          <span aria-hidden="true" className="mx-auto mt-8 block h-px w-16 bg-accent" />
          <p className="mt-8 text-base leading-relaxed opacity-90 sm:text-lg">
            We blend proven teaching methods with modern learning practices.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
