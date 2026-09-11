import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Brain, BriefcaseBusiness, Compass, Laptop, Target } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const title = "College — Cornerstone Schools";
const description =
  "A challenging and supportive academic environment where students develop knowledge, character, confidence, and leadership skills.";

export const Route = createFileRoute("/college")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollegePage,
});

function CollegePage() {
  const academicCards = [
    {
      icon: BookOpen,
      title: "Strong Academic Foundation",
      description:
        "A well-structured curriculum that builds deep understanding across core subjects.",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description:
        "Students are encouraged to question, analyse, solve problems, and develop independent thought.",
    },
    {
      icon: Laptop,
      title: "Practical Learning",
      description:
        "We connect classroom knowledge with practical experiences, projects, technology, and real-world applications.",
    },
    {
      icon: Target,
      title: "Examination Readiness",
      description:
        "Focused preparation for internal and external examinations, with students guided toward their academic goals.",
    },
  ];

  const futureItems = [
    {
      icon: Compass,
      title: "Academic Guidance",
      description: "Helping students understand their strengths and make informed academic choices.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Awareness",
      description: "Exposing students to different professions, industries, and future opportunities.",
    },
    {
      icon: Target,
      title: "Examination Preparation",
      description:
        "Supporting students as they prepare for important internal and external examinations.",
    },
    {
      icon: Laptop,
      title: "Life Skills",
      description:
        "Developing communication, collaboration, problem-solving, digital literacy, and personal responsibility.",
    },
  ];

  const testimonials = [
    {
      name: "Otitor Emmanuel",
      role: "Outgoing Head Boy — 2025/2026",
      image: "/headboy.jpeg",
      quote:
        "Cornerstone Schools has helped change my mindset and given me the foundation I need to prepare for my future. Through the guidance of experienced teachers and professionals, I have gained knowledge beyond the classroom and had opportunities for practical, hands-on learning rather than relying on theory alone. These experiences have greatly strengthened my confidence, skills, and readiness for the next stage of my journey.",
    },
    {
      name: "Agbebi Deborah",
      role: "Outgoing Head Girl — 2025/2026",
      image: "/headgirl.jpeg",
      quote:
        "My time at Cornerstone Schools has helped me become a better student and a more confident individual. As I pursue my ambition of becoming a medical practitioner, the academic skills and confidence I have developed here will continue to guide me in the future. Serving as Head Girl has also taught me responsibility, leadership, and the importance of believing in myself.",
    },
  ];

  return (
    <main>
      <section className="relative isolate min-h-[70vh] overflow-hidden lg:min-h-[75vh]">
        <img
          src="/college-hero.jpeg"
          alt="Cornerstone Schools College students"
          fetchPriority="high"
          className="absolute inset-0 -z-10 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--primary)_88%,transparent)_0%,color-mix(in_oklab,var(--primary)_65%,transparent)_52%,color-mix(in_oklab,var(--primary)_20%,transparent)_100%)]"
        />
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-8 lg:min-h-[75vh] lg:items-center lg:pb-24">
          <div className="max-w-2xl text-primary-foreground">
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-accent">
              <span className="h-px w-10 shrink-0 bg-accent" aria-hidden="true" />
              College
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Preparing Students for What Comes Next
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 sm:text-lg">
              A challenging and supportive academic environment where students develop knowledge,
              character, confidence, and the leadership skills to pursue their ambitions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Built for Academic Excellence
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our College programme is designed to challenge students intellectually while giving them
            the support they need to succeed. We combine a structured curriculum with practical
            learning, critical thinking, and continuous assessment to help every student reach their
            potential.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
          {academicCards.map((card, index) => (
            <Reveal
              as="article"
              key={card.title}
              delay={index * 70}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-primary lg:p-10"
            >
              <card.icon className="size-6 text-teal group-hover:text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-primary group-hover:text-primary-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">
                {card.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Beyond the classroom</p>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Preparing for the Future
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Our responsibility extends beyond the classroom. We help students understand their
                strengths, explore their interests, set meaningful goals, and prepare confidently
                for the opportunities that lie ahead.
              </p>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2">
              {futureItems.map((item, index) => (
                <Reveal as="article" key={item.title} delay={index * 70} className="border-t-2 border-accent pt-6">
                  <item.icon className="size-5 text-teal" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Hear from two of our student leaders from the 2025/2026 academic session.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="figure"
              key={testimonial.name}
              delay={index * 90}
              className="grid overflow-hidden border border-border bg-card sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="aspect-square w-full object-cover border-0 border-b sm:aspect-auto sm:min-h-full sm:border-r sm:border-b-0"
              />
              <div className="min-w-0 p-7 sm:p-8">
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-lg font-semibold text-primary">{testimonial.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                    {testimonial.role}
                  </p>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
