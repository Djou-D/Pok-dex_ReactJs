import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    p
    {
        font-size: ${props => props.theme.font_size.size_2};
        padding: ${props => props.theme.padding.pad_3};
        text-align: center;
        cursor: pointer;
    }

    div
    {
        font-size: ${props => props.theme.font_size.size_6};
        
    }
`