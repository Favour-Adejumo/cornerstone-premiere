import { Link } from "@tanstack/react-router";

export function PagePlaceholder({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-28 pt-36 sm:px-8 lg:pt-44">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">{eyebrow}</p>
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>
      <p className="mt-10 border-l-2 border-accent pl-5 text-sm text-muted-foreground">
        Full details for this page are coming soon.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </main>
  );
}
