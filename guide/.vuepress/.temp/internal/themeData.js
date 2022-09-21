export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Documentation\",\"link\":\"https://guildedts.js.org\"}],\"sidebar\":[{\"text\":\"Home\",\"children\":[\"/\",\"/Contributing.md\"]},{\"text\":\"Getting started\",\"children\":[\"/getting-started/\",\"/getting-started/setting-up-a-bot.md\",\"/getting-started/publishing-your-bot.md\"]},{\"text\":\"Creating your bot\",\"children\":[\"/creating-your-bot/\",\"/creating-your-bot/creating-commands.md\",\"/creating-your-bot/listening-for-events.md\"]}],\"sidebarDepth\":3,\"docsRepo\":\"guildedts/guide\",\"docsDir\":\"guide\",\"logo\":\"https://guildedts.js.org/media/logo.png\",\"repo\":\"guildedts/guide\",\"editLinkText\":\"Edit this page on GitHub\",\"contributors\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
