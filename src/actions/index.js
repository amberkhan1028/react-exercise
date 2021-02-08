import hackerNewsAlgolia from '../apis/hackerNewsAlgolia'

export const fetchArticles =  () => async dispatch => {
  const response = await hackerNewsAlgolia.get('/items/:id');

  dispatch({ type: "FETCH_ARTICLES", payload: response})
  }