
/* 21/05/23 - 20:58 : Chapter 10 page 22 ****************** */




/*import axios from 'axios';
import { useDispatch } from 'react-redux';


export const searchArticlesByCategory = (newCategory) => {

  const dispatch = useDispatch();
  return async () => {
    dispatch(setCategoryFilter(newCategory));

    const url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&category=' + newCategory + '&' +
      'apiKey=d1c7246186ff44abb23e9b124babfa73';

    try {
      const response = await axios.get(url);

      const newArticles = response.data.articles.map((article, index) => ({
        id: index,
        title: article.title,
        author: article.author,
        category: newCategory,
        article: article.content,
        image: article.urlToImage,
        url: article.url
      }));

      dispatch(receivedArticles(newArticles));
    } catch (error) {
      dispatch(receivedError(error.message));
    }
  };
};*/


/* NOT GOOD APPROACH ! WHY IS THAT ?

In the code you provided before, you were using the 
useDispatch hook from react-redux within your action creator 
instead of using the Thunk middleware .

However, using useDispatch directly in an action creator is 
not the recommended approach. Action creators should be pure 
functions that return plain objects or functions (thunks).
*/