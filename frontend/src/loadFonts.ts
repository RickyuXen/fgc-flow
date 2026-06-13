import { resolveAssetPath } from "./api/client";

const fontFaces = `
@font-face {
  font-family: 'sf6Font';
  src: url('${resolveAssetPath("/fonts/SF6.otf")}') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'ggstFont';
  src: url('${resolveAssetPath("/fonts/ImpactStrive.otf")}') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'blackHan';
  src: url('${resolveAssetPath("/fonts/BlackHanSans-Regular.ttf")}') format('opentype');
  font-weight: normal;
  font-style: normal;
}
`;

const style = document.createElement("style");
style.textContent = fontFaces;
document.head.appendChild(style);
