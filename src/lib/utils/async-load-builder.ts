import { defaultLoadImageLimit } from '../constants';
import { LoadablePageContent, PageContent } from '../interfaces/page-content';

export function asyncLoadBuilder(
  load: (limit: number, offset: number) => Promise<PageContent[]>
) {
  return new AsyncLoadBuilder(load);
}

class AsyncLoadBuilder {
  private loadLimit = defaultLoadImageLimit;

  constructor(
    private load: (limit: number, offset: number) => Promise<PageContent[]>
  ) {}

  limit(value: number) {
    this.loadLimit = value;
    return this;
  }

  build(pageCount: number): LoadablePageContent[] {
    const load = this.load;
    const limit = this.loadLimit;

    // loadを順次実行させるためのPromise
    const loadablePageContents: LoadablePageContent[][] = [];
    for (let offset = 0; offset < pageCount; offset += limit) {
      const l = pageCount - offset >= limit ? limit : pageCount - offset;
      let current: Promise<PageContent[]> | null = null;

      loadablePageContents.push(
        Array(l)
          .fill(0)
          .map((_, i) => ({
            load: async () => {
              if (!current) {
                current = load(l, offset);
              }
              const contents = await current;
              return contents[i];
            },
          }))
      );
    }
    return loadablePageContents.flat();
  }
}
