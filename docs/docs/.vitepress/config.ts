import {defineConfig} from 'vitepress'

export default defineConfig({
  title: 'Code Field Plugin',
  description: 'Documentation for the Code Field plugin',
  base: '/docs/code-field/',
  lang: 'en-US',
  head: [
    ['meta', {content: 'https://github.com/nystudio107', property: 'og:see_also',}],
    ['meta', {content: 'https://twitter.com/nystudio107', property: 'og:see_also',}],
    ['meta', {content: 'https://youtube.com/nystudio107', property: 'og:see_also',}],
    ['meta', {content: 'https://www.facebook.com/newyorkstudio107', property: 'og:see_also',}],
  ],
  themeConfig: {
    socialLinks: [
      {icon: 'github', link: 'https://github.com/nystudio107'},
      {icon: 'twitter', link: 'https://twitter.com/nystudio107'},
    ],
    logo: '/img/plugin-logo.svg',
    editLink: {
      pattern: 'https://github.com/nystudio107/craft-code-field/edit/develop-v4/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    algolia: {
      appId: '74MFI8NU6J',
      apiKey: '99c5714e228ccbcda7903f5f6e419a19',
      indexName: 'nystudio107-code-field'
    },
    lastUpdatedText: 'Last Updated',
    sidebar: [],
    nav: [
      {text: 'Home', link: 'https://nystudio107.com/plugins/code-field'},
      {text: 'Store', link: 'https://plugins.craftcms.com/codefield'},
      {text: 'Changelog', link: 'https://nystudio107.com/plugins/code-field/changelog'},
      {text: 'Issues', link: 'https://github.com/nystudio107/craft-code-field/issues'},
      {
        text: 'v4', items: [
          {text: 'v4', link: '/'},
          {text: 'v3', link: 'https://nystudio107.com/docs/codefield/v3/'},
        ],
      },
    ]
  },
});
