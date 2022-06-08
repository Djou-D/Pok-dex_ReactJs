import styled from 'styled-components'

export const Container = styled.div`

    background: ${props => props.theme.colors.tertiary};
    font-family: ${props => props.theme.font_family.primary};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;


export const Header = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    padding: ${props => props.theme.padding.pad_4};

    img
    {
        width: 150px;
    }

    .safari
    {
        color: ${props => props.theme.colors.textSecundary};
        font-size: ${props => props.theme.font_size.size_2};
        text-decoration: none;
        margin-right: ${props => props.theme.margin.left};
        padding: ${props => props.theme.padding.pad_4};
        letter-spacing: 1px;
        text-decoration: none;
        overflow: hidden;
        transition: 0.5s;
    }

    div:hover .safari
    {
        letter-spacing: 3px;
    }

`;

export const Pokebola = styled.img`

    margin-top: 20%;
    animation: pokebola-spin infinite 20s linear;
    width: 200px;
    height: 200px;

    @keyframes pokebola-spin 
    {
    from 
    {
      transform: rotate(0deg);
    }
    to 
    {
      transform: rotate(360deg);
    }
    }
`

export const Section = styled.div`

    padding: ${props => props.theme.padding.pad_4};
    display: flex;
    align-items: center;

    section:nth-child(1)
    {
        width: 50%;
        padding: ${props => props.theme.padding.pad_1};
        margin: ${props => props.theme.margin.top_2};
    }

    h2
    {
        
        font-size: ${props => props.theme.font_size.size_1};
        padding: ${props => props.theme.padding.pad_4};
        color: ${props => props.theme.colors.textSecundary};

        b
        {
            position: relative;
            font-size: ${props => props.theme.font_size.size_1};
            color: ${props => props.theme.colors.primary};
            text-transform: uppercase;

            &:before
            {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                color: ${props => props.theme.colors.textSecundary};
                border-right: 2px solid #f00;
                overflow: hidden;
                animation: animate 6s linear infinite;
            }
	   
        }
    }

    @keyframes animate 
    {
        0%, 10%, 100%
        {
            width: 0;
        }
        70%, 90%
        {
            width: 100%;
        }    
    }

    P
    {
        font-size: ${props => props.theme.font_size.size_2};
        padding: ${props => props.theme.padding.pad_4};
        color: ${props => props.theme.colors.textSecundary};
    }

    img
    {
        width: 300px;
        position: absolute;
        top: 10%;
        left: 65%;
        z-index: 10;
    }

  

`