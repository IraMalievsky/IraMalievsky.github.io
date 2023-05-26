import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { deleteArticle } from '../actions/actions';
import { useDispatch } from 'react-redux';

const ArticleInfo = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const dispatch = useDispatch();

  const handleDelete = (id, isFromSearch) => {
    dispatch(deleteArticle(id, isFromSearch))
  }

  return (
    <div className='article' style={{ color: theme.syntax, background: theme.bg }}>
      <p><strong>{props.article.title}</strong> By {props.article.author}:</p>
      <p>{props.article.content}</p>
      <img src={props.article.urlToImage}/>
      <a href={props.article.url}>Link to article</a>
      <button onClick={() => handleDelete(props.article.id, props.article.isFromSearch)}>Delete</button>
    </div>
  );
};



export default ArticleInfo;