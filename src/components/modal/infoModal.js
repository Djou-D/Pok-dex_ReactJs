import React from "react";

import * as S from "./styled";

const InfoModal = ({ onClose = () => {}, children }) => {
  return (
      <S.Modal>
        <S.Container>
          <S.Close onClick={onClose}/>
          <S.Content>{children}</S.Content>
        </S.Container>
      </S.Modal>
  );
};

export default InfoModal;
