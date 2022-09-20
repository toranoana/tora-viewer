// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { ComponentBase } from './base';

interface Props {
  index: number;
  onTapLeft: () => void;
  onTapRight: () => void;
}

export abstract class PageBase extends ComponentBase {
  readonly index: number;

  #props: Props;

  #loading = false;

  #pageRef: JSX.RefElement;
  #thumbnailPageRef: JSX.RefElement;
  #loadingRef: JSX.RefElement;
  #tapAreaLeftRef: JSX.RefElement;
  #tapAreaRightRef: JSX.RefElement;

  constructor(props: Props) {
    super();

    this.index = props.index;

    this.#props = props;

    this.#pageRef = this.createRef();
    this.#thumbnailPageRef = this.createRef();
    this.#loadingRef = this.createRef();

    this.#tapAreaLeftRef = this.createRef((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.#props.onTapLeft();
      });
    });
    this.#tapAreaRightRef = this.createRef((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.#props.onTapRight();
      });
    });
  }

  get element() {
    return this.#pageRef.current;
  }

  get thumbnailElement() {
    return this.#thumbnailPageRef.current;
  }

  setup(func: (el: HTMLElement) => void) {
    this.#pageRef.setup = func;
    if (this.#pageRef.current) {
      func(this.#pageRef.current);
    }
  }

  showLoading() {
    this.#loading = true;
    this.#loadingRef.current?.classList.add('viewer-page-loading-active');
  }

  hideLoading() {
    this.#loading = false;
    this.#loadingRef.current?.classList.remove('viewer-page-loading-active');
  }

  createElement() {
    return (
      <p
        ref={this.#pageRef}
        classNames={['viewer-page', ...this.pageClasses()]}
      >
        {this.createElementPage()}
        <div
          ref={this.#loadingRef}
          classNames={
            this.#loading
              ? ['viewer-page-loading', 'viewer-page-loading-active']
              : ['viewer-page-loading']
          }
        ></div>
        <div
          ref={this.#tapAreaLeftRef}
          classNames={['viewer-page-tap-area', 'viewer-page-area-left']}
        />
        <div
          ref={this.#tapAreaRightRef}
          classNames={['viewer-page-tap-area', 'viewer-page-area-right']}
        />
      </p>
    );
  }

  createThumbnailElement() {
    return (
      <p classNames={['viewer-page-thumbnail']} ref={this.#thumbnailPageRef}>
        {this.createThumbnailElementPage()}
      </p>
    );
  }

  protected pageClasses(): string[] {
    return [];
  }

  protected abstract createElementPage(): JSX.Element;

  protected createThumbnailElementPage(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add('viewer-page-thumbnail-inner');
    return div;
  }
}
