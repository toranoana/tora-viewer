import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { ComponentBase } from './base';
import { PageBase } from './page-base';
import { Page, type PageSize } from './page';
import { EmptyPage } from './empty-page';
import { EmbedPage } from './embed-page';
import { appName, PageStyle, ViewerDirection } from '../constants';
import { LoadablePageContent } from '../interfaces/page-content';
import { createFaIcon } from '../utils/create-fa-icon';
import { ControlArea } from './control-area';
import { ViewSettings } from './view-settings';

export interface BaseProps {
  pageSize: PageSize;
  pageStyle: PageStyle;
  direction: ViewerDirection;
  modal: boolean;
  title: string;
  controlShowTime: number;
  lastPageElement?: HTMLElement;
}

interface Props extends BaseProps {
  onDispose: () => void;
}

type CurrentIndexChangeHandler = (index: number) => void;

const FIRST_PAGE_SHOWN = 'viewer-first-page-shown';
const LAST_PAGE_SHOWN = 'viewer-last-page-shown';

export class Main extends ComponentBase {
  /** コンテンツのページ一覧 */
  readonly pages: Page[];
  /** 空ページ(奇数ページで見開き表示時に表示させる) */
  #blankPage: EmptyPage;
  /** 最終ページ */
  #lastPage: EmbedPage;
  /** コンテンツのページ、空ページ、最終ページ全部含めたページ一覧 */
  #allPages: PageBase[];
  #controlArea: ControlArea;
  #viewSettings: ViewSettings;

  #props: Props;
  #currentIndexChangedHandlers: CurrentIndexChangeHandler[] = [];
  #currentIndexes: number[] = [];
  #showSettings = false;
  #isSpreadStyle: boolean;

  #rootRef: JSX.RefElement;
  #mainRef: JSX.RefElement;
  #viewerPagesRef: JSX.RefElement;
  #pageStyleCheckerRef: JSX.RefElement;
  #closeButtonRef: JSX.RefElement;

  constructor(loadablePageContents: LoadablePageContent[], props: Props) {
    super();

    this.#props = props;

    let hideMainVisibleId: number | undefined;
    let autoFadeout = true;
    this.#isSpreadStyle = props.pageStyle === 'spread';

    const autoFadeoutCtrl = () => {
      if (!autoFadeout) return;
      window.clearTimeout(hideMainVisibleId);
      this.#controlArea.show();

      // controlShowTime0以下なら自動で非表示にしない
      if (this.#props.controlShowTime <= 0) {
        return;
      }

      // クリックして一定時間経過したらコントロール領域を消す
      hideMainVisibleId = window.setTimeout(() => {
        this.#controlArea.hide();
      }, this.#props.controlShowTime);
    };

    const disableAutoFadeout = () => {
      autoFadeout = false;

      window.clearTimeout(hideMainVisibleId);
      this.#controlArea.show();
    };

    const enableAutoFadeout = () => {
      autoFadeout = true;
      autoFadeoutCtrl();
    };

    this.#rootRef = this.createRef((el) => {
      el.style.setProperty('--default-width', `${this.#props.pageSize.width}`);
      el.style.setProperty(
        '--default-wide-width',
        `${this.#props.pageSize.width * 2}`
      );
      el.style.setProperty(
        '--default-height',
        `${this.#props.pageSize.height}`
      );

      el.addEventListener('click', autoFadeoutCtrl);
      enableAutoFadeout();
    });

    this.#mainRef = this.createRef();

    this.pages = loadablePageContents.map(
      (content, index) =>
        new Page(content, {
          index,
          size: this.#props.pageSize,
          onTapLeft: () => this.goLeft(),
          onTapRight: () => this.goRight(),
        })
    );

    this.#blankPage = new EmptyPage({
      index: this.pages.length,
      onTapLeft: () => this.goLeft(),
      onTapRight: () => this.goRight(),
    });

    this.#lastPage = new EmbedPage({
      index: this.pages.length + 1,
      element: this.#props.lastPageElement,
      onTapLeft: () => this.goLeft(),
      onTapRight: () => this.goRight(),
      onDispose: () => this.#props.onDispose(),
    });

    this.#allPages = [...this.pages, this.#blankPage, this.#lastPage];

    this.#controlArea = new ControlArea({
      title: this.#props.title,
      pageLength: this.pages.length,
      direction: this.#props.direction,
      thumbnailElements: this.#allPages.map((p) => p.createThumbnailElement()),
      onOpenSettings: () => {
        disableAutoFadeout();
        this.#viewSettings.show({
          direction: this.direction,
          pageStyle: this.pageStyle,
        });
      },
      onClickLeft: () => this.goLeft(),
      onClickRight: () => this.goRight(),
      onThumbnailChanged: (index) => {
        autoFadeoutCtrl();
        const page = this.#allPages.find((p) => p.index === index);
        // 空ページ選択の場合は最後のページへ遷移
        const element =
          page === this.#blankPage
            ? this.#lastPage.thumbnailElement
            : page?.thumbnailElement;
        element?.scrollIntoView();
      },
      onPageSelectorChanged: (index) => this.goTo(index),
    });
    this.#viewSettings = new ViewSettings({
      onSettingsChange: (settings) => {
        this.direction = settings.direction;
        this.pageStyle = settings.pageStyle;

        this.#reflectCurrentIndexes();
        enableAutoFadeout();
      },
    });

    this.#pageStyleCheckerRef = this.createRef((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            // page-style-checkerが表示されている場合は見開き表示
            const isSpreadStyle = entry.isIntersecting;
            this.#isSpreadStyle = isSpreadStyle;
            this.#controlArea.updatePageSelector(isSpreadStyle);
          }
        },
        {
          root: this.#rootRef.current,
        }
      );
      observer.observe(el);
    });

    this.#closeButtonRef = this.createRef((el) => {
      el.addEventListener('click', () => {
        this.#props.onDispose();
      });
    });

    this.#viewerPagesRef = this.createRef((el) => {
      this.#setupCurrentIndexes(el, this.#allPages);
      el.addEventListener('click', (e) => {
        e.stopPropagation();

        if (this.#controlArea.visible) {
          window.clearTimeout(hideMainVisibleId);
          this.#controlArea.hide();
        } else {
          autoFadeoutCtrl();
        }
      });
    });
  }

  get pageStyle(): PageStyle {
    return this.#props.pageStyle;
  }

  set pageStyle(pageStyle: PageStyle) {
    const prev = this.#props.pageStyle;
    if (prev === pageStyle) {
      return;
    }
    this.#props.pageStyle = pageStyle;
    this.#updateRootClasses();
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
    this.#controlArea.direction = direction;
    this.#updateRootClasses();
  }

  openSettings() {
    if (!this.#showSettings) {
      return;
    }
    this.#showSettings = false;
  }

  closeSettings() {
    if (this.#showSettings) {
      return;
    }
    this.#showSettings = true;
  }

  #updateRootClasses() {
    const rootElm = this.#rootRef.current;
    if (!rootElm) {
      return;
    }
    rootElm.setAttribute('class', '');
    rootElm.classList.add(...this.#rootClasses());
  }

  #rootClasses() {
    const defaultRootClasses = [appName, `${appName}-root`];
    if (this.#props.direction.startsWith('horizontal-')) {
      defaultRootClasses.push('horizontal-viewer');
    }
    defaultRootClasses.push(this.#props.direction);
    defaultRootClasses.push(`page-style-${this.#props.pageStyle}`);
    if (this.#props.modal) {
      defaultRootClasses.push('modal-viewer');
    }
    return defaultRootClasses;
  }

  createElement() {
    const rootClasses = this.#rootClasses();

    return (
      <div classNames={rootClasses} ref={this.#rootRef}>
        <div classNames={['modal-bg', 'viewer-bg']} />
        <div ref={this.#mainRef} classNames={['viewer-main']}>
          <div ref={this.#viewerPagesRef} classNames={['viewer-pages']}>
            {this.#allPages.map((p) => p.createElement())}
          </div>
          {this.#controlArea.createElement()}
        </div>
        <button ref={this.#closeButtonRef} classNames={['viewer-close-button']}>
          {createFaIcon(faXmark)}
        </button>
        {this.#viewSettings.createElement()}
        <div
          classNames={['page-style-checker']}
          ref={this.#pageStyleCheckerRef}
        />
      </div>
    );
  }

  #setupCurrentIndexes(viewerPagesElm: HTMLElement, pages: PageBase[]) {
    const currentIndexes = new Set<number>();
    let pendingCurrentIndexes = false;
    let scrolling: number | undefined = undefined;

    viewerPagesElm.addEventListener('scroll', () => {
      scrolling != null && window.clearTimeout(scrolling);
      scrolling = window.setTimeout(() => {
        scrolling = undefined;
        if (pendingCurrentIndexes) {
          pendingCurrentIndexes = false;
          this.#emitCurrentIndexChanged([...currentIndexes]);
        }
      }, 100);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const page = pages.find((p) => p.element === entry.target);
          if (!page) {
            continue;
          }
          if (entry.isIntersecting) {
            currentIndexes.add(page.index);
          } else {
            currentIndexes.delete(page.index);
          }
          if (scrolling != null) {
            pendingCurrentIndexes = true;
          } else {
            pendingCurrentIndexes = false;
            this.#emitCurrentIndexChanged([...currentIndexes]);
          }
        }
      },
      {
        root: viewerPagesElm,
        threshold: 0.6,
      }
    );

    for (const page of pages) {
      page.setup((el) => {
        observer.observe(el);
      });
    }
  }

  get currentIndex(): number {
    if (this.#currentIndexes.length === 0) {
      return 0;
    }
    return Math.min(...this.#currentIndexes);
  }

  get isLastPage(): boolean {
    const page = this.#allPages.find((p) => p.index === this.currentIndex);
    return page?.element === this.#lastPage.element;
  }

  onCurrentIndexChanged(handler: CurrentIndexChangeHandler) {
    this.#currentIndexChangedHandlers.push(handler);
  }

  #emitCurrentIndexChanged(indexes: number[]) {
    this.#currentIndexes = indexes;
    this.#controlArea.currentIndex = this.currentIndex;
    this.#reflectCurrentIndexes();
    for (const handler of this.#currentIndexChangedHandlers) {
      handler(this.currentIndex);
    }
  }

  #reflectCurrentIndexes() {
    if (this.#currentIndexes.includes(0)) {
      this.#rootRef.current?.classList.add(FIRST_PAGE_SHOWN);
    } else {
      this.#rootRef.current?.classList.remove(FIRST_PAGE_SHOWN);
    }
    if (this.#currentIndexes.includes(this.#lastPage.index)) {
      this.#rootRef.current?.classList.add(LAST_PAGE_SHOWN);
    } else {
      this.#rootRef.current?.classList.remove(LAST_PAGE_SHOWN);
    }
  }

  goBack() {
    // 最後のページの場合はemptyを挟むので見開き表示でなくても2つ移動
    this.goTo(
      this.currentIndex - (this.#isSpreadStyle || this.isLastPage ? 2 : 1)
    );
  }

  goNext() {
    this.goTo(this.currentIndex + (this.#isSpreadStyle ? 2 : 1));
  }

  goLeft() {
    this.#props.direction === 'horizontal-rtl' ? this.goNext() : this.goBack();
  }

  goRight() {
    this.#props.direction === 'horizontal-rtl' ? this.goBack() : this.goNext();
  }

  goTo(index: number) {
    const page = this.#allPages.find((p) => p.index === index);
    // 空ページ選択の場合は最後のページへ遷移
    const element =
      page === this.#blankPage ? this.#lastPage.element : page?.element;
    // 非同期にしないと動作しないことが稀にあるため
    window.setTimeout(() => {
      element?.scrollIntoView();
    }, 1);
  }
}
