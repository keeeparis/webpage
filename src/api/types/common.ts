export interface MainImage {
  data: {
    id: number;
    attributes: {
      name: string;
      caption?: string;
      width: number;
      height: number;
      formats: {
        large: Format;
        small: Format;
        medium: Format;
        thumbnail: Format;
      };
      url: string;
    };
  } | null;
}

type Format = {
  url: string;
  width: number;
  height: number;
};
