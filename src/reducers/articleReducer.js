import initState from "./initState";
import { DELETE_ARTICLE, ADD_ARTICLE } from '../actions/actionTypes';

const articleReducer = (state = initState.articles, action) => {
    switch (action.type) {
      case DELETE_ARTICLE:
        if (!action.payload.isFromSearch) {
          const updatedArticles = state.filter(article => article.id !== action.payload.id && !article.isFromSearch);
          return updatedArticles;
        } else {
          const updatedSearchArticles = state.filter(article => article.id !== action.payload.id);
          return updatedSearchArticles;
        }
      case ADD_ARTICLE:
        return [...state, action.payload];
          default:
            return state;
    }
  }

  export default articleReducer;

  
        /* 
        const updatedSearchArticles = state.filter(article => article.id !== action.payload.id);
        return updatedSearchArticles;
        */
