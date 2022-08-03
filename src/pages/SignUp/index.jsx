import { useState } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Form } from './styles';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { api } from '../../services/api';


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("All fields must be filled!")
    };

    api.post("/users", { name, email, password })
    .then(() => {
      alert("User has been registered!");
      navigate("/");
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      }else {
        alert("User registration error!")
      }
    });

  };

  const [typeInput, setTypeInput] = useState("password");
  const [classButton, setClassButton] = useState("hidePassword");
  function ToggleTypeInput() {
    if (typeInput === "password") {
      setTypeInput("text");
      setClassButton("showPassword");
    } else {
      setTypeInput("password");
      setClassButton("hidePassword");
    };
  };
  return (
    <Container>
      <Form>
        <h1>FoodReview</h1>
        <p>Application for restaurant evaluations</p>
        <h3>Create your account</h3>
        <Input 
          placeholder="Name" 
          type="text" 
          icon={FiUser} 
          onChange={e => setName(e.target.value)} 
        />
        <Input 
          placeholder="Email" 
          type="text" 
          icon={FiMail} 
          onChange={e => setEmail(e.target.value)} 
        />
        <div className="inputPassword">
          <Input 
            id="inputPassword" 
            placeholder="Password" 
            type={typeInput} 
            icon={FiLock} 
            onChange={e => setPassword(e.target.value)} 
          /> 
          <button type="button" id="btnPassword" className={classButton} onClick={ToggleTypeInput}></button>
        </div>
        <Button title="SingUp" onClick={ handleSignUp } />        
        <ButtonText title="Back to login" icon={FiArrowLeft} to="/"/>        
      </Form>
      <Background />
    </Container>
  )
}
