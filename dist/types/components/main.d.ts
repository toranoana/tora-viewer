import { ComponentBase } from './base';
import { Page, type PageSize } from './page';
import { PageStyle, ViewerDirection } from '../constants';
import { PageContent } from '../interfaces/page-content';
export interface BaseProps {
    pageSize: PageSize;
    pageStyle: PageStyle;
    direction: ViewerDirection;
    modal: boolean;
    title: string;
    controlShowTime: number;
    lastPageElement?: HTMLElement;
}
interface Props extends BaseProps {
    onDispose: () => void;
}
declare type CurrentIndexChangeHandler = (index: number) => void;
export declare class Main extends ComponentBase {
    #private;
    /** コンテンツのページ一覧 */
    readonly pages: Page[];
    constructor(pageContents: Promise<PageContent>[], props: Props);
    get pageStyle(): PageStyle;
    set pageStyle(pageStyle: PageStyle);
    get direction(): ViewerDirection;
    set direction(direction: ViewerDirection);
    openSettings(): void;
    closeSettings(): void;
    createElement(): JSX.Element;
    get currentIndex(): number;
    get isLastPage(): boolean;
    onCurrentIndexChanged(handler: CurrentIndexChangeHandler): void;
    goBack(): void;
    goNext(): void;
    goLeft(): void;
    goRight(): void;
    goTo(index: number): void;
}
export {};
//# sourceMappingURL=main.d.ts.map