import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { ComponentBase } from './base';
import { ViewerDirection } from '../constants';
import { createFaIcon } from '../utils/create-fa-icon';

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

const CONTROL_VISIBLE_CLASS = 'viewer-control-area-visible';

export class ControlArea extends ComponentBase {
  #props: Props;

  #currentIndex = 0;
  #visible = true;

  #controlAreaRef: JSX.RefElement;
  #leftButtonRef: JSX.RefElement;
  #rightButtonRef: JSX.RefElement;
  #pageSelectorRef: JSX.RefElement<HTMLInputElement>;
  #settingsButtonRef: JSX.RefElement;
  #previewRef: JSX.RefElement;
  #previewPageCountRef: JSX.RefElement;

  constructor(props: Props) {
    super();

    this.#props = props;

    this.#controlAreaRef = this.createRef();
    this.#leftButtonRef = this.createRef((el) => {
      el.addEventListener('click', this.#props.onClickLeft);
    });
    this.#rightButtonRef = this.createRef((el) => {
      el.addEventListener('click', this.#props.onClickRight);
    });
    this.#pageSelectorRef = this.createRef((el) => {
      el.value = `${this.#currentIndex}`;

      const updatePreviewPageCount = () => {
        if (!this.#previewPageCountRef.current) return;

        let currentPage = Math.round(parseFloat(el.value)) + 1;
        const pageLength = this.#props.pageLength;
        if (pageLength < currentPage) {
          currentPage = pageLength;
        }
        this.#previewPageCountRef.current.innerHTML = `${currentPage} / ${pageLength}`;
      };
      el.addEventListener('input', () => {
        updatePreviewPageCount();
        this.#previewRef.current?.classList.add('viewer-preview-show');

        const index = Math.round(parseFloat(el.value));
        this.#props.onThumbnailChanged(index);
      });
      const hidePreview = () => {
        this.#previewRef.current?.classList.remove('viewer-preview-show');
      };
      el.addEventListener('input', () => {
        this.#updatePageSelectorBgColor();
      });
      el.addEventListener('focusout', hidePreview);
      el.addEventListener('mouseup', hidePreview);
      el.addEventListener('touchend', hidePreview);
      el.addEventListener('touchmove', (e) => {
        // スマホ時に端の方をスライドするとページ全体をスライドしたと認識され、
        // scrollIntoViewが効かない事があるのでtouchmoveを伝搬しないようにする
        e.stopPropagation();
      });
      el.addEventListener('change', () => {
        hidePreview();
        const index = Math.round(parseFloat(el.value));
        this.#currentIndex = index;

        this.#props.onPageSelectorChanged(index);
      });
    });
    this.#settingsButtonRef = this.createRef((el) => {
      el.addEventListener('click', () => {
        this.#props.onOpenSettings();
      });
    });

    this.#previewRef = this.createRef();
    this.#previewPageCountRef = this.createRef();
  }

  get direction(): ViewerDirection {
    return this.#props.direction;
  }

  set direction(direction: ViewerDirection) {
    const prev = this.#props.direction;
    if (prev === direction) {
      return;
    }
    this.#props.direction = direction;
    this.#updatePageSelectorBgColor();
  }

  get currentIndex() {
    return this.#currentIndex;
  }

  set currentIndex(value: number) {
    this.#currentIndex = value;
    const pageSelector = this.#pageSelectorRef.current;
    if (!pageSelector) {
      return;
    }
    pageSelector.value = `${value}`;
    this.#updatePageSelectorBgColor();
  }

  #updatePageSelectorBgColor() {
    const pageSelector = this.#pageSelectorRef.current;
    if (!pageSelector) {
      return;
    }
    const value = Math.round(parseFloat(pageSelector.value));
    const max = Math.round(parseFloat(pageSelector.max));
    const ratio = (value * 100) / max;
    const bgColor = getComputedStyle(pageSelector).getPropertyValue(
      '--viewer-page-selector-bg-color'
    );
    const activeBgColor = getComputedStyle(pageSelector).getPropertyValue(
      '--viewer-page-selector-active-bg-color'
    );
    const direction =
      this.#props.direction === 'horizontal-rtl' ? 'left' : 'right';
    pageSelector.style.background = `linear-gradient(to ${direction},${activeBgColor} ${ratio}%,${bgColor} ${ratio}%)`;
  }

  updatePageSelector(isSpreadStyle: boolean) {
    const pageSelector = this.#pageSelectorRef.current;
    if (!pageSelector) {
      return;
    }
    const value = Math.round(parseFloat(pageSelector.value));
    const max = Math.round(parseFloat(pageSelector.max));
    const pageLength = this.#props.pageLength;
    // 偶数ページの場合はblankPageは表示されないので0
    // 奇数ページの場合は見開きのときだけblankPageが表示されるので1
    // それ以外は0
    const maxValue =
      pageLength + (pageLength % 2 === 0 ? 0 : isSpreadStyle ? 1 : 0);
    pageSelector.setAttribute('max', `${maxValue}`);
    pageSelector.setAttribute('step', `${isSpreadStyle ? 2 : 1}`);
    // 値がmaxのときは変更後もmaxを維持
    if (maxValue !== max && value === max) {
      pageSelector.value = `${maxValue}`;
    }
    this.#updatePageSelectorBgColor();
  }

  get visible() {
    return this.#visible;
  }

  show() {
    this.#visible = true;
    this.#controlAreaRef.current?.classList.add(CONTROL_VISIBLE_CLASS);
  }

  hide() {
    this.#visible = false;
    this.#controlAreaRef.current?.classList.remove(CONTROL_VISIBLE_CLASS);
  }

  createElement(): JSX.Element {
    return (
      <div
        classNames={['viewer-control-area', CONTROL_VISIBLE_CLASS]}
        ref={this.#controlAreaRef}
      >
        <div classNames={['viewer-header-ctrl']}>
          {this.#props.title && (
            <h1 classNames={['viewer-title']}>
              <span classNames={['viewer-title-inner']}>
                {this.#props.title}
              </span>
            </h1>
          )}
        </div>
        <button
          ref={this.#leftButtonRef}
          classNames={['arrow-button', 'arrow-button-left']}
        >
          <i classNames={['arrow-button-inner']} />
        </button>
        <button
          ref={this.#rightButtonRef}
          classNames={['arrow-button', 'arrow-button-right']}
        >
          <i classNames={['arrow-button-inner']} />
        </button>
        <div classNames={['viewer-footer-ctrl']}>
          <input
            ref={this.#pageSelectorRef}
            classNames={['viewer-page-selector']}
            type="range"
            min={0}
            max={1}
            step={1}
            value={0}
          />
          <button
            ref={this.#settingsButtonRef}
            classNames={['view-settings-button']}
          >
            {createFaIcon(faGear)}
          </button>
        </div>
        <div classNames={['viewer-preview']} ref={this.#previewRef}>
          <div classNames={['viewer-thumbnails']}>
            {this.#props.thumbnailElements}
          </div>
          <div
            classNames={['viewer-preview-page-count']}
            ref={this.#previewPageCountRef}
          >
            0 / 0
          </div>
        </div>
      </div>
    );
  }
}
