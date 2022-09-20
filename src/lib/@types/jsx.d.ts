declare namespace JSX {
  interface ElementChildrenAttribute {
    children: unknown;
  }

  interface ElementProps<E extends HTMLElement = HTMLElement> {
    classNames: string[];
    ref?: RefElement<E>;
  }

  type ElementChild =
    | string
    | Element
    | Element[]
    | HTMLElement
    | HTMLElement[];

  type Fragment = (props: {
    children: JSX.ElementChild[];
  }) => JSX.ElementChild[];

  interface RefElement<E extends HTMLElement = HTMLElement> {
    current: E | null;
    setup?: (element: E) => void;
  }

  interface Element {
    tag: string | Fragment;
    props: ElementProps | null;
    children: ElementChild[];
  }

  interface DefaultIntrinsicElement<E extends HTMLElement = HTMLElement>
    extends ElementProps<E> {
    children?: ElementChild | ElementChild[];
  }

  interface InputIntrinsicElement
    extends DefaultIntrinsicElement<HTMLInputElement> {
    type: string;
    value: string;
  }

  interface AIntrinsicElement
    extends DefaultIntrinsicElement<HTMLInputElement> {
    href?: string;
  }

  interface ImgIntrinsicElement
    extends DefaultIntrinsicElement<HTMLInputElement> {
    src: string;
    alt?: string;
  }

  interface InputRadioIntrinsicElement extends InputIntrinsicElement {
    type: 'radio';
    name?: string;
    value: string;
    checked: boolean;
  }

  interface InputRangeIntrinsicElement extends InputIntrinsicElement {
    type: 'range';
    name?: string;
    min: number;
    max: number;
    step: number;
    value: number;
  }

  interface CanvasIntrinsicElement
    extends DefaultIntrinsicElement<HTMLCanvasElement> {
    width?: number;
    height?: number;
  }

  interface IntrinsicElements {
    a: AIntrinsicElement;
    button: DefaultIntrinsicElement;
    div: DefaultIntrinsicElement;
    group: DefaultIntrinsicElement;
    h1: DefaultIntrinsicElement;
    h2: DefaultIntrinsicElement;
    label: DefaultIntrinsicElement;
    i: DefaultIntrinsicElement;
    img: ImgIntrinsicElement;
    input: InputRangeIntrinsicElement | InputRadioIntrinsicElement;
    p: DefaultIntrinsicElement;
    span: DefaultIntrinsicElement;
    canvas: CanvasIntrinsicElement;
  }
}
