// @ts-check
/// <reference path = "../../../@types/globals.d.ts" />

window.$docsify = {
  repo: "https://github.com/mika-f/VRChat-AssetMerger",
  loadSidebar: true,
  subMaxLevel: 2,
  name: "Asset Merger",
  nameLink: "/VRChat/AssetMerger/",
  alias: {
    "/.*/_sidebar.md": "/VRChat/AssetMerger/_sidebar.md",
  },
  autoHeader: true,
  mergeNavbar: true,
  formatUpdated: "最終更新日 : {YYYY}/{MM}/{DD} {HH}:{mm}:{ss}",
  routerMode: "history",
  requestHeaders: {
    "Cache-Control": "max-age=0",
  },
  plugins: [
    // @ts-ignore
    EditOnGithubPlugin.create(
      "https://github.com/mika-f/docs.mochizuki.moe/blob/master/public",
      null,
      "📝 GitHub でドキュメントを編集する"
    ),
    function (hook, _) {
      hook.afterEach((html) => {
        return `
${html}
<br />
<footer style="border-top: 1px solid #ccc; padding-top: 10px; color: #999; font-size: 90%;">
  &copy; ${new Date().getFullYear()} Fuyuno Mikazuki / Natsuneko. Rendered by <a href='https://docsify.js.org' target='_blank'>Docsify</a>.
</footer>
        `.trim();
      });
    },
    // @ts-check
  ],
};

/*
new window.Docute({
  target: "#docute",
  theme: "dark",
  title: "Asset Merger | ねこのやどきゅめんと",
  darkThemeToggler: true,
  detectSystemDarkTheme: true,
  editLinkBase: "https://github.com/mika-f/docs.mochizuki.moe/tree/master/public/VRChat/AssetMerger",
  editLinkText: "GitHub でドキュメントを修正する",
  router: {
    base: "/VRChat/AssetMerger",
    mode: "history",
  },
  sourcePath: "./",
  nav: [
    {
      title: "ホーム",
      link: "/",
    },
  ],
  sidebar: [
    {
      title: "ホーム",
      link: "/",
    },
    {
      title: "ガイド",
      children: [
        { title: "ダウンロードとインストール", link: "/guide/installation" },
        { title: "使い方", link: "/guide/how-to-use" },
      ],
    },
    {
      title: "お問い合わせ",
      link: "/Contact",
    },
    {
      title: "更新履歴",
      link: "/Changelog",
    },
  ],
  footer: `
    <footer style="border-top: 1px solid var(--border-color); padding-top: 10px; color: #999; font-size: 90%;">
      &copy; ${new Date().getFullYear()} Fuyuno Mikazuki / Natsuneko. Rendered by <a href='https://docute.org' target='_blank'>Docute</a>.
    </footer>
  `,
});
*/
