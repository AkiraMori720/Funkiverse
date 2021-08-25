import React from 'react';

import * as S from './styles';

const Gallery: React.FC = () => {

  return (
    <S.Container>
      <S.header>
        <S.Title>GALLERY</S.Title>
        <S.Caption>The complete gallery would be published after the initial sale :)</S.Caption>
      </S.header>
      <S.Logo>
        <img src={"/images/logo.png"} alt={"logo"}/>
      </S.Logo>
    </S.Container>
  );
};

export default Gallery;
