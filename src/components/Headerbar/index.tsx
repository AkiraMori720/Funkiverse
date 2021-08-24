import React, {useState} from 'react';
import * as S from './styles';
import Menu from './menu';

interface Props {
  history: React.ComponentProps<any>
}


const Headerbar: React.FC<Props> = ({history}) => {
  return (
    <S.Container>
      <S.Navbar>
        <S.Logo className="float-none">
          <a href="/">
            <img src={"/images/logo-header.png"} alt={"logo"}/>
          </a>
        </S.Logo>
        <S.Menus>
          <Menu history={history} path="/" label="HOME" />
          <Menu history={history} path="/welcome" hash={"#"} label="WELCOME" />
          <Menu history={history} path="/welcome" hash={"#buyafox"} label="BUYAFOX" />
          <Menu history={history} path="/welcome" hash={"#loadmap"} label="ROADMAP" />
          <Menu history={history} path="/welcome" hash={"#team"} label="TEAM" />
          <Menu history={history} path="/provenance" label="PROVENANCE" />
          <Menu history={history} path="/gallery" label="GALLERY" />
        </S.Menus>
        <S.Action>
          <div className="social--link">
            <a href=""><img src={"/images/link_1.png"} alt={"wallet"}/></a>
            <a href=""><img src={"/images/link_twitter.png"} alt={"twitter"}/></a>
            <a href=""><img src={"/images/link_youtube.png"} alt={"youtube"}/></a>
            <a href=""><img src={"/images/link_tumblr.png"} alt={"tumblr"}/></a>
            <a href=""><img src={"/images/link_instagram.png"} alt={"instagram"}/></a>
          </div>
          <div className="connect--btn"><a href="#">CONNECT WALLET</a></div>
        </S.Action>
      </S.Navbar>
    </S.Container>
  );
};

export default Headerbar;
