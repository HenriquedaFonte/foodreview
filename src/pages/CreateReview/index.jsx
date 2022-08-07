import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import { IoFastFood } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


import { Bookmarks } from '../../components/Bookmarks';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import { Container, Form } from './styles';


export function CreateReview() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("")

  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewReview() {
    if (!title) {
      return alert("Please insert a restaurant title");
    }

    if (!rating) {
      return alert("Please insert a rating");
    }

    const rule = rating >= 0 && rating <= 5
    if (!rule) { 
      return alert("Please insert a number between 1 and 5");     
    }

    if (!description) {
      return alert("Please insert a review");
    }

    if (newTag) {
      alert("A TAG has been written but not added, to complete creation click on the +.")
    }

    await api.post("/reviewNotes", {
      title,
      description,
      rating,
      tags
    });

    alert("Review created!");
    navigate("/");  
  };

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonText title="Back" icon={FiArrowLeft} to="/"/>
          <div className="top">            
            <Title title="New restaurant" />
          </div>
          <div className="input">
            <Input 
              placeholder="Name" 
              type="text" 
              icon={IoFastFood} 
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Your note (0 to 5)"
              type="text"
              maxLength="3"
              icon={BsStarFill}
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <textarea 
            type="text" 
            className="textArea" 
            placeholder="Review" 
            onChange={e => setDescription(e.target.value)}
          />
          <h3>Bookmarks</h3>
          <div className="bookmarks">
            {
              tags.map((tag, index) => (
                <Bookmarks 
                  key={String(index)} 
                  value={tag} 
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <Bookmarks  
              isNew 
              placeholder="New Tag" 
              onChange={e => setNewTag(e.target.value)} 
              value={newTag}
              onClick={handleAddTag} 
            />
          </div>
          <footer>
            <Button 
              title="Save changes" 
              onClick={handleNewReview}
            />
          </footer>
        </Form>
      </main>
    </Container>
  )
};