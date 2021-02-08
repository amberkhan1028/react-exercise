const initState = {
  searches: [],
  results: []
}

const articlesReducer = (state = initState, action) => {
  if (action.type === 'CREATE_SEARCH') {
      return {
          ...state,
          searches: [...state.searches, action.terms]
      }
  } else if (action.type === 'FETCH_ARTICLES') {
    let search_list = [...state.searches];
    search_list.push(action.search);
      return {
          ...state,
          results: action.results.hits,
          searches: search_list,
      }
  } else if (action.type === 'FETCH_ARTICLES_ERROR') {
      console.log('fetch results error', action.err);
      return state;
  }
  return state;
}

export default articlesReducer;