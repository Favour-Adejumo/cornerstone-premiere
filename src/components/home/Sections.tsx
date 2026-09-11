import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const sections = [
  {
    name: "Tenderly",
    to: "/tenderly",
    description: "Strong foundation for young learners through creativity and care.",
    image: "/tenderly.jpg.jpeg",
  },
  {
    name: "College",
    to: "/college",
    description: "Academic excellence and leadership development for future success.",
    image: "/college.jpg",
  },
] as const;

export function Sections() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Our Sections
        </h2>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          From early learning to college, we provide a strong academic journey for every student.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {sections.map((section, index) => (
          <Reveal key={section.name} delay={index * 90}>
            <Link
              to={section.to}
              className="group block h-full border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={section.image}
                  alt={`${section.name} at Cornerstone Schools`}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {section.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
