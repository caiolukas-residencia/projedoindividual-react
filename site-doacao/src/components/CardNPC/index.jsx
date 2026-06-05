import * as S from "./style.jsx"

export function CardNPC({ npc }) {
    return (
        <S.CardContainer>
            <S.FotoNPC src={npc.imagem} alt={npc.nome}/>
            <h3>{npc.nome}</h3>
            <p><strong>Requisito: </strong>{npc.requisito}</p>
            <p><strong>Recompensa: </strong>{npc.recompensa}</p>
        </S.CardContainer>
    )
}