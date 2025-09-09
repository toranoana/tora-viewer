// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { PageBase } from './page-base';
import { LoadablePageContent, PageContent } from '../interfaces/page-content';

export interface PageSize {
  width: number;
  height: number;
}

type PageType = 'image' | 'canvas';

interface Props {
  index: number;
  size: PageSize;
  pageType?: PageType;
  onTapLeft: () => void;
  onTapRight: () => void;
}

type PageInfo =
  | { type: 'image'; elm: HTMLImageElement }
  | { type: 'canvas'; elm: HTMLCanvasElement; ctx: CanvasRenderingContext2D };

export class Page extends PageBase {
  #size: PageSize;
  #pageRatio: number;
  #loadablePageContent: LoadablePageContent;
  #contentLoaded = false;
  #contentLoadedSuccess = false;

  #thumbnailElement: HTMLImageElement;
  #pageElement:
    | { type: 'image'; ref: JSX.RefElement<HTMLImageElement> }
    | { type: 'canvas'; ref: JSX.RefElement<HTMLCanvasElement> };

  constructor(loadablePageContent: LoadablePageContent, props: Props) {
    super(props);

    // 初期表示に使うサイズ ※画像ロード時に画像に合わせたサイズになる
    this.#size = props.size;
    this.#pageRatio = props.size.width / props.size.height;

    this.#loadablePageContent = loadablePageContent;

    if (props.pageType === 'image') {
      this.#pageElement = {
        type: 'image',
        ref: this.createRef<HTMLImageElement>(),
      };
    } else {
      this.#pageElement = {
        type: 'canvas',
        ref: this.createRef<HTMLCanvasElement>(),
      };
    }

    this.#thumbnailElement = new Image();
    this.#thumbnailElement.classList.add('viewer-page-thumbnail-content');
    this.showLoading();
  }

  protected pageClasses(): string[] {
    return ['regular-page'];
  }

  protected createElementPage() {
    if (this.#pageElement.type === 'image') {
      return (
        <img
          width={this.#size.width}
          height={this.#size.height}
          src=""
          classNames={['viewer-page-content']}
          ref={this.#pageElement.ref}
        />
      );
    }
    return (
      <canvas
        width={this.#size.width}
        height={this.#size.height}
        classNames={['viewer-page-content']}
        ref={this.#pageElement.ref}
      />
    );
  }

  createThumbnailElementPage() {
    return this.#thumbnailElement;
  }

  get loaded() {
    return this.#contentLoaded;
  }

  async #getPageInfo(): Promise<PageInfo> {
    if (this.#pageElement.type === 'image') {
      if (!this.#pageElement.ref.current) {
        return Promise.reject('Image element is not ready.');
      }
      return {
        type: 'image',
        elm: this.#pageElement.ref.current,
      };
    }
    const canvas = this.#pageElement.ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      return Promise.reject('The rendering context is not ready.');
    }
    return {
      type: 'canvas',
      elm: canvas,
      ctx,
    };
  }

  async contentLoad(): Promise<void> {
    if (this.#contentLoaded) {
      return Promise.resolve();
    }

    const pageInfo: PageInfo = await this.#getPageInfo();

    this.#contentLoaded = true;

    const content = await this.#loadablePageContent.load();

    const thumbnailUrl =
      typeof content === 'string'
        ? content
        : content.thumbnailUrl || content.url;
    const url = typeof content === 'string' ? content : content.url;

    this.#thumbnailElement.src = thumbnailUrl;
    this.#thumbnailElement.addEventListener('load', () => {
      img.classList.add('viewer-page-thumbnail-content-loaded');
    });

    const img = new Image();
    img.src = url;

    // エラー時に再読込できる状態に戻す
    const recoverContentLoaded = () => {
      window.setTimeout(() => {
        if (this.#contentLoadedSuccess) {
          return;
        }
        // 読み込みに成功していなければ再読み込みできる状態にする。
        this.#contentLoaded = false;
      }, 30000);
    };

    return new Promise<void>((resolve, reject) => {
      img.addEventListener('load', () => {
        this.hideLoading();
        this.#drawPageImage(pageInfo, img, content);
        this.#contentLoadedSuccess = true;
        resolve();
      });
      img.addEventListener('abort', reject);
      img.addEventListener('error', reject);
      img.addEventListener('abort', recoverContentLoaded);
      img.addEventListener('error', recoverContentLoaded);
    });
  }

  #drawPageImage(
    pageInfo: PageInfo,
    img: HTMLImageElement,
    content: PageContent
  ) {
    // サイズ指定がされていればそのとおりに、なければ画像のサイズを取得する
    const imgWidth =
      typeof content === 'string' ? img.width : content.width ?? img.width;
    const imgHeight =
      typeof content === 'string' ? img.height : content.height ?? img.height;

    // 要素の大きさを画像に合わせる
    pageInfo.elm.setAttribute('width', `${imgWidth}`);
    pageInfo.elm.setAttribute('height', `${imgHeight}`);

    const imgRatio = imgWidth / imgHeight;
    if (imgRatio < this.#pageRatio) {
      // 縦が長いときに切れないスタイルに切り替える
      pageInfo.elm.classList.add('viewer-page-vertically-long');
    }

    if (pageInfo.type === 'image') {
      pageInfo.elm.src = img.src;
    } else {
      const ctx = pageInfo.ctx;
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight, 0, 0, imgWidth, imgHeight);
    }
  }
}
