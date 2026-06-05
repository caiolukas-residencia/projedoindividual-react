export const dadosGatos = [
    /*
    Exemplo de gato:
        {
        id: 1,
        nome: "Sr. Exemplo",
            O sexo do gato pode ser Macho/Femea/Indefinido
        sexo: "Indefinido",
            No jogo, a idade dos gatos escala conforme os dias que se passam no jogo. A idade ainda é tratada por anos, mas, para fins mecânicos, ela é
            contabilizada por dias. Apesar de não ser uma regra no jogo, o gato será considerado recém-nascido com idade 1.
        idade: 4,
            Para simplificar a ideia, em vez de usar uma lista das mutações, desordens e parasitas, haverá apenas verificações se eles estão presentes ou não. Isso
            ocorre porque cada mutação e parasita tem um asset distinto, e todos os quatro tem efeitos distintos. O ferimento serve para verificar a doação pro Jackie,
            enquanto o resto serve para o Beanies.
        temMutacao: false,
        temDesordem: false,
        temParasita: false,
        temFerimento: false,
            Gatos aposentados são gatos que já saíram numa aventura.
        aposentado: false,
            Já a experiência é um valor numérico relacionado ao capítulo que o gato se aventurou. Essa verificação é relevante para o Butch, pois, ainda que
            um gato aposentado seja experiente, ele pode ser aposentado sem ter se aventurado tão longe. Para o trabalho, o Butch quer gatos que viajaram "além do 
            presente", ou seja, que viajaram no tempo; isso acontece apenas depois do gato se aventurar no laboratório, considerando o seguinte nivelamento:

            0 - Não se aventurou <- Nem Butch ou Frank aceitam.
            1 - Beco
            2 - Esgoto/Ferro-velho
            3 - Cavernas/Cemitério
            4 - Domínio Pulsante
            5 - Deserto
            6 - Cratera/Bunker
            7 - Lua/Núcleo
            8 - Ruptura
            9 - Laboratório <- Até aqui, o gato é aceito pelo Frank, por ser aposentado, mas não por Butch.
            10 - Era do Gelo/Futuro <- A partir daqui, o gato pode ser aceito pelo Butch ou Frank.
            11 - Jurássico/Fim
            12 - Infinito

            Teoricamente, a "distância de aventura" entre um gato que foi ao Domínio Pulsante, à Ruptura e ao infinito são iguais, considerando que o jogo segue 
            a estrutura de capítulos e todos são o capítulo 4 de seus respectivos atos. Porém, o jogo considera que cada ato tem um "peso" diferente; ir ao 
            Domínio Pulsante é apenas uma viagem extensa, enquanto que a ruptura ultrapassa os limites físicos e o infinito ultrapassa os limites do tempo. Por
            isso o ranqueamento progressivo.
        experiencia: 0,
            Saber se o gato está vivo ou morto é relevante para a verificação do Organ Grinder ("???"), então o gato não sai do registro quando morre, apenas 
            quando é doado.
        vivo: false
    }    
    */
    {
        id: 1,
        nome: "Quixote",
        sexo: "Macho",
        idade: 4,
        temMutacao: false,
        temDesordem: true,
        temParasita: false,
        temFerimento: true,
        aposentado: true,
        experiencia: 11,
        vivo: true
    },
    {
        id: 2,
        nome: "Jackira",
        sexo: "Femea",
        idade: 5,
        temMutacao: true,
        temDesordem: false,
        temParasita: false,
        temFerimento: false,
        aposentado: true,
        experiencia: 7,
        vivo: true
    },
    {
        id: 3,
        nome: "Wingdings",
        sexo: "Indefinido",
        idade: 1,
        temMutacao: true,
        temDesordem: true,
        temParasita: false,
        temFerimento: false,
        aposentado: false,
        experiencia: 0,
        vivo: true
    }
]