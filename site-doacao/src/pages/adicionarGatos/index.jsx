import { useState } from "react"
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

export function AdicionarGatos() {
    const [formulario, setFormulario] = useState({
        nome: "",
        imagem: "",
        idade: 1,
        sexo: "Indefinido",
        temMutacao: false,
        temDesordem: false,
        temParasita: false,
        temFerimento: false,
        aposentado: false,
        experiencia: 0,
        vivo: true
    });

    const mudarCampo = (evento) => {
        const { name, value, type, checked } = evento.target;

        setFormulario(estadoAnterior => ({
            ...estadoAnterior,
            [name]: type === "checkbox" ? checked :
                    type === "number" || name === "experiencia" ? Number(value) :
                    name === "vivo" ? value === true : value
        }));
    };

    const salvarGato = (evento) => {
        evento.preventDefault();

        const novoGato = {
            id: Date.now(),
            ...formulario
        };

        const saveJogo = localStorage.getItem('mewgenics_gatos');
        const listaAtual = saveJogo ? JSON.parse(saveJogo) : [];

        const novaLista = [...listaAtual, novoGato];
        localStorage.setItem('mewgenics_gatos', JSON.stringify(novaLista));

        alert(`O gato ${formulario.nome} foi registrado com sucesso!`);

        setFormulario({
            nome: "",
            imagem: "",
            idade: 1,
            sexo: "Indefinido",
            temMutacao: false,
            temDesordem: false,
            temParasita: false,
            temFerimento: false,
            aposentado: false,
            experiencia: 0,
            vivo: true
        });
    };

    return (
        <S.ContainerTela>
            <S.FormularioGato onSubmit={salvarGato}>

                <S.SessaoFormulario>
                    <h3>Dados Básicos</h3>

                    <label>Nome do gato:
                        <input type="text" name="nome" required value={formulario.nome} onChange={mudarCampo} />
                    </label>
                    <label>URL da foto:
                        <input type="text" name="imagem" required value={formulario.imagem} onChange={mudarCampo} />
                    </label>
                    <label>Idade
                        <input type="number" name="idade" min="1" required value={formulario.idade} onChange={mudarCampo} />
                    </label>
                    <label>Sexo:
                        <select name="sexo" value={formulario.sexo} onChange={mudarCampo}>
                            <option value="Indefinido">Indefinido</option>
                            <option value="Macho">Macho</option>
                            <option value="Fêmea">Fêmea</option>
                        </select>
                    </label>
                    <label>Status vital:
                        <select name="vivo" value={formulario.vivo} onChange={mudarCampo}>
                            <option value="true">Vivo</option>
                            <option value="false">Morto</option>
                        </select>
                    </label>
                </S.SessaoFormulario>

                <S.SessaoFormulario>
                    <h3>Condições Médicas</h3>
                    
                    <label>
                        <input type="checkbox" name="temMutacao" checked={formulario.temMutacao} onChange={mudarCampo}/>
                        Possui mutação
                    </label>
                    <label>
                        <input type="checkbox" name="temDesordem" checked={formulario.temDesordem} onChange={mudarCampo}/>
                        Possui desordem
                    </label>
                    <label>
                        <input type="checkbox" name="temParasita" checked={formulario.temParasita} onChange={mudarCampo}/>
                        Infestado por parasita
                    </label>
                    <label>
                        <input type="checkbox" name="temFerimento" checked={formulario.temFerimento} onChange={mudarCampo}/>
                        Possui ferimentos
                    </label>
                </S.SessaoFormulario>

                <S.SessaoFormulario>
                    <h3>Histórico</h3>

                    <label>
                        <input type="checkbox" name="aposentado" checked={formulario.aposentado} onChange={mudarCampo} />
                        Gato Aposentado (Já se Aventurou)
                    </label>

                    {formulario.aposentado && (
                        <label>Nível de experiência (última viagem):
                            <select name="experiencia" value={formulario.experiencia} onChange={mudarCampo}>
                                {Object.entries(locaisAventura).map(([nivel, local]) => (
                                    <option key={nivel} value={nivel}>
                                        Nível {nivel} - {local}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}
                </S.SessaoFormulario>

                <button type="submit">Adicionar gato!</button>
            </S.FormularioGato>
        </S.ContainerTela>
    )
}