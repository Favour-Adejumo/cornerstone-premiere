import { createFileRoute } from "@tanstack/react-router";

import { PagePlaceholder } from "@/components/site/PagePlaceholder";

const title = "Co-curricular — Cornerstone Schools";
const description =
  "Co-curricular life at Cornerstone Schools: sports, clubs, and creative programmes that develop talents beyond the classroom.";

export const Route = createFileRoute("/co-curricular")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CoCurricularPage,
});

function CoCurricularPage() {
  return (
    <PagePlaceholder
      eyebrow="Student Life"
      title="Co-curricular"
      intro="Sports, clubs, and creative programmes that develop talents beyond the classroom."
    />
  );
}
