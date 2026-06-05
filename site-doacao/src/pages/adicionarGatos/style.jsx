import styled from "styled-components";

export const ContainerTela = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
        font-size: 2.2rem;
        text-shadow: 2px 2px 0px #242621;
        text-align: center;
        margin-bottom: 10px;
    }
`;

export const FormularioGato = styled.form`
    background-color: #E6E6E3;
    border: 4px solid #242621;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 6px 6px 0px #242621;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & > button[type="submit"] {
        font-size: 1.2rem;
        padding: 12px;
        margin-top: 10px;
        width: 100%;
    }
`;

export const SessaoFormulario = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 20px;
    border-bottom: 3px dashed #4B5345;

    &:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
    }

    h3 {
        font-size: 1.4rem;
        color: #4B5345;
        margin-bottom: 5px;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-weight: bold;
        font-size: 1.05rem;
    }

    input[type="text"],
    input[type="number"],
    select {
        font-family: inherit;
        font-size: 1rem;
        padding: 8px 12px;
        border: 2px solid #242621;
        border-radius: 6px;
        background-color: #fff;
        color: #242621;
        outline: none;
        transition: border-color 0.2s;

        &:focus {
            border-color: #4B5345;
            background-color: #fcfcfc;
        }
    }

    label:has(input[type="checkbox"]) {
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        user-select: none;
        padding: 4px 0;

        input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
            accent-color: #4B5345;
        }
    }
`;