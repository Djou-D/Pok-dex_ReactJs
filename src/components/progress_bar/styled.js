import styled from "styled-components"

export const Container = styled.div`

    height: 10px;
    width: 120px;
    background: whitesmoke;
    border-radius: 5px;
`

export const Content = styled.div`

    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span
    {
        font-size: .4rem;
        padding: ${props => props.theme.padding.pad_5};
    }


`

