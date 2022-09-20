// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { PageBase } from './page-base';

interface Props {
  index: number;
  element?: HTMLElement;
  onTapLeft: () => void;
  onTapRight: () => void;
  onDispose: () => void;
}

export class EmbedPage extends PageBase {
  readonly index: number;
  #element: HTMLElement | undefined;
  #closeButtonRef: JSX.RefElement;

  constructor(props: Props) {
    super(props);

    this.index = props.index;
    this.#element = props.element;

    this.#closeButtonRef = this.createRef((el) => {
      el.addEventListener('click', () => props.onDispose());
    });
  }

  protected pageClasses(): string[] {
    return ['embed-page'];
  }

  protected createElementPage() {
    return (
      <div classNames={['embed-page-inner']}>
        {this.#element ? (
          this.#element
        ) : (
          <div classNames={['embed-page-default']}>
            <button
              classNames={['embed-page-default-close']}
              ref={this.#closeButtonRef}
            >
              閉じる
            </button>
          </div>
        )}
      </div>
    );
  }
}
