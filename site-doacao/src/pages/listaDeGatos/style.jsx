import styled from 'styled-components';

export const FundoEscuroModal = styled.div`
    position: fixed;
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const CaixaModal = styled.div`
    background-color: #E6E6E3;
    padding: 30px;
    border: 4px solid #242621
    border-radius: 10px;
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
`

export const SelecaoNPC = styled.div`
    opacity: ${props => props.$habilitado ? 1 : 0.4};
    filter: ${props => props.$habilitado ? 'none' : 'grayscale(100%)'}

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 160px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    text-align:center;

    img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    h4 {
        margin: 0 0 10px 0;
        font-size: 14px;
    }

    button {
        width: 100%;
        padding: 8px;
        cursor: ${props => props.$habilitado ? 'pointer' : 'not-allowed'}
    }
`;

export const ContainerTela = styled.div`
    padding: 20px;

    h1 {
        margin: 20px;
    }
`;

export const GridGatos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  
    button {
        margin-top: 10px;
    }
`;

export const GridNPCs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;