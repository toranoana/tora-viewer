export const appName = 'tora-viewer';

export const pageStyles = ['normal', 'spread', 'auto'] as const;

export type PageStyle = typeof pageStyles[number];

export const viewerDirections = ['horizontal-ltr', 'horizontal-rtl'] as const;

export type ViewerDirection = typeof viewerDirections[number];

export const defaultPageWidth = 840;
export const defaultPageHeight = 1188;

export const defaultLoadImageLimit = 20;
