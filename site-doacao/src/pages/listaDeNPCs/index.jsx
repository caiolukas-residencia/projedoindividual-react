import { dadosNPC } from "../../data/dadosNPC"
import { CardNPC } from "../../components/CardNPC/index.jsx"
import * as S from "./style.jsx"

export function ListarNPCs() {
    return (
        <S.ContainerTela>
            <S.GridNPCs>
                {dadosNPC.map(npc =>
                        <CardNPC nomeJogador="Menegueli" key={npc.id} npc={npc} />
                )}
            </S.GridNPCs>
        </S.ContainerTela>
    )
}