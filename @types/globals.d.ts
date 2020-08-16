import type { Component } from "vue";
import type { RouterOptions } from "vue-router";

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

export declare global {
  interface Window {
    Docute: Docute;
  }
}
