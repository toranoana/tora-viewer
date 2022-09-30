import { ComponentBase } from './base';
import { ViewerDirection } from '../constants';
interface Props {
    title: string;
    pageLength: number;
    direction: ViewerDirection;
    thumbnailElements: JSX.Element[];
    onOpenSettings: () => void;
    onClickLeft: () => void;
    onClickRight: () => void;
    onThumbnailChanged: (index: number) => void;
    onPageSelectorChanged: (index: number) => void;
}
export declare class ControlArea extends ComponentBase {
    #private;
    constructor(props: Props);
    get direction(): ViewerDirection;
    set direction(direction: ViewerDirection);
    get currentIndex(): number;
    set currentIndex(value: number);
    updatePageSelector(isSpreadStyle: boolean): void;
    get visible(): boolean;
    show(): void;
    hide(): void;
    createElement(): JSX.Element;
}
export {};
//# sourceMappingURL=control-area.d.ts.map