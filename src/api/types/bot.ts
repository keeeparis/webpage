import { type BlocksContent } from "@strapi/blocks-react-renderer";

export default interface Bot {
  id: number;
  attributes: {
    title: string;
    description: string;
    url: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    rich_text: BlocksContent;
  };
}
