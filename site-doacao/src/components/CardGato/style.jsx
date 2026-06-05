import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #E6E6E3;
    border: 3px solid #242421;
    border-radius: 8px;
    padding: 15px;
    width: 250px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    box-shadow: 4px 4px 0px #242621;
`;

export const FotoGato = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border: 2px solid #242621;
    border-radius: 4px;
`;

export const InfoGato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3 {
        margin: 0;
        font-size: 1.4rem;
        border-bottom: 2px dashed #4B5345;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        font-size: 0.95rem;
    }

    small {
        margin-top: 5px;
        font-size: 0.85rem;
        color: #4B5345;
        font-weight: bold;
    }
`