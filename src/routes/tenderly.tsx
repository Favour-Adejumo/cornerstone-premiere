import { createFileRoute } from "@tanstack/react-router";
import { Palette, BookOpen, Shapes, Compass } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const title = "Tenderly — Cornerstone Schools";
const description =
  "Tenderly at Cornerstone Schools: a strong foundation for young learners through creativity and care.";

export const Route = createFileRoute("/tenderly")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TenderlyPage,
});

const learningCards = [
  {
    icon: Palette,
    title: "Creative Expression",
    description:
      "Art, music, stories, movement, and imaginative activities that encourage children to express themselves.",
  },
  {
    icon: BookOpen,
    title: "Early Literacy",
    description:
      "Building vocabulary, listening skills, phonics awareness, storytelling, and a love for books.",
  },
  {
    icon: Shapes,
    title: "Early Numeracy",
    description:
      "Introducing numbers, patterns, shapes, counting, sorting, and simple mathematical thinking.",
  },
  {
    icon: Compass,
    title: "Discovery & Exploration",
    description:
      "Hands-on experiences that encourage curiosity and help children understand the world around them.",
  },
];

function TenderlyPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden lg:min-h-[75vh]">
        <img
          src="/tenderly-hero.jpg"
          alt="Tenderly early years learning environment at Cornerstone Schools"
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--primary)_78%,transparent)_0%,color-mix(in_oklab,var(--primary)_55%,transparent)_50%,transparent_85%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--primary)_65%,transparent),transparent_50%)]"
        />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-8 lg:min-h-[75vh] lg:items-center lg:pb-24">
          <div className="max-w-2xl text-primary-foreground">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Our Early Years
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Tenderly
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">
              A nurturing beginning where little minds grow, curious hearts flourish, and every
              child is lovingly guided to discover the joy of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Where Every Beginning Matters */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src="/tenderly-learning.jpg"
              alt="Young learners engaged in classroom activities at Cornerstone Schools"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b-4 border-l-4 border-accent sm:block"
            />
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={80}>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              Foundation
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl">
              Where Every Beginning Matters
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The early years are the foundation upon which a child's future is built. At
              Cornerstone Schools, we create a warm and stimulating environment where our youngest
              learners feel safe, loved, and confident to explore the world around them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Through purposeful play, guided discovery, creativity, and gentle instruction, we help
              children develop the confidence, independence, social skills, and early academic
              foundations they need for the journey ahead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Learning Through Play */}
      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              Learning Through Play
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Learning Through Play
            </h2>
            <p className="mt-4 text-base font-medium text-foreground/90">
              Play is a child's first language.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our approach combines structured learning with purposeful play, allowing children to
              learn naturally while developing their imagination, communication, coordination, and
              problem-solving abilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Four Learning Cards */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {learningCards.map((card, index) => (
            <Reveal
              as="article"
              key={card.title}
              delay={index * 70}
              className="group border border-border bg-card p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <card.icon
                className="size-6 text-teal transition-colors duration-300 group-hover:text-accent"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
