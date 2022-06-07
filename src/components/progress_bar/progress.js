import React from "react";
import { Container, Content } from "./styled";


const Progress = ({progress}) => {


    const content = {
        width: `${progress}%`,
    }

    return (

        <Container>
            <Content style={content}>
               <span>{progress}</span>
            </Content>
        </Container>
    )
}

export default Progress;