import React from "react";
import { Container } from "./styled";


const Pagination = (props) => {
    const {page, totalPage, onLeftClick, onRightClick} = props;

    return (
        <Container>
                <p onClick={onLeftClick}><i className="fa fa-chevron-left" aria-hidden="true"></i></p>
                <div>{page} de {totalPage}</div>
                <p onClick={onRightClick}><i className="fa fa-chevron-right" aria-hidden="true"></i></p>
        </Container>
    )
}

export default Pagination;