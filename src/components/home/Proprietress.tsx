import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Reveal } from "@/components/site/Reveal";

export function Proprietress() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <ImagePlaceholder
            label="Proprietress photograph"
            className="aspect-4/5 w-full max-w-md"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
            From the Proprietress
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            A word from our Proprietress
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            At Cornerstone Schools, our mission is to raise not just academically sound students,
            but disciplined, confident, and purpose-driven individuals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We are committed to providing a safe, structured, and inspiring environment where every
            child can grow, discover their strengths, and achieve excellence.
          </p>
          <p className="mt-8 font-display text-lg text-primary">— Mrs. Ayodele Adeleye</p>
        </Reveal>
      </div>
    </section>
  );
}
