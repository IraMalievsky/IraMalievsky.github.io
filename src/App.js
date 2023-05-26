import './App.css';
import AddArticleForm from './Components/AddArticleForm';
import ArticleList from './Components/ArticleList';


function App() {
  return (
    <div className="App">
          <ArticleList />
          <AddArticleForm />
    </div>
  );
}

export default App;
