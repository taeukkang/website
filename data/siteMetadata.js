/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Taeuk Kang",
  author: "Taeuk Kang",
  headerTitle: "Taeuk Kang",
  description: "Taeuk's online presence, blog, and random projects.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://www.taeuk.net",
  siteRepo: "https://github.com/taeuknet/website",
  socialBanner: "",
  mastodon: "https://mastodon.social/@taeuk",
  email: "",
  emailEncoded: "dGFldWtAc3RhbmZvcmQuZWR1", // rudimentary spam protection
  github: "https://github.com/taeukkang",
  twitter: "https://x.com/taeuknet",
  linkedin: "https://www.linkedin.com/in/taeukkang",
  locale: "en-US",
  analytics: {},
  comments: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: "0",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "light",
      // theme when dark mode
      darkTheme: "transparent_dark",
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: "",
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: "en",
    },
  },
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
  },
};

module.exports = siteMetadata;
