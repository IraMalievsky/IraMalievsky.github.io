import initState from "./initState";
import articleReducer from "./articleReducer";
import categoryReducer from "./categoryReducer";
import searchReducer from "./searchReducer";

const allReducers = (state = initState, action) => {
  return {
    articles: articleReducer(state.articles, action),
    categoryFilter: categoryReducer(state.categoryFilter, action),
    searchResults: searchReducer(state.searchResults, action)
  };
};

export default allReducers;

/*
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        categoryFilter: action.payload
      };
    case 'DELETE_ARTICLE':
      const updatedArticles = state.articles.filter(article => article.id !== action.payload);
      return {
        ...state,
        articles: updatedArticles
      };
    default:
      return state;
  }
};

export default rootReducer;








lesson 10 - page 04 assignment:

const articleReducer = (state = initState.articles, action) => {
  switch (action.type) {
    case 'DELETE_ARTICLE':
      const updatedArticles = state.articles.filter(article => article.id !== action.payload);
        return {
          articles: updatedArticle
        };
        default:
          return state;
  }
}

const categoryReducer = (state = initState.categoryFilter, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY_FILTER':
      return {
        categoryFilter: action.payload;
      };
      default:
        return state;
  }
}

const allReducers = (state = initState, action) => {
  return {
    categoryFilter: categoryReducer(state.categoryReducer, action),
    articles: articleReducer(state.articleReducer, action)
  };
};

export default allReducres;

*/