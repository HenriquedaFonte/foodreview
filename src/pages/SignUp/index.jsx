import {  useState } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'

export function SignUp() {
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
        <h3>Create your account</h3>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <div className="inputPassword">
          <Input id="inputPassword" placeholder="Password" type={typeInput} icon={FiLock} /> 
          <button type="button" id="btnPassword" className={classButton} onClick={ToggleTypeInput}></button>
        </div>
        <Button title="SingUp" />        
        <ButtonText title="Back to login" icon={FiArrowLeft} to="/"/>        
      </Form>
      <Background />
    </Container>
  )
}
