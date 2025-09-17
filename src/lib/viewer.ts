export { type BaseProps } from './components/main';
import { Main, type PageControl, type BaseProps } from './components/main';
import { LoadablePageContent } from './interfaces/page-content';

interface Props extends BaseProps {
  parent: Element;
}

export class Viewer implements PageControl {
  #main: Main;
  #parentElement: Element;
  #current: Element;
  #disposed = false;

  constructor(
    pageContents: LoadablePageContent[],
    { parent, ...props }: Props
  ) {
    this.#main = new Main(pageContents, {
      ...props,
      onDispose: () => this.dispose(),
    });
    this.#parentElement = parent;
    this.#current = render(this.#main.createElement(), this.#parentElement);

    // ページ遷移ローディングと順次ローディングを併用する。

    // ページ遷移によるローディング
    const loadRange = 4;
    let promiseInstant = Promise.resolve();
    this.#main.onCurrentIndexChanged((index) => {
      if (this.#disposed) {
        return;
      }
      // 先のページ取得
      const nextTargets = this.#main.pages.filter(
        (p) => !p.loaded && p.index >= index && p.index < index + loadRange
      );
      for (const target of nextTargets) {
        promiseInstant = promiseInstant.then(async () => {
          if (this.#disposed) {
            return;
          }
          try {
            await target.contentLoad();
          } catch (e) {
            console.error(e);
          }
        });
      }
    });

    let promiseSeries = Promise.resolve();
    // ページの順次ローディング
    for (const page of this.#main.pages) {
      promiseSeries = promiseSeries.then(async () => {
        if (this.#disposed) {
          return;
        }
        try {
          await page.contentLoad();
        } catch (e) {
          console.error(e);
        }
      });
    }

    document.addEventListener('keydown', this.#keydownEvents);
  }

  #keydownEvents = (ev: KeyboardEvent) => {
    if (ev.key === 'ArrowLeft' || ev.key === 'Left') {
      this.#main.goLeft();
    } else if (ev.key === 'ArrowRight' || ev.key === 'Right') {
      this.#main.goRight();
    }
  };

  get pages() {
    return this.#main.pages;
  }

  get disposed() {
    return this.#disposed;
  }

  /**
   * @see {@link Viewer#goBack}
   */
  goPrev() {
    this.#main.goBack();
  }

  goBack() {
    this.#main.goBack();
  }

  goNext() {
    this.#main.goNext();
  }

  goLeft() {
    this.#main.goLeft();
  }

  goRight() {
    this.#main.goRight();
  }

  goTo(index: number) {
    this.#main.goTo(index);
  }

  get currentIndex() {
    return this.#main.currentIndex;
  }

  get isLastPage() {
    return this.#main.isLastPage;
  }

  openSettings() {
    this.#main.openSettings();
  }

  closeSettings() {
    this.#main.closeSettings();
  }

  onCurrentIndexChanged(handler: (index: number) => void) {
    this.#main.onCurrentIndexChanged(handler);
  }

  dispose() {
    if (this.#disposed) {
      return;
    }
    document.removeEventListener('keydown', this.#keydownEvents);
    this.#current && this.#parentElement.removeChild(this.#current);
    this.#disposed = true;
  }
}

function render(jsxElement: JSX.Element, container: Element): HTMLElement {
  const { tag, props, children } = jsxElement;
  if (typeof tag === 'function') {
    throw 'Not support';
  }
  const element = container.appendChild(document.createElement(tag));
  for (const child of children.flat()) {
    if (child instanceof HTMLElement) {
      element.appendChild(child);
    } else if (typeof child === 'string') {
      element.append(child);
    } else {
      render(child, element);
    }
  }
  if (props) {
    const { ref, classNames, ...attrs } = props;
    element.classList.add(...classNames);
    for (const key of Object.keys(attrs)) {
      const value = `${(attrs as never)[key]}`;
      if (key === 'checked' && value === 'false') {
        continue;
      }
      element.setAttribute(key, value);
    }
    if (ref) {
      ref.current = element;
      ref.setup?.(element);
    }
  }
  return element;
}
