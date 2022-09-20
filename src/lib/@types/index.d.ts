type PageContent =
  | string
  | {
      url: string;
      thumbnailUrl?: string;
      width?: number;
      height?: number;
    };
