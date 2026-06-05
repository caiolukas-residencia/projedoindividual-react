import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Importando uma fonte estilo desenho à mão do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* Fundo cinza dessaturado inspirado no céu do jogo */
    background-color: #BCC1C0; 
    
    /* Cor do texto simulando o traço de nanquim escuro */
    color: #242621;
    
    /* Aplicando a fonte cartoonzada */
    font-family: 'Kalam', 'Comic Sans MS', cursive, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* Estilizando todos os botões do site para parecerem elementos da interface do jogo,
    usando o Verde Murgo do cano como cor principal.
  */
  button {
    background-color: #4B5345; /* O Verde Murgo */
    color: #E6E6E3; /* Texto claro para contraste */
    font-family: 'Kalam', cursive;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    
    /* Bordas grossas e escuras características do estilo de arte */
    border: 3px solid #242621; 
    border-radius: 4px;
    
    /* Sombra sólida (sem desfoque) para dar o aspecto 2D/Comic */
    box-shadow: 3px 3px 0px #242621; 
    
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s, background-color 0.2s;
  }

  /* Efeito de hover (passar o mouse) */
  button:hover {
    background-color: #5D6755; /* Clareia levemente o Verde Murgo */
  }

  /* Efeito de clique (o botão afunda) */
  button:active {
    transform: translate(3px, 3px); /* Move o botão na direção da sombra */
    box-shadow: 0px 0px 0px #242621; /* Remove a sombra temporariamente */
  }

  /* Estilo para botões desabilitados (como o "Não Aceita" dos NPCs) */
  button:disabled {
    background-color: #8C9485; /* Verde bem desbotado */
    color: #555;
    cursor: not-allowed;
    box-shadow: none;
    transform: translate(3px, 3px); /* Mantém afundado */
  }
`;