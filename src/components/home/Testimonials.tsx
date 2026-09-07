import { Quote } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const testimonials = [
  {
    quote:
      "Cornerstone has transformed my child's confidence and academic performance. The teachers are truly dedicated.",
    author: "Mrs. Thompson",
  },
  {
    quote: "A school that focuses not just on academics but also on discipline and character.",
    author: "Mr. Otitor",
  },
  {
    quote: "My daughter loves going to school every day. That alone says everything.",
    author: "Mrs. Agbebi",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-muted/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            What Parents Say
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Trusted by families for quality education and strong values.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              as="figure"
              key={item.author}
              delay={index * 80}
              className="flex h-full flex-col border-t-2 border-accent bg-background p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-primary">
                — {item.author}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
