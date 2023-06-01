import './styles/index.scss';
import { defaultPageHeight, defaultPageWidth } from './constants';
import { LoadablePageContent, PageContent } from './interfaces/page-content';
import { Viewer, BaseProps } from './viewer';

import { asyncLoadBuilder } from './utils/async-load-builder';

interface Options extends Partial<BaseProps> {
  insertTarget?: HTMLElement | 'string';
}

function main(
  pageContents: (PageContent | Promise<PageContent> | LoadablePageContent)[],
  options?: Options
) {
  const opt = normalizeOptions(options);
  const insertTarget = options?.insertTarget;
  let parent;
  if (opt.modal) {
    parent = document.body;
  } else {
    parent =
      typeof insertTarget === 'string'
        ? document.querySelector(insertTarget)
        : insertTarget;
  }
  if (parent == null) {
    throw `Missing element: ${insertTarget}`;
  }

  return new Viewer(
    pageContents.map((c) => {
      if (typeof c !== 'string' && 'load' in c) {
        return c;
      }
      return {
        load: () => Promise.resolve(c),
      };
    }),
    {
      parent,
      ...opt,
    }
  );
}

main.asyncLoadBuilder = asyncLoadBuilder;

export default main;

function normalizeOptions(options?: Options): BaseProps {
  const pageSize = options?.pageSize || {
    width: defaultPageWidth,
    height: defaultPageHeight,
  };
  const pageStyle = options?.pageStyle || 'auto';
  const direction = options?.direction || 'horizontal-rtl';
  // modal未設定でinsertTarget指定なし時はmodal表示
  const modal =
    options?.modal ?? (options?.insertTarget === undefined ? true : false);
  return {
    pageSize,
    pageStyle,
    direction,
    modal,
    title: options?.title ?? '',
    controlShowTime: options?.controlShowTime ?? 3000,
    lastPageElement: options?.lastPageElement,
  };
}
