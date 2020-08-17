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
    // @ts-expect-error
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
  ],
};
