import { defineConfig } from 'vitepress'
import sidebar from './sidebars/global.ts'

export default defineConfig({
  base: '/',
  title: "Mod Documentation",
  description: "Documentation for all my mods",

  lastUpdated: true,

  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Main Site', link: 'https://shadowhunter22.dev' },
      { text: 'Docs', link: '/' },
      { text: "Mods", link: "/mods" },
      // { text: "APIs", link: "/apis" },
    ],

    footer: {
      copyright: "© 2026 ShadowHunter22. All Rights Reserved."
    },

    logo: "/icon.png",

    sidebar: {
      "/mods/": [
        ...sidebar
      ]
    }
  }
})
