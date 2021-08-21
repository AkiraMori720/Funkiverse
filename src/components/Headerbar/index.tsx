import React, {useState} from 'react';
import * as S from './styles';
import Menu from "./Menu";

interface Props {
  history: React.ComponentProps<any>
}


const Headerbar: React.FC<Props> = ({history}) => {
  const[connected, setConnected] = useState(true);

  return (
    <S.Container>
      <S.Navbar>
        <S.Logo className="float-none">
          <a href="/">
            <img src={"/images/logo.png"} alt={"logo"}/>
          </a>
        </S.Logo>
        <S.Menus>
          <Menu onClick={() => {history.push('/');}} icon="/images/IconsPersonalLogin.svg" label={connected?"Hi, 0x000000000000000000000":"Connect Wallet"}/>
          <Menu onClick={() => {history.push('/');}} icon="/images/IconsMintPage.svg" label="Mint your own"/>
          <Menu onClick={() => {history.push('/collection');}} icon="/images/IconsViewCollection.svg" label="View your collection"/>
          <Menu onClick={() => {history.push('/all');}} icon="/images/IconsViewAllPigs.svg" label="View all minted pigs"/>
          <Menu onClick={() => {history.push('/attribute');}} icon="/images/IconsPigAttributes.svg" label="Pig attributes"/>
          <Menu onClick={() => {}} icon="/images/IconsMarketplace.svg" label="Marketplace" subLabel="coming soon"/>
        </S.Menus>
        <S.Action>
          <div className="social--link">
            <a href=""><img src={"/images/SocialIconTelegram.svg"} alt={"telegram"}/></a>
            <a href=""><img src={"/images/SocialIconTwitter.svg"} alt={"twitter"}/></a>
            <a href=""><img src={"/images/SocialIconDiscord.svg"} alt={"discord"}/></a>
          </div>
          <div className="farm--link"><a href="#">CONNECT WALLET</a></div>
        </S.Action>
      </S.Navbar>
    </S.Container>
  );
};

export default Headerbar;
