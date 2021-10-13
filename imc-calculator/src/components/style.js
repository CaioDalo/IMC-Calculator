import styled from "styled-components";

export const Container = styled.div `
    width: 600px;
    background: var(--background-300);
    text-align: center;
    border-radius: 10px;
    padding: 25px 0;

    div { 
        margin-top: 25px;

        input {
            border-radius: 5px;
            border: 1px solid #cfcfcf;
            outline: 0;
            color: var(--text-title);

            &:focus {
                border: 2px solid #bdbdbd;
            }
        }
    }

    input {
        padding: 5px 10px;
    }

    button { 
        color: var(--text-title);
        margin-top: 25px;
        padding: 7px 15px;
        border: none;
        border-radius: 7px;
        background: #57ba72;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`