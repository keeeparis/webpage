import type Article from "./article";

export default interface Author {
  id: number;
  attributes: {
    name: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    articles?: { data: Article[] };
  };
}
