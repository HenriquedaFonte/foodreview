import { useParams } from 'react-router-dom';
import { useEffect, useState, } from 'react';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';


import { Author, Container, Content } from './styles';


import { api } from '../../services/api';
import { Tag } from '../../components/Tag';
import { Title } from '../../components/Title';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import { Evaluation } from '../../components/Evaluation';
import { ButtonText } from '../../components/ButtonText';
import { Description } from '../../components/Description';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function ReviewPreview() {
  const { user } = useAuth();
  const [note, setNote] = useState({});
  const params = useParams();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  async function handleRemove() {
    const confirmation = window.confirm("Are you sure you want to remove this review?");

    if (confirmation) {
      await api.delete(`/reviewNotes/${params.id}`);      
    } 
  }
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/reviewNotes/${params.id}`)
      setNote(response.data)
    }
    fetchNote()
  }, [])
  
  return (
    <Container>
      <Header />
      <main>
        <Content>  
          <div className="navigation">
            <ButtonText 
              title="Back" 
              icon={FiArrowLeft} 
              to="/"
            />          
            <ButtonText 
              type="button" 
              title="Delete review" 
              icon={RiDeleteBinLine} 
              onClick={handleRemove} 
              to="/" 
            />          
          </div>        
          <div className="titleReview">
            <Title title={note.title} />
            <Evaluation rating= {note.rating} />
          </div>
          <Author>
            <div>
              <img
                src={avatarUrl}
                alt="user picture"
              />
              <span> By { user.name }</span>
            </div>
            <div>
              <FiClock />
              <span>{ note.created_at }</span>
            </div>
          </Author>
          <div className="bookmarks">
            {note.tags && note.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}

          </div>
          <Description
            description={note.description}
          />
        </Content>
      </main>
    </Container>
  )
}