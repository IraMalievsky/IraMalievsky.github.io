import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../actions/actions';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './AddArticleForm.css';
import { v4 as uuidv4 } from 'uuid';
// import initState from '../reducers/initState';

const AddArticleForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    category: '',
    content: ''
  });


  // I will need the below code only if I want a drop down with the filtered categories)
  // const categories = initState.articles.map((article) => article.category);
  // save all categories in a variable 
  // const uniqueCategories = [...new Set(categories)];
  // create a new array of these resolts - withour duplicates //


  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the page from refreshing itself //

    const newArticle = {
        id: uuidv4(),
        ...formData
    }
    dispatch(addAction(newArticle));
    alert("New article was added successfully!");

    setFormData({
      author: '',
      title: '',
      category: '',
      content: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Article</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="custom-group">
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="custom-group">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="custom-group">
            <Form.Label>Category:</Form.Label>
            <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
            >
            </Form.Control>
        </Form.Group>

        <Form.Group className="custom-group">
          <Form.Label>Content:</Form.Label>
          <Form.Control
            className="form-input"
            as="textarea"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit" className="form-submit">Add Article</Button>
      </Form>
    </div>
  );
};

export default AddArticleForm;

/* additional changes we can apply to the category input:

                {uniqueCategories.map((category) => (
                <option key={uuidv4()} value={category}>
                    {category}
                </option>
                ))}

 ** we'll place it inside the <Form.Control>

 + and :

                 className="category-dropdown"
                as="select"

                */

