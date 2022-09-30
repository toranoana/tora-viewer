import { PageBase } from './page-base';
import { PageContent } from '../interfaces/page-content';
export interface PageSize {
    width: number;
    height: number;
}
interface Props {
    index: number;
    size: PageSize;
    onTapLeft: () => void;
    onTapRight: () => void;
}
export declare class Page extends PageBase {
    #private;
    constructor(pageContent: Promise<PageContent>, props: Props);
    protected pageClasses(): string[];
    protected createElementPage(): JSX.Element;
    createThumbnailElementPage(): HTMLImageElement;
    get loaded(): boolean;
    contentLoad(): Promise<void>;
}
export {};
//# sourceMappingURL=page.d.ts.map