import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #E6E6E3;
    border: 3px solid #242621;
    border-radius: 8px;
    padding: 15px;
    width: 250px;
    box-shadow: 4px 4px 0px #242621;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;

    & > p:last-child {
        margin-top: auto;
    }
`

export const FotoNPC = styled.img`
    width: 160px;
    height: 160px;
    object-fit: contain;
    margin-bottom: 10px;

    align-self: center;
`