import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { ComponentBase } from './base';
import { createFaIcon } from '../utils/create-fa-icon';
import {
  PageStyle,
  ViewerDirection,
  pageStyles,
  viewerDirections,
} from '../constants';

interface Props {
  onSettingsChange: (settings: Settings) => void;
}

interface Settings {
  pageStyle: PageStyle;
  direction: ViewerDirection;
}

type PageStyleRefs = { [key in string]: JSX.RefElement<HTMLInputElement> };
type DirectionRefs = {
  [key in string]: JSX.RefElement<HTMLInputElement>;
};

const PAGE_STYLE_LABELS: { [key in PageStyle]: string } = {
  normal: '1ページ',
  spread: '見開き',
  auto: '自動',
};

const VIEWER_DIRECTION_LABELS: { [key in ViewerDirection]: string } = {
  'horizontal-ltr': '左から右 →',
  'horizontal-rtl': '← 右から左',
};

export class ViewSettings extends ComponentBase {
  #props: Props;
  #settings: Settings | null = null;

  #rootRef: JSX.RefElement;
  #modalBgRef: JSX.RefElement;
  #pageStyleRefs: PageStyleRefs;
  #directionRefs: DirectionRefs;
  #closeButtonRef: JSX.RefElement;

  constructor(props: Props) {
    super();

    this.#props = props;

    this.#rootRef = this.createRef();

    this.#modalBgRef = this.createRef((el) => {
      el.addEventListener('click', () => {
        this.close();
      });
    });

    this.#pageStyleRefs = pageStyles.reduce((prev, pageStyle) => {
      prev[pageStyle] = this.createRef((el) => {
        el.addEventListener('change', () => {
          if (!this.#settings) {
            return;
          }
          this.#settings.pageStyle = el.value as PageStyle;
        });
      });
      return prev;
    }, {} as PageStyleRefs);

    this.#directionRefs = viewerDirections.reduce((prev, viewerDirection) => {
      prev[viewerDirection] = this.createRef((el) => {
        el.addEventListener('change', () => {
          if (!this.#settings) {
            return;
          }
          this.#settings.direction = el.value as ViewerDirection;
        });
      });
      return prev;
    }, {} as DirectionRefs);

    this.#closeButtonRef = this.createRef((el) => {
      el.addEventListener('click', () => {
        this.close();
      });
    });
  }

  show(settings: Settings) {
    this.#settings = settings;
    for (const pageStyle of Object.keys(this.#pageStyleRefs)) {
      const elm = this.#pageStyleRefs[pageStyle].current;
      if (!elm) {
        continue;
      }
      if (settings.pageStyle === pageStyle) {
        elm.setAttribute('checked', 'true');
      } else {
        elm.removeAttribute('checked');
      }
    }
    for (const direction of Object.keys(this.#directionRefs)) {
      const elm = this.#directionRefs[direction].current;
      if (!elm) {
        continue;
      }
      if (settings.direction === direction) {
        elm.setAttribute('checked', 'true');
      } else {
        elm.removeAttribute('checked');
      }
    }
    this.#rootRef.current?.classList.add('show-settings');
  }

  close() {
    this.#rootRef.current?.classList.remove('show-settings');

    if (this.#settings) {
      this.#props.onSettingsChange(this.#settings);
    }
  }

  createElement(): JSX.Element {
    return (
      <div ref={this.#rootRef} classNames={['view-settings']}>
        <div ref={this.#modalBgRef} classNames={['modal-bg']} />
        <div classNames={['view-settings-main']}>
          <h1 classNames={['view-settings-title']}>Settings</h1>
          <div classNames={['view-settings-content']}>
            <h2 classNames={['view-settings-content-title']}>ページ表示</h2>
            <group classNames={['view-settings-radio-groups']}>
              {pageStyles.map((pageStyle) => (
                <label classNames={['view-settings-label']}>
                  <input
                    ref={this.#pageStyleRefs[pageStyle]}
                    classNames={['view-settings-radio']}
                    type="radio"
                    name="pageStyle"
                    value={pageStyle}
                    checked={false}
                  />
                  <span classNames={['view-settings-label-text']}>
                    {PAGE_STYLE_LABELS[pageStyle] || pageStyle}
                  </span>
                </label>
              ))}
            </group>
          </div>
          <div classNames={['view-settings-content']}>
            <h2 classNames={['view-settings-content-title']}>読む方向</h2>
            <group classNames={['view-settings-radio-groups']}>
              {viewerDirections.map((viewerDirection) => (
                <label classNames={['view-settings-label']}>
                  <input
                    ref={this.#directionRefs[viewerDirection]}
                    classNames={['view-settings-radio']}
                    type="radio"
                    name="direction"
                    value={viewerDirection}
                    checked={false}
                  />
                  <span classNames={['view-settings-label-text']}>
                    {VIEWER_DIRECTION_LABELS[viewerDirection] ||
                      viewerDirection}
                  </span>
                </label>
              ))}
            </group>
          </div>
          <button
            ref={this.#closeButtonRef}
            classNames={['view-settings-close-button']}
          >
            {createFaIcon(faXmark)}
          </button>
        </div>
      </div>
    );
  }
}
