export default interface Global {
  id: number;
  attributes: {
    header: {
      id: number;
      logo?: string;
    };
    footer: {
      id: number;
      telegram: string;
      instagram: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
