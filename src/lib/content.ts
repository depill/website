import { getCollection, type CollectionEntry } from "astro:content";
export const publishedWriting = async () =>
  (
    await getCollection(
      "writing",
      ({ data }) => !data.draft && data.date <= new Date(),
    )
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
export const publishedDocs = async () =>
  (
    await getCollection(
      "docs",
      ({ data }) => !data.draft && data.date <= new Date(),
    )
  ).sort(
    (a, b) =>
      a.data.section.localeCompare(b.data.section) ||
      a.data.order - b.data.order ||
      a.data.title.localeCompare(b.data.title),
  );
export const entryUrl = (
  entry: CollectionEntry<"writing"> | CollectionEntry<"docs">,
) => `/${entry.collection}/${entry.id}/`;
export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
export const readingTime = (body = "") =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 220));
