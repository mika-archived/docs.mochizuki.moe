import type { Component } from "vue";
import type { RouterOptions } from "vue-router";

// Docute (but no longer actively maintained)
type DocuteNavItemLink = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

type DocuteNavItem = {
  title: string;
  link?: string;
  openInNewTab?: boolean;
  children?: DocuteNavItemLink[];
};

type DocuteSingleItem = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

type DocuteMultiItem = {
  title: string;
  children: DocuteSingleItem[];
  toc?: boolean;
  collapsable?: boolean;
};

type SideBarItem = DocuteSingleItem | DocuteMultiItem;

type DocuteRouteData = {
  title?: string;
  content?: string;
  file?: string;
  markdown?: boolean;
};

type DocuteRoutes = {
  [path: string]: DocuteRouteData;
};

type DocuteVersions = {
  [version: string]: {
    link: string;
  };
};

type DocuteLocaleOptions = DocuteOptions & {
  language: string;
};

type DocuteOptions = {
  target?: string;
  title?: string;
  logo?: string | object;
  nav: DocuteNavItem[];
  sidebar: SideBarItem[];
  sourcePath?: string;
  routes?: DocuteRoutes;
  componentMixins?: object[];
  highlight?: string[];
  editLinkBase?: string;
  editLinkText?: string;
  theme?: "default" | "dark";
  detectSystemDarkTheme?: boolean;
  darkThemeToggler?: boolean;
  layout?: "wide" | "narrow" | "left";
  versions?: DocuteVersions;
  cssVariables?: (theme: string) => object;
  overrides?: DocuteLocaleOptions;
  router?: RouterOptions;
  banner?: string | Component; // Vue Component
  footer?: string | Component; // Vue Component
  imageZoom?: boolean;
  fetchOptions?: object;
};

interface Docute {
  new (options?: DocuteOptions): this;
}

// Docsify
type DocsifyOptions = {
  el?: string;
  repo?: string;
  maxLevel?: number;
  loadNavbar?: boolean | string;
  loadSidebar?: boolean | string;
  hideSidebar?: boolean;
  subMaxLevel?: number;
  auto2top?: boolean;
  homepage?: string;
  basePath?: string;
  relativePath?: boolean;
  coverpage?: boolean | string | string[] | object;
  logo?: string;
  name?: string;
  nameLink?: string;
  markdown?: Function | object;
  themeColor?: string;
  alias?: { [key: string]: string };
  autoHeader?: boolean;
  executeScript?: boolean;
  noEmoji?: boolean;
  mergeNavbar?: boolean;
  formatUpdated?: string;
  externalLinkTarget?: string;
  cornerLinkTarget?: string;
  externalLinkRel?: string;
  routerMode?: "hash" | "history";
  noCompileLinks?: string[];
  onlyCover?: boolean;
  requestHeaders?: { [key: string]: string };
  ext?: string;
  fallbackLanguages?: string[];
  notFoundPage?: boolean | string | object;
  topMargin?: number;
  plugins: object[];
};

export declare global {
  interface Window {
    Docute: Docute;
    $docsify: DocsifyOptions;

    // own plugins
    AppendFooter: (hook: any) => void;
    EditOnGitHub: {
      create(repository: string, branch: string, baseUrl: string);
      onClick(event: Event);
    };
  }
}
