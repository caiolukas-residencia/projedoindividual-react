export function CardNPC({ npc, nomeJogador }) {
    return (
        <div>
            <img src={npc.imagem} alt={npc.nome}/>
            <h3>{npc.id === 7 ? nomeJogador : npc.nome}</h3>
            <p><strong>Requisito: </strong>{npc.requisito}</p>
            <p><strong>Recompensa: </strong>{npc.recompensa}</p>
        </div>
    )
}