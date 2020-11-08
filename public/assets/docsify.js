// @ts-check
/// <reference path = "../../@types/globals.d.ts" />

window.$docsify = {
  loadSidebar: true,
  subMaxLevel: 2,
  auto2top: true,
  name: "docs.mochizuki.moe",
  nameLink: "/",
  alias: {
    // "/.*/_sidebar.md": "/_sidebar.md",
  },
  autoHeader: true,
  mergeNavbar: true,
  formatUpdated: "最終更新日 : {YYYY}/{MM}/{DD} {HH}:{mm}:{ss}",
  routerMode: "history",
  requestHeaders: {
    "Cache-Control": "max-age=0",
  },
  plugins: [
    window.EditOnGitHub.create("mika-f/docs.mochizuki.moe", "master", "public"),
    window.AppendFooter,
    window.BeautifulTitle.create()
  ],
};
