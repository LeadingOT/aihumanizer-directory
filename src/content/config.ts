import { defineCollection, z } from 'astro:content';

const listings = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(),
    url: z.string(),
    pricing: z.object({
      model: z.enum(['free', 'freemium', 'paid', 'custom']),
      startingPrice: z.string().optional(),
    }),
    features: z.array(z.string()),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    rating: z.number(),
    lastUpdated: z.string(),
    tags: z.array(z.string()),
  }),
});

const glossary = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    readingTime: z.number(),
    lastUpdated: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  listings,
  glossary,
};
