import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/site/PagePlaceholder";

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

function TenderlyPage() {
  return (
    <PagePlaceholder
      eyebrow="Our Sections"
      title="Tenderly"
      intro="Strong foundation for young learners through creativity and care."
    />
  );
}
