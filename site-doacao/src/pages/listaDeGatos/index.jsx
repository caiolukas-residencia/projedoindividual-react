import { useState, useEffect, use } from "react"
import { dadosNPC } from "../../data/dadosNPC.jsx"
import { dadosGatos } from "../../data/dadosGatos.jsx"
import { CardGato } from "../../components/CardGato/index.jsx"
import * as S from "./style"

export function ListarGatos() {
    const [gatoParaDoar, setGatoParaDoar] = useState(null);
    const [listaDeGatos, setListaDeGatos] = useState(() => {
        const saveJogo = localStorage.getItem('mewgenics_gatos');

        if(saveJogo) {
            return JSON.parse(saveJogo);
        }

        return dadosGatos;
    });

    useEffect(() => {
        localStorage.setItem('mewgenics_gatos', JSON.stringify(listaDeGatos));
    }, [listaDeGatos]);

    const confirmarDoacao = () => {
        const novaLista = listaDeGatos.filter(gato => gato.id !== gatoParaDoar.id);
        setListaDeGatos(novaLista);
        setGatoParaDoar(null);
    }

    const npcAceitaGato = (npc, gato) => {
        switch (npc.id) {
            case 1:
                return (gato.temMutacao || gato.temDesordem || gato.temParasita) && gato.vivo;
            case 2:
                return (gato.aposentado && gato.experiencia >= 10) && gato.vivo;
            case 3:
                return gato.aposentado && gato.vivo;
            case 4:
                return (gato.idade === 1) && gato.vivo;
            case 5:
                return (gato.idade >= 5) && gato.vivo;
            case 6:
                return gato.temFerimento && gato.vivo;
            case 7:
                return !gato.vivo;
            default:
                return false;
        }
    }

    const obterTextoBotao = (npc, aceita) => {
        if(npc.id === 8) {
            return "Desencana, querida!";
        }
        
        if(!aceita) {
            return "Não aceita";
        }

        return "Confirmar doação"
    }
    
    return (
        <S.ContainerTela>

            <S.GridGatos>
                {listaDeGatos.map(gato => (
                    <div key={gato.id}>
                        <CardGato gato={gato} />
                        <button onClick={() => setGatoParaDoar(gato)}>Doar gato</button>
                    </div>
                ))}
            </S.GridGatos>

            {gatoParaDoar && (
                <S.FundoEscuroModal>
                    <S.CaixaModal>

                        <h2>Escolha um NPC para doar: {gatoParaDoar.nome}</h2>
                        <button onClick={() => setGatoParaDoar(null)}>Fechar</button>

                        
                        <S.GridNPCs>
                            {dadosNPC.map(npc => {
                                const aceita = npcAceitaGato(npc, gatoParaDoar);

                                return(
                                    <S.SelecaoNPC key={npc.id} $habilitado={aceita}>
                                        <img src={npc.imagem} alt={npc.nome} />
                                        <h4>{npc.nome}</h4>

                                        <button disabled={!aceita} onClick={confirmarDoacao}>
                                            {obterTextoBotao(npc, aceita)}
                                        </button>
                                    </S.SelecaoNPC>
                                )
                            })}
                        </S.GridNPCs>
                        

                    </S.CaixaModal>
                </S.FundoEscuroModal>
            )}
        </S.ContainerTela>


    )
}