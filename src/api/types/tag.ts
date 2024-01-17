import type Article from "./article";

export default interface Tag {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    articles?: { data: Article[] };
  };
}
