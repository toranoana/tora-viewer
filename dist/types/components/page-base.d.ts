import { ComponentBase } from './base';
interface Props {
    index: number;
    onTapLeft: () => void;
    onTapRight: () => void;
}
export declare abstract class PageBase extends ComponentBase {
    #private;
    readonly index: number;
    constructor(props: Props);
    get element(): HTMLElement | null;
    get thumbnailElement(): HTMLElement | null;
    setup(func: (el: HTMLElement) => void): void;
    showLoading(): void;
    hideLoading(): void;
    createElement(): JSX.Element;
    createThumbnailElement(): JSX.Element;
    protected pageClasses(): string[];
    protected abstract createElementPage(): JSX.Element;
    protected createThumbnailElementPage(): HTMLElement;
}
export {};
//# sourceMappingURL=page-base.d.ts.map