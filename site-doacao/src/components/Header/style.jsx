import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    background-color: #4B5345;
    border-bottom: 4px solid #242621;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 0px rgba(36, 38, 33, 0.3);
    margin-bottom: 30px;

    h1 {
        color: #E6E6E3;
        font-size: 1.8rem;
        margin: 0;
        text-shadow: 2px 2px 0px #242621;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    gap: 15px;
`;

export const StyledLink = styled(Link)`
    background-color: #E6E6E3;
    color: #242621;
    text-decoration: none; 
    font-weight: bold;
    padding: 8px 16px;
    border: 3px solid #242621;
    border-radius: 4px;
    box-shadow: 3px 3px 0px #242621;
    transition: transform 0.1s, box-shadow 0.1s;

    &:hover {
        background-color: #fff;
    }

    &:active {
        transform: translate(3px, 3px);
        box-shadow: 0px 0px 0px #242621;
    }
`