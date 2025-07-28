import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ScouterUI docs",
  description: "ScouterUI components documentation",
  base: "/scouter-ui/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Button', link: '/components/button' },
          { text: 'ButtonGroup', link: '/components/button-group' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Counter', link: '/components/counter' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Heading', link: '/components/heading' },
          { text: 'RadioButton', link: '/components/radio-button' },
          { text: 'Stack', link: '/components/stack' },
          { text: 'TextField', link: '/components/text-field' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FRCScouter/scouter-ui' }
    ]
  }
})
