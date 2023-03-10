export const URLS = Object.freeze({
  trendingsUrl() {
    return `https://api.spaceflightnewsapi.net/v3/articles?_limit=50`;
  },

  searchById(articleId: string) {
    return `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`;
  },
});
