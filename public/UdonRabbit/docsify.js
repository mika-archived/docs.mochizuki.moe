// @ts-check
/// <reference path = "../../@types/globals.d.ts" />

window.$docsify = {
  repo: "https://github.com/mika-f/UdonRabbit",
  loadSidebar: true,
  subMaxLevel: 2,
  auto2top: true,
  name: "UdonRabbit",
  nameLink: "/UdonRabbit/",
  alias: {
    "/.*/_sidebar.md": "/UdonRabbit/_sidebar.md",
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
    window.BeautifulTitle.create("VRChat UdonRabbit")
  ],};
