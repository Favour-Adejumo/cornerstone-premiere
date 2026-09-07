import { Reveal } from "@/components/site/Reveal";

/**
 * Real figures are not available yet. Add a `value` string to any item below
 * and it will render in place of the placeholder automatically.
 */
const stats: { label: string; value?: string }[] = [
  { label: "Hours of Classes Taught" },
  { label: "Years of Experience" },
  { label: "Students Graduated" },
];

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-px bg-primary-foreground/15 px-5 sm:px-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 80}
            className="bg-primary px-4 py-14 text-center lg:py-20"
          >
            {stat.value ? (
              <p className="font-display text-4xl font-semibold text-accent sm:text-5xl">
                {stat.value}
              </p>
            ) : (
              <p
                aria-label="Figure coming soon"
                className="font-display text-4xl font-semibold text-accent/45 sm:text-5xl"
              >
                ——
              </p>
            )}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] opacity-80">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
