import React from 'react';
import * as S from './styles';

interface Props {
  name: string,
  image: string,
  isFavorite: boolean,
  onToggleFavorite: Function,
  onClick: Function,
}


const Fox: React.FC<Props> = ({name, image, isFavorite, onToggleFavorite, onClick}) => {

  return (
    <S.FoxContainer onClick={(event) => onClick()}>
      <S.FoxImage src={image}/>
      <S.Favorite className={"favorite"} onClick={(event) => {
        event.stopPropagation();
        onToggleFavorite();
      }}>
        {
          isFavorite?
            <S.HearFillIcon size={24}/>:
            <S.HearIcon size={24}/>
        }
      </S.Favorite>
    </S.FoxContainer>
  );
};

export default Fox;
