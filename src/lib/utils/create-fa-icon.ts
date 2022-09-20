// @fortawesome/free-solid-svg-icons 単体利用だとbundle時にライセンスが埋め込まれないので
// 明示的にライセンスコメント入れる
/*!
 * Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';

const NAMESPACE_SVG = 'http://www.w3.org/2000/svg';

export function createFaIcon(iconDef: IconDefinition): HTMLElement {
  const [width, height, , , svgPathData] = iconDef.icon;
  const icon = document.createElement('i');
  icon.classList.add(`${iconDef.prefix}-${iconDef.iconName}`);

  const svg = icon.appendChild(document.createElementNS(NAMESPACE_SVG, 'svg'));
  svg.classList.add('viewer-fa-icon');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const iconPathList = Array.isArray(svgPathData) ? svgPathData : [svgPathData];
  for (const iconPath of iconPathList) {
    const path = svg.appendChild(
      document.createElementNS(NAMESPACE_SVG, 'path')
    );
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('d', iconPath);
  }
  return icon;
}
