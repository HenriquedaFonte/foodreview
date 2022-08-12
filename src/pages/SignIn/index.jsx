import {  useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Background, Container, Form }  from './styles';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  

  function handleSignIn() {
    signIn({ email, password });
  };

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
  return (
    <Container>
      <Form>
        <h1>FoodReview</h1>
        <p>Application for restaurant evaluations</p>
        <h3>Login</h3>
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
          <button 
            type="button" 
            id="btnPassword" 
            className={classButton} 
            onClick={ToggleTypeInput}>
          </button>
        </div>
        <Button 
          title="Login"
          onClick={handleSignIn}
        />        
        <ButtonText 
          title="Sign Up" 
          to="/signup" 
        />       
      </Form>
      <Background/>
    </Container>
  );

};





