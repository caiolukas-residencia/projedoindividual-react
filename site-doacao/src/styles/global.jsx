import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #BCC1C0; 
    
    color: #242621;
    
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    background-color: #4B5345; 
    color: #E6E6E3; 
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    
   border: 3px solid #242621; 
    border-radius: 4px;
    
   box-shadow: 3px 3px 0px #242621; 
    
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s, background-color 0.2s;
  }

  button:hover {
    background-color: #5D6755; 
  }

  button:active {
    transform: translate(3px, 3px); 
    box-shadow: 0px 0px 0px #242621; 
  }

  button:disabled {
    background-color: #8C9485; /* Verde bem desbotado */
    color: #555;
    cursor: not-allowed;
    box-shadow: none;
    transform: translate(3px, 3px); /* Mantém afundado */
  }
`;