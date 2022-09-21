export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Guilded.TS Guide\",\"description\":\"A Guide for creating a Guilded.TS bot.\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://guildedts.js.org/media/logo.jpg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
