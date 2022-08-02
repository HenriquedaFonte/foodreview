import { createGlobalStyle } from 'styled-components'; 

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: #D98014 #240a0a;
  }


  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #240a0a;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #D98014;
    border-radius: 10px;
    border: 3px solid #240a0a;
  }

  body {
    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
    color: ${({ theme })=> theme.COLORS.WHITE};

    -webkit-fonte-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;