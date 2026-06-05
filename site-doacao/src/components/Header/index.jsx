import * as S from "./style.jsx"

export function Header() {
    return (
        <S.HeaderContainer>
            <h1>Mewgenics</h1>

            <S.NavMenu>
                <S.StyledLink to="/">Gatos</S.StyledLink>
                <S.StyledLink to="/adicionar">Adicionar gato</S.StyledLink>
                <S.StyledLink to="/npcs">Ver NPCs</S.StyledLink>
            </S.NavMenu>
        </S.HeaderContainer>
    )
}