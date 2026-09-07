import {
  BookOpen,
  GraduationCap,
  Shield,
  Sparkles,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const offers: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description: "Dedicated and passionate educators committed to every student's success.",
  },
  {
    icon: BookOpen,
    title: "Modern Learning",
    description: "Interactive classrooms and engaging teaching methods for effective learning.",
  },
  {
    icon: Shield,
    title: "Strong Values",
    description: "We build discipline, integrity, and leadership in every student.",
  },
  {
    icon: Users,
    title: "Safe Environment",
    description: "A secure and supportive atmosphere where students can learn with confidence.",
  },
  {
    icon: Trophy,
    title: "Extracurricular Activities",
    description: "Sports, clubs, and creative programmes that develop talents beyond the classroom.",
  },
  {
    icon: Sparkles,
    title: "Personalised Growth",
    description: "We support each child's unique strengths to help them reach their full potential.",
  },
];

export function Offer() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We provide a well-rounded educational experience that supports both academic and
            personal growth.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
          {offers.map((offer, index) => (
            <Reveal as="li" key={offer.title} delay={index * 60} className="group border-t border-border pt-6">
              <offer.icon
                className="size-6 text-teal transition-colors duration-300 group-hover:text-accent"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary">{offer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {offer.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
