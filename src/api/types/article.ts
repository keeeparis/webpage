import { type BlocksContent } from "@strapi/blocks-react-renderer";

import type { MainImage } from "./common";
import type Author from "./author";
import type Tag from "./tag";

export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    rich_text: BlocksContent;
    main_image?: MainImage;
    tags?: { data: Tag[] };
    author?: { data: Author[] };
  };
}
