import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Fragment } from 'react';

import { Container, Profile } from './styles';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Input } from '../../components/Input';

export function Header({onChange}) {

  const { signOut, user } = useAuth([]);
  let location = useLocation();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>FoodReview</h1>
      {location.pathname === "/" ? (<Input 
        placeholder="Search by title" 
        onChange={onChange}
      />) : <></>
    }
      <Profile>
        <div>          
          <strong>{user.name}</strong>
          <a href="#" onClick={ signOut }>Exit</a>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="user picture" />
        </Link>
      </Profile>
    </Container>
  )
}