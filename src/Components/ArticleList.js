import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleInfo from './ArticleInfo';
import { setCategoryFilter, searchArticlesByCategory, deleteArticle } from '../actions/actions';
import './ArticleList.css';

const ArticleList = () => {
  const articles = useSelector((state) => state.searchResults.receivedArt.length >= 2 ? state.searchResults.receivedArt : state.articles);
  const categoryFilter = useSelector((state) => state.categoryFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchArticlesByCategory(categoryFilter));
  }, [categoryFilter, dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setCategoryFilter(category));
  }
  const articlesByCategory = (articles.filter(
    (article) => article.category === categoryFilter
  ));

  return (
    <div className="article">
      <h1>Articles:</h1>
      <div>
        <button onClick={() => handleCategoryClick('Fashion')}> Fashion </button>
        <button onClick={() => handleCategoryClick('Politics')}> Politics </button>
        <button onClick={() => handleCategoryClick('business')}> Business </button>
        <button onClick={() => handleCategoryClick('health')}> Health </button>
        <button onClick={() => handleCategoryClick('entertainment')}> Entertainment </button>
      </div>
      {articlesByCategory.length ? (
        articlesByCategory.map((article) => (
          <ArticleInfo key={article.id} article={article} />
        ))
      ) : (
        <p>No Articles</p>
      )}
    </div>
  );
};

export default ArticleList;