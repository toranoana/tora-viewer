import './styles/index.scss';
import { PageContent } from './interfaces/page-content';
import { Viewer, BaseProps } from './viewer';
interface Options extends Partial<BaseProps> {
    insertTarget?: HTMLElement | 'string';
}
declare function main(pageContents: (PageContent | Promise<PageContent>)[], options?: Options): Viewer;
declare namespace main {
    var asyncLoadBuilder: typeof import("./utils/async-load-builder").asyncLoadBuilder;
}
export default main;
//# sourceMappingURL=index.d.ts.map