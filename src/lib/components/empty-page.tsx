// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { PageBase } from './page-base';

interface Props {
  index: number;
  onTapLeft: () => void;
  onTapRight: () => void;
}

export class EmptyPage extends PageBase {
  readonly index: number;

  constructor(props: Props) {
    super(props);

    this.index = props.index;
  }

  protected pageClasses(): string[] {
    return ['empty-page'];
  }

  protected createElementPage() {
    return <div classNames={['empty-page-inner']} />;
  }
}
