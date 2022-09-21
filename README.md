# Tora Viewer

漫画や写真集などの画像一覧を閲覧できるビューアーを作成できます。

依存ライブラリが必要ないためどんな構成にも組み込みやすいです。

## インストール

(予定 ※要NPM登録)

```shell
npm i @toralab/tora-viewer
```

またはCDNが使えます。(予定)

```html
<script src="https://example.com/tora-viewer.umd.js"></script>
```

## 利用方法

基本的な使い方は以下の通りです。第1引数に画像URLの配列を渡します。

```javascript
import toraViewer from '@toralab/tora-viewer';

toraViewer([
  'https://example.com/1.png',
  'https://example.com/2.png',
  'https://example.com/3.png',
  'https://example.com/4.png',
]);
```

CDN利用の場合

```html
<script src="https://example.com/tora-viewer.umd.js"></script>
<script>
toraViewer([
  'https://example.com/1.png',
  'https://example.com/2.png',
  'https://example.com/3.png',
  'https://example.com/4.png',
]);
</script>
```

### オプション(第２引数)

第2引数にビューアーの細かい設定を入れることができます。

```javascript
toraViewer([
  'https://example.com/1.png',
  'https://example.com/2.png',
  'https://example.com/3.png',
  'https://example.com/4.png',
], {
  // 上部に表示されるタイトル(無指定なら何も表示しない)
  title: '漫画のタイトル',
  // 1ページのサイズ
  pageSize: {
    width: 840, // デフォルト値: 840
    height: 1188, // デフォルト値: 1188
  },
  // 「設定: ページ表示」の初期値
  // 次のいずれかを設定できる 'normal', 'spread', 'auto'
  // 'normal'(1ページ) 1ページづつ表示
  // 'spread'(見開き) 2ページづつ表示
  // 'auto'(自動) 画面サイズにより1ページ・見開きを自動的に切り替える(デフォルト値)
  pageStyle: 'auto',
  // 「設定: 読む方向」の初期値
  // 次のいずれかを設定できる 'horizontal-ltr', 'horizontal-rtl'
  // 'horizontal-ltr'(左から右)
  // 'horizontal-rtl'(右から左) (デフォルト値)
  direction: 'horizontal-rtl',
  // タイトルやページ遷移ボタンの非表示になるまでの時間(ミリ秒)
  // 0を指定すると時間経過で非表示にならなくなる。
  // デフォルト値: 3000(ms)
  controlShowTime: 3000,
  // 最後のページ要素
  // 最後のページを自由に埋め込むことができる。
  lastPageElement: document.getElementById('#last'),
  // 挿入する要素
  // 指定すると全画面表示ではなくなり、指定された要素に表示される。
  insertTarget: document.getElementById('#embed')
});
```

### 第１引数の指定の仕方

第1引数には画像URLの配列以外にオブジェクト配列やPromise配列が利用できます。(下で示す例のように混在も可能です。)

```javascript
import toraViewer from '@toralab/tora-viewer';

toraViewer([
  'https://example.com/1.png',
  {
    url: 'https://example.com/2.png',
    thumbnailUrl: 'https://example.com/2-thumb.png',
  },
  Promise.resolve('https://example.com/3.png'),
  Promise.resolve({
    url: 'https://example.com/3.png',
    thumbnailUrl: 'https://example.com/3-thumb.png',
  }),
]);
```

Objectで指定できる`thumbnailUrl`はサムネイル画像はスライダーでページ遷移時に表示されます。`thumbnailUrl`を指定しなかった場合、`url`で指定した画像がサムネイル画像として利用されます。(文字列で指定した場合も同様です)

画像のURL一覧を少しづつ読み込みたい場合は`toraViewer.asyncLoadBuilder`を使うことができます。

```javascript
const asyncImages = toraViewer.asyncLoadBuilder(function (limit, offset) {
  // 必要なタイミングで関数が実行されlimit,offsetが渡されるので画像URL一覧取得処理を実行する
  const url = `https://example.com/api/page.json?limit=${limit}&offset=${offset}`;
  return fetch(url).then(function (res) {
    return res.json();
  })
})
// 1回の処理で読み込むページ数を指定する。省略可(デフォルト値:20)
.limit(20)
// 全ページ数を指定する
.build(100);
toraViewer(asyncImages);
```

async/awaitが使える場合は下記のように直すことができます。

```javascript
const asyncImages = toraViewer.asyncLoadBuilder(async function (limit, offset) {
  // 必要なタイミングで関数が実行されlimit,offsetが渡されるので画像URL一覧取得処理を実行する
  const url = `https://example.com/api/page.json?limit=${limit}&offset=${offset}`;
  const res = await fetch(url)
  return await res.json();
})
// 1回の処理で読み込むページ数を指定する。省略可(デフォルト値:20)
.limit(20)
// 全ページ数を指定する
.build(100);
toraViewer(asyncImages);
```

### メソッド

生成時にインスタンスを変数で受け取って、ビューアーを操作できます。

```javascript
const viewer = toraViewer([
  'https://example.com/1.png',
  'https://example.com/2.png',
  'https://example.com/3.png',
  'https://example.com/4.png',
]);

// 次のページ(「設定: 読む方向」が「右から左」なら左のページ、「左から右」なら右のページ)
viewer.goNext();
// 前のページ(「設定: 読む方向」が「左から右」なら右のページ、「右から左」なら左のページ)
viewer.goPrev();
// 左のページに移動
viewer.goLeft();
// 右のページに移動
viewer.goRight();

// 指定のIndexに移動(0始まりなので例の場合は3ページ目に移動)
viewer.goTo(2);

// 設定を開く
viewer.openSettings();
// 設定を閉じる
viewer.closeSettings();

// 現在のindexを表示(0始まりなので現在3ページ目の場合は2)
console.log(viewer.currentIndex); // -> 2
// 読み終りページにいればtrue ※コンテンツの最後とは異なる
console.log(viewer.isLastPage); // false

// ページが切り替わるたびに実行されるイベント
viewer.onCurrentIndexChanged(function (index) {
  console.log(index); // -> 2
});
```
