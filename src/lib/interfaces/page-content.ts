export type PageContent =
  | string
  | {
      url: string;
      thumbnailUrl?: string;
      width?: number;
      height?: number;
    };

export interface LoadablePageContent {
  load: () => Promise<PageContent>;
}
