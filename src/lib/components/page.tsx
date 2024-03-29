// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsxFactory } from './base';
import { PageBase } from './page-base';
import { LoadablePageContent, PageContent } from '../interfaces/page-content';

export interface PageSize {
  width: number;
  height: number;
}

interface Props {
  index: number;
  size: PageSize;
  onTapLeft: () => void;
  onTapRight: () => void;
}

export class Page extends PageBase {
  #size: PageSize;
  #pageRatio: number;
  #loadablePageContent: LoadablePageContent;
  #contentLoaded = false;
  #contentLoadedSuccess = false;

  #thumbnailElement: HTMLImageElement;
  #canvasRef: JSX.RefElement<HTMLCanvasElement>;

  constructor(loadablePageContent: LoadablePageContent, props: Props) {
    super(props);

    // 初期表示に使うサイズ ※画像ロード時に画像に合わせたサイズになる
    this.#size = props.size;
    this.#pageRatio = props.size.width / props.size.height;

    this.#loadablePageContent = loadablePageContent;

    this.#canvasRef = this.createRef();
    this.#thumbnailElement = new Image();
    this.#thumbnailElement.classList.add('viewer-page-thumbnail-content');
    this.showLoading();
  }

  protected pageClasses(): string[] {
    return ['regular-page'];
  }

  protected createElementPage() {
    return (
      <canvas
        width={this.#size.width}
        height={this.#size.height}
        classNames={['viewer-page-content']}
        ref={this.#canvasRef}
      />
    );
  }

  createThumbnailElementPage() {
    return this.#thumbnailElement;
  }

  get loaded() {
    return this.#contentLoaded;
  }

  async contentLoad(): Promise<void> {
    if (this.#contentLoaded) {
      return Promise.resolve();
    }

    const ctx = this.#canvasRef.current?.getContext('2d');
    if (!ctx) {
      return Promise.reject('The rendering context is not ready.');
    }

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
        this.#drawPageImage(ctx, img, content);
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
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    content: PageContent
  ) {
    // サイズ指定がされていればそのとおりに、なければ画像のサイズを取得する
    const imgWidth =
      typeof content === 'string' ? img.width : content.width ?? img.width;
    const imgHeight =
      typeof content === 'string' ? img.height : content.height ?? img.height;

    // canvasの大きさを画像に合わせる
    if (this.#canvasRef.current) {
      this.#canvasRef.current.setAttribute('width', `${imgWidth}`);
      this.#canvasRef.current.setAttribute('height', `${imgHeight}`);

      const imgRatio = imgWidth / imgHeight;
      if (imgRatio < this.#pageRatio) {
        // 縦が長いときに切れないスタイルに切り替える
        this.#canvasRef.current.classList.add('viewer-page-vertically-long');
      }
    }

    ctx.drawImage(img, 0, 0, imgWidth, imgHeight, 0, 0, imgWidth, imgHeight);
  }
}
