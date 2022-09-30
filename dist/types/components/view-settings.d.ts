import { ComponentBase } from './base';
import { PageStyle, ViewerDirection } from '../constants';
interface Props {
    onSettingsChange: (settings: Settings) => void;
}
interface Settings {
    pageStyle: PageStyle;
    direction: ViewerDirection;
}
export declare class ViewSettings extends ComponentBase {
    #private;
    constructor(props: Props);
    show(settings: Settings): void;
    close(): void;
    createElement(): JSX.Element;
}
export {};
//# sourceMappingURL=view-settings.d.ts.map