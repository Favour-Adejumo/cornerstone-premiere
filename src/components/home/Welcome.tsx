import { Reveal } from "@/components/site/Reveal";

export function Welcome() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <img
            src="/students.png"
            alt="Cornerstone Schools students in uniform on the school grounds"
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
            Welcome
          </p>
          <h2 className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl">
            Welcome to Cornerstone Schools
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            At Cornerstone Schools, we go beyond academics. We are committed to raising confident,
            disciplined, and purpose-driven students who are equipped to succeed in school and in
            life.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From our early years programme to our college section, we provide a structured,
            supportive environment where every child is guided to discover their strengths, build
            strong character, and achieve excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
