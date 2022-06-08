import React from "react";
import { Container, Content } from "./styled";


const Progress = ({bgColor, progress}) => {


    const content = {
        width: `${progress}%`,
        background: bgColor,
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