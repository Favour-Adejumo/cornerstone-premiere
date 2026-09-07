import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/site/PagePlaceholder";

const title = "College — Cornerstone Schools";
const description =
  "The College section at Cornerstone Schools: academic excellence and leadership development for future success.";

export const Route = createFileRoute("/college")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CollegePage,
});

function CollegePage() {
  return (
    <PagePlaceholder
      eyebrow="Our Sections"
      title="College"
      intro="Academic excellence and leadership development for future success."
    />
  );
}
