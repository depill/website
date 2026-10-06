import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const common = {
  lang: z.enum(["en", "is"]).default("en"),
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  comments: z.boolean().default(true),
};

export const collections = {
  writing: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
    schema: z.object({
      ...common,
      kind: z.enum(["post", "article"]).default("post"),
    }),
  }),
  docs: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
    schema: z.object({
      ...common,
      section: z.string().default("Notes"),
      order: z.number().default(0),
    }),
  }),
};
