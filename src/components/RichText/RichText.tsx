import React from "react";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

import styles from "./RichText.module.scss";

export const RichText = (props: { content: BlocksContent }) => {
  return (
    <div className={styles.container}>
      <BlocksRenderer
        content={props.content}
        blocks={{
          link: ({ url, children }) => (
            <a className={styles.link} href={url} target="_blank">
              {children}
            </a>
          )
        }}
      />
    </div>
  );
};
