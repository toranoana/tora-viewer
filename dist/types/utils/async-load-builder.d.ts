export declare function asyncLoadBuilder(load: (limit: number, offset: number) => Promise<PageContent[]>): AsyncLoadBuilder;
declare class AsyncLoadBuilder {
    private load;
    private loadLimit;
    constructor(load: (limit: number, offset: number) => Promise<PageContent[]>);
    limit(value: number): this;
    build(pageCount: number): Promise<PageContent>[];
}
export {};
//# sourceMappingURL=async-load-builder.d.ts.map