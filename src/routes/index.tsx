import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta } from "@/components/home/ClosingCta";
import { Difference } from "@/components/home/Difference";
import { Hero } from "@/components/home/Hero";
import { Offer } from "@/components/home/Offer";
import { Proprietress } from "@/components/home/Proprietress";
import { Sections } from "@/components/home/Sections";
import { Stats } from "@/components/home/Stats";
import { Values } from "@/components/home/Values";
import { Welcome } from "@/components/home/Welcome";

const title = "Cornerstone Schools — Exalted of God | Apata, Ibadan";
const description =
  "Cornerstone Schools combines academic excellence with character development to raise confident, disciplined and future-ready students.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Difference />
      <Values />
      <Sections />
      <Stats />
      <Proprietress />
      <Offer />
      <ClosingCta />
    </main>
  );
}
