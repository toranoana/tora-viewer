import { PageBase } from './page-base';
interface Props {
    index: number;
    onTapLeft: () => void;
    onTapRight: () => void;
}
export declare class EmptyPage extends PageBase {
    readonly index: number;
    constructor(props: Props);
    protected pageClasses(): string[];
    protected createElementPage(): JSX.Element;
}
export {};
//# sourceMappingURL=empty-page.d.ts.map