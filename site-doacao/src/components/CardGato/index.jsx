const locaisAventura = {
    1: "Beco",
    2: "Esgoto/Ferro-velho",
    3: "Cavernas/Cemitério",
    4: "Domínio Pulsante",
    5: "Deserto",
    6: "Cratera/Bunker",
    7: "Lua/Núcleo",
    8: "Ruptura",
    9: "Laboratório",
    10: "Era do Gelo/Futuro",
    11: "Jurássico/Fim",
    12: "Infinito"
}

export function CardGato({ gato, aoSelecionar, estaSelecionado }) {
    return (
        <div onClick = {() => aoSelecionar(gato.id)}>
            <img src={gato.imagem} alt={gato.nome}/>
            <h3>{gato.nome}</h3>
            <p>Sexo: {gato.sexo}</p>
            <p>Idade: {gato.idade} anos</p>
            <p>Status: {gato.vivo ? "Vivo" : "Morto"}</p>
            <small>Viajou até: {locaisAventura[gato.experiencia] || "Desconhecido"}</small>
        </div>
    )
}