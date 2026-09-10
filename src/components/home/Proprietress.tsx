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
            At Cornerstone Schools, we believe that every child is a precious gift, uniquely created
            with the potential to learn, grow, and make a meaningful difference in the world.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our desire is to provide more than quality education. We strive to create a warm, safe,
            and nurturing environment where every child feels seen, valued, guided, and encouraged
            to become the very best version of themselves.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We are committed to nurturing not only the minds of our students, but also their
            character, confidence, values, and sense of purpose. With the partnership of our
            dedicated staff and wonderful parents, we will continue to guide each child with love,
            patience, and care as they discover their strengths and fulfil their God-given
            potential.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Thank you for trusting us with the privilege of being part of your child's journey.
          </p>
          <p className="mt-8 font-display text-lg text-primary">— Mrs. Ayodele Adeleye</p>
          <p className="mt-1 text-sm font-semibold text-teal">Proprietress, Cornerstone Schools</p>
        </Reveal>
      </div>
    </section>
  );
}
