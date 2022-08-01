import {  useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Background, Container, Form }  from './styles';

export function SignIn() {
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
        <Input placeholder="Email" type="text" icon={FiMail} />
        <div className="inputPassword">
          <Input id="inputPassword" placeholder="Password" type={typeInput} icon={FiLock} /> 
          <button type="button" id="btnPassword" className={classButton} onClick={ToggleTypeInput}></button>
        </div>
        <Button title="Login"/>        
        <ButtonText title="SingUp" to="/signup" />       
      </Form>
      <Background/>
    </Container>
  );

};


// let btn = document.querySelector("#btnPassword");
// btn.addEventListener("click", () => {
//   console.log("teste")
//     let input = document.querySelector("#inputPassword");
//     if(input.getAttribute("type") == "password") {
//       console.log('teste2')
//         input.setAttribute("type", "text");
//         btn.setAttribute("className", "hidePassword");
//     } else {
//         input.setAttribute("type", "password");
//         btn.setAttribute("className", "showPassword");
//     }
//   });




