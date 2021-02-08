export const fetchArticles = (articles, search) => {
  return {
    type: "FETCH_ARTICLES",
    results: articles,
    search: search,
  }
}