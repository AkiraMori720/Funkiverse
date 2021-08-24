import React, {useState} from 'react';
import * as S from './styles';

interface Props {
  label: string,
  path: string,
  hash?: string,
  history: React.ComponentProps<any>,
}


const Menu: React.FC<Props> = ({label, path, hash,  history}) => {
  const pathName =  history.location.pathname;
  const pathHash = history.location.hash;
  const routPath = pathName + pathHash;

  const goto = () => {
    if(path !== pathName){
      history.push(path);
    }
  }
  return (
    <S.MenuContainer onClick={goto} className={routPath===path?'active':''}>
      <a href={hash}>
        {label}
      </a>
    </S.MenuContainer>
  );
};

export default Menu;
