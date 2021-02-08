// import hackerNewsAlgolia from '../apis/hackerNewsAlgolia'


// export const FETCH_ARTICLES = "FETCH_ARTICLES";

// export const fetchArticles =  (query) => async dispatch => {
//   const response = await axios.get("https://hn.algolia.com/api/v1/search?query=" + query);
//   console.log(response);
//   dispatch({ type: "FETCH_ARTICLES", payload: response})
//   }

//   // idk
//   export const search = (term) => {
//     return {
//         type: 'CREATE_SEARCH',
//         payload: term
//     }
// }

export const fetchArticles = (articles, search) => {
  return {
    type: "FETCH_ARTICLES",
    results: articles,
    search: search,
  }
}