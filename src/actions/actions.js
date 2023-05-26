import { 
    ADD_ARTICLE,
    SET_CATEGORY_FILTER,
    DELETE_ARTICLE,
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_ERROR,
    RECEIVE_ARTICLES
 } from './actionTypes';
 import axios from 'axios';
 import { v4 as uuidv4 } from 'uuid';

///// My API key: 2e075d4e3afd46c581e5ab6e7401a8ab 

export const addAction = (newArticle) => {
    return {
      type: ADD_ARTICLE,
      payload: newArticle,
    };
  };

  export const setCategoryFilter = (categoryFilter) => {
    return {
      type: SET_CATEGORY_FILTER,
      payload: categoryFilter
    };
  };

  export const deleteArticle = (id, isFromSearch = false) => {
    return {
        type: DELETE_ARTICLE,
        payload: {
          id,
          isFromSearch
        }
    };
  };

  export const startFetchingArticles = (payload) => {
    return{
        type: FETCH_ARTICLES_START,
        payload: payload
    };
};

export const receivedArticles = (articles) => {
    return{
        type: RECEIVE_ARTICLES,
        payload: articles
    };
};

export const receivedError = (error) => {
    return{
        type: FETCH_ARTICLES_ERROR,
        payload: error
    };
};

export const searchArticlesByCategory = (categoryFilter) => {
    return async (dispatch) => {
      dispatch(setCategoryFilter(categoryFilter));
      dispatch(startFetchingArticles(true));

      var url = 'https://newsapi.org/v2/top-headlines?country=us&category='+categoryFilter+'&'+'apiKey=2e075d4e3afd46c581e5ab6e7401a8ab'

      try {
        const response = await axios.get(url);
        const searchedArticles = response.data.articles.map((article) => {
          return {
            id: uuidv4(),
            title: article.title,
            author: article.author,
            category: categoryFilter,
            content: article.content || "No content..",
            image: article.urlToImage || "No image..",
            url: article.url,
            isFromSearch: true
          };
        });
        console.log('the receved articles!! ',  searchedArticles);
        dispatch(receivedArticles(searchedArticles));
      } catch (error) {
        console.log('API error..', error);

        dispatch(receivedError(error.message));
      }
    }
}













