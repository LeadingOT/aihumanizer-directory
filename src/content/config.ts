import { defineCollection, z } from 'astro:content';

const listings = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    category: z.string(),
    pricing: z.object({
      model: z.string(),
      startingPrice: z.string().optional(),
    }),
    rating: z.number().optional(),
    tags: z.array(z.string()),
    website: z.string(),
    description: z.string().optional(),
    features: z.array(z.string()).optional(),
  }),
});

export const collections = { listings };
