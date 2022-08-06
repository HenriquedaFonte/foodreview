import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar }  from './styles';

import { api } from '../../services/api';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [typeInput, setTypeInput] = useState("password");
  const [classButton, setClassButton] = useState("hidePassword");
  function ToggleTypeInput() {
    if (typeInput === "password") {
      setTypeInput("text");
      setClassButton("showPassword")
    } else {
      setTypeInput("password");
      setClassButton("hidePassword")
    }
  };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email, 
      old_password: oldPassword,
      password: newPassword,
    };   
    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  };

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <ButtonText title="Back" icon={FiArrowLeft} to='/' />   
      </header>
      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="user profile photo"
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          placeholder="Name" 
          type="text" 
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}        />
        <Input
          placeholder="Email" 
          type="text" 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
        <Input
          placeholder="Password" 
          type="password"  
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)} 
        />
        <div className="inputPassword">
          <Input 
            placeholder="New password" 
            type={typeInput} 
            icon={FiLock}
            onChange={e => setNewPassword(e.target.value)}  
          /> 
          <button 
            type="button" 
            id="btnPassword" 
            className={classButton} 
            onClick={ToggleTypeInput}>
          </button>
        </div>
        <Button title="Save" onClick={handleUpdate} />        
      </Form>      
    </Container>
  )
}