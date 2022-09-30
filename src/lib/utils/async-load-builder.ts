import { defaultLoadImageLimit } from '../constants';
import { PageContent } from '../interfaces/page-content';

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

  build(pageCount: number): Promise<PageContent>[] {
    const load = this.load;
    const limit = this.loadLimit;

    // loadを順次実行させるためのPromise
    let seriesPromise = Promise.resolve<PageContent[]>([]);
    const pageContents: Promise<PageContent>[][] = [];
    for (let offset = 0; offset < pageCount; offset += limit) {
      const l = pageCount - offset >= limit ? limit : pageCount - offset;
      const current = (seriesPromise = seriesPromise.then(() =>
        load(l, offset)
      ));
      pageContents.push(
        Array(l)
          .fill(0)
          .map((_, i) => current.then((contents) => contents[i]))
      );
    }
    return pageContents.flat();
  }
}
