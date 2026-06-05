# projedoindividual-react
Repositório para o trabalho individual de React do Serratec. O tema escolhido foi relacionado ao jogo Mewgenics, adaptando uma mecânica a uma aplicação React.

No jogo, você abriga e reproduz diversos gatos que, posteriormente, são usados em combate e/ou doados a NPCs para conseguir recompensas. Cada NPC precisa de gatos com características específicas, e você envia eles através de um cano para o destinatário apropriado. A ideia foi adaptar essa mecânica para uma aplicação onde é possível gerir o envio dos gatos através de uma interface. (Ah, o Steven também aparece, por algum motivo.)

**O projeto se divide na seguinte estrutura:**
- components
⤷ CardGato
    ⤷ index.jsx
    ⤷ style.jsx
⤷ CardNPC
    ⤷ index.jsx
    ⤷ style.jsx
⤷ Header
    ⤷ index.jsx
    ⤷ style.jsx
- data
⤷ dadosGatos.jsx
⤷ dadosNPC.jsx
- pages
⤷ adicionarGatos
⤷ listaDeGatos
⤷ listaDeNPCs
- styles
⤷ global.jsx
- App.jsx
- main.jsx

A página que lista os gatos é tratada como Home devido ao contexto. A pasta styles foi criada para armazenar um arquivo de estilo global. A aplicação já vem com alguns gatos preenchidos, armazenando possíveis novos gatos no LocalStorage. Gatos que são doados são removidos dos dados locais. O sistema previne entrada inválida de dados, em nível básico, ao adicionar um gato, além de impedir doações indevidas, filtrando automaticamente para quem é possível doar.

**Pontos de melhoria observados:**

- O Organ Grinder usa o nome do jogador dentro do jogo. Caso houvesse um sistema de autenticação, poderia ser feita uma verificação para adaptar o nome exibido ao nome do usuário.
- Para fins didáticos, Butch requer somente gatos que viajaram no tempo; porém, no jogo, o NPC escala as exigências conforme sobre de nível com o jogador. O app poderia armazenar quantos gatos foram doados para cada NPC a fim de fazer esse nivelamento, adaptando a recompensa exibida na tela de Listar NPCs; o caso de Butch iria além, modificando o critério de recebimento.
- Foram usadas checkboxes para pontuar características particulares do gato, mas seria possível exibir assets dessas informações nos cards dos gatos, podendo até fornecer informações mais específicas do que elas significam.
- Considerando que o programa tivesse um banco de dados por trás, seria possível fazer upload de uma imagem diretamente em vez de usar uma URL.
- Outras funcionalidades poderiam ser implementadas para gerir os gatos, como buscar, editar ou até deletar os gatos. Como uma extensão disso, poderia haver uma simulação da mecânica de tempo do jogo para editar automaticamente alguns dados dos gatos, como a idade, através de um botão para "passar o dia".
- O jogo possui sistema de cruzamento, então funcionalidades que também poderiam ser relevantes para discernir qual gato seria doado para quem (e até estão presentes no jogo) é a de colocar tags nos gatos e consultar até X geração da sua árvore genealógica.