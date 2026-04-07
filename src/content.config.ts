import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).default([]),
    url: z.string().optional(),
    repo: z.string().optional(),
    status: z.string().default("in Aufbau"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
