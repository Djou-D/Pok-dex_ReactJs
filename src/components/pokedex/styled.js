import styled from "styled-components"

export const Container = styled.section`

    width: 100%;
    padding-bottom: ${props => props.theme.padding.pad_2};
    
`

export const Pag = styled.nav`
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const CardPosition = styled.div`

    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    
    
`