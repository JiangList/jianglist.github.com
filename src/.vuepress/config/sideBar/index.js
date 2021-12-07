const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = {
  zh: sidebarConfig({
    "/software/vscode/": require("./software/vscode"),

    "/software/git/": require("./software/git"),

    "/software/": require("./software"),

    "/note/innenu/": ["", "yaml", "tag-list", "get-started"],

    "/linux/": require("./linux"),

    "/code/windows/": [
      "",
      "shortcut-key",
      "hidden-file",
      "add-path",
      "cmd",
      "notepad",
    ],

    "/code/website/jquery/": require("./website/jquery"),

    "/code/website/html/": require("./website/html"),

    "/code/website/css/": require("./website/css"),

    "/code/website/": require("./website"),

    "/code/vue/": require("./vue"),

    "/code/node-js/": [
      "",
      "intro",
      "install",
      "environment",
      "program",
      "module",
    ],

    "/code/mini-app/": require("./mini-app"),

    "/code/language/python/": require("./language/python"),

    "/code/language/typescript/": require("./language/typescript"),

    "/code/language/markdown/": require("./language/markdown"),

    "/code/language/": require("./language"),

    "/code/github/": require("./github"),

    "/code/Android/": ["", "intro", "base", "resource"],

    "/code/": require("./code"),

    "/about/": ["", "site"],

    // fallback
    "/": ["", "note/", "code/", "software/", "about/"],
  }),

  en: sidebarConfig({
    "/en/note/": [""],

    "/en/code/": [""],

    "/en/about/": ["", "site"],

    // fallback
    "/en/": ["", "code/", "about/"],
  }),
};
