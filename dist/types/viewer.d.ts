export { type BaseProps } from './components/main';
import { type BaseProps } from './components/main';
interface Props extends BaseProps {
    parent: Element;
}
export declare class Viewer {
    #private;
    constructor(pageContents: Promise<PageContent>[], { parent, ...props }: Props);
    get pages(): import("./components/page").Page[];
    get disposed(): boolean;
    goBack(): void;
    goNext(): void;
    goLeft(): void;
    goRight(): void;
    goTo(index: number): void;
    dispose(): void;
}
//# sourceMappingURL=viewer.d.ts.map