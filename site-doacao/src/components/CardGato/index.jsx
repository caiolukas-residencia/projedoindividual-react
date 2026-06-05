import * as S from "./style.jsx"

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
    if (!gato) {
        return <div style={{ border: '1px solid red', padding: '10px' }}>Erro: Gato não encontrado</div>;
    }
    
    return (
        <S.CardContainer>
            <S.FotoGato src={gato.imagem} alt={gato.nome} />

            <S.InfoGato>
                <h3>{gato.nome}</h3>
                <p><strong>Sexo:</strong> {gato.sexo}</p>
                <p><strong>Idade: {gato.idade}</strong> anos</p>
                <p><strong>Status:</strong> {gato.vivo ? "Vivo" : "Morto"}</p>
                <small>Viajou até: {locaisAventura[gato.experiencia] || "-"}</small>
            </S.InfoGato>
        </S.CardContainer>
    )
}