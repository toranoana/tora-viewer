interface JSXFactory {
    h: (tag: string | JSX.Fragment, props: JSX.ElementProps, ...children: JSX.ElementChild[]) => JSX.Element;
    fragment: JSX.Fragment;
}
export declare const jsxFactory: JSXFactory;
export declare abstract class ComponentBase {
    protected createRef<E extends HTMLElement = HTMLElement>(setup?: (element: E) => void): JSX.RefElement<E>;
    abstract createElement(): JSX.Element;
}
export {};
//# sourceMappingURL=base.d.ts.map