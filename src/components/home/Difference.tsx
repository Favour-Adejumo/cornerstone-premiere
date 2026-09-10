import { Reveal } from "@/components/site/Reveal";

const items = [
  {
    title: "Excellence in Conduct",
    description: "We uphold high standards of discipline, respect, and personal behaviour.",
  },
  {
    title: "Vibrant Learning Environment",
    description: "A welcoming and energetic atmosphere where every child feels motivated to grow.",
  },
  {
    title: "Pastoral Care & Support",
    description: "We nurture each student with strong guidance, mentorship, and study development.",
  },
  {
    title: "Passionate Educators",
    description: "Our teachers and students are driven, enthusiastic, and committed to success.",
  },
  {
    title: "Structured Academic Approach",
    description: "A well-organized curriculum designed to deliver clarity, progress, and results.",
  },
  {
    title: "Digital & Future-Ready Learning",
    description:
      "We equip students with the skills, creativity, and confidence to thrive in a rapidly changing world.",
  },
];

export function Difference() {
  return (
    <section className="border-y border-border bg-muted/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-foreground/70">
            What Defines Us
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            The Cornerstone Difference
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 70}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-primary lg:p-10"
            >
              <span className="font-display text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-primary-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80">
                {item.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
