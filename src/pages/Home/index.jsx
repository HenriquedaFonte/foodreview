import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { Card, Container, Content } from './styles'

import { api } from '../../services/api'
import { Tag } from '../../components/Tag';
import { Title } from '../../components/Title';
import { Header } from '../../components/Header';
import { Evaluation } from '../../components/Evaluation';
import { Description } from '../../components/Description';




export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/reviewNotes?title=${search}`);
      setNotes(response.data);
    }

     fetchNotes(); 
  },[search]);

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />
      <main>
        <Content>
          <div>
            <h1>My restaurants</h1>
            <Link to="/createreview">
              <button title="Add a restaurant">
                <FiPlus />
                Add new restaurant
              </button>
            </Link>
          </div>
          {notes.map(note => (
            <Card>
              <a onClick={() => navigate(`/reviewpreview/${note.id}`)}>
                <Title title={note.title} />
                <Evaluation rating={note.rating} />
                <Description
                  className="description"
                  description={note.description}
                />
                {note.tags.map(tag => (
                  <Tag title={tag.name} />
                ))}
              </a>
            </Card>
          ))}
        </Content>
      </main>
    </Container>
  )
}
