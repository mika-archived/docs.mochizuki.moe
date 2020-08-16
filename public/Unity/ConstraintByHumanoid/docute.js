// @ts-check
/// <reference path = "../../../@types/globals.d.ts" />

new window.Docute({
  target: "#docute",
  theme: "dark",
  title: "Constraint by Humanoid | ねこのやどきゅめんと",
  darkThemeToggler: true,
  detectSystemDarkTheme: true,
  editLinkBase: "https://github.com/mika-f/docs.mochizuki.moe/tree/master/public/Unity/ConstraintByHumanoid",
  editLinkText: "GitHub でドキュメントを修正する",
  router: {
    base: "/Unity/ConstraintByHumanoid",
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
        { title: "ダウンロードとインストール", link: "/Installation" },
        { title: "使い方", link: "/HowToUse" },
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
