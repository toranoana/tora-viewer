import { PageBase } from './page-base';
interface Props {
    index: number;
    element?: HTMLElement;
    onTapLeft: () => void;
    onTapRight: () => void;
    onDispose: () => void;
}
export declare class EmbedPage extends PageBase {
    #private;
    readonly index: number;
    constructor(props: Props);
    protected pageClasses(): string[];
    protected createElementPage(): JSX.Element;
}
export {};
//# sourceMappingURL=embed-page.d.ts.map