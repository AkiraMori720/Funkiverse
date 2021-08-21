import React from 'react';
import * as S from './styles';

interface Props {
  onClick: Function,
  icon: string,
  label: string,
  subLabel?: string
}


const Menu: React.FC<Props> = ({onClick, icon, label, subLabel }) => {
  return (
    <S.MenuContainer onClick={() => onClick()}>
      <S.ButtonContainer>
        <S.MenuIcon>
          <img src={icon} alt={"logo"}/>
        </S.MenuIcon>
        <S.MenuLabel>
          {label}
        </S.MenuLabel>
      </S.ButtonContainer>
      {subLabel?<S.SubLabel>{subLabel}<span>TM</span></S.SubLabel>:null}
    </S.MenuContainer>
  )
};


export default Menu;
