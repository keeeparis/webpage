import { defineCollection, z } from 'astro:content';

const botCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    page_description: z.string(),
    card_description: z.string(),
    meta_description: z.string(),
    href: z.string(),
    date: z.date()
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    page_description: z.string(),
    card_description: z.string(),
    meta_description: z.string(),
    href: z.string(),
    date: z.date()
  })
});

export const collections = {
  bot: botCollection,
  blog: blogCollection
};
