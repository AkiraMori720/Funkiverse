import React, {useState} from 'react';
import * as S from './styles';
import Menu from "~/components/Sidebar/Menu";

interface Props {
  history: React.ComponentProps<any>,
  mini: Boolean,
  closeMini: Function
}


const Sidebar: React.FC<Props> = ({history, mini, closeMini}) => {
  const[connected, setConnected] = useState(true);

  return (
    <S.Container>
      <S.Navbar className={mini?"display-mini":""}>
        {mini && <S.CloseContainer><S.CloseBtn size={40} onClick={() => (closeMini())}/></S.CloseContainer>}
        <S.Logo className="float-none">
          <a href="/">
            <img src={"/images/logo.png"} alt={"logo"}/>
          </a>
        </S.Logo>
        <S.Menus>
          <Menu onClick={() => {history.push('/'); closeMini();}} icon="/images/IconsPersonalLogin.svg" label={connected?"Hi, 0x000000000000000000000":"Connect Wallet"}/>
          <Menu onClick={() => {history.push('/'); closeMini();}} icon="/images/IconsMintPage.svg" label="Mint your own"/>
          <Menu onClick={() => {history.push('/collection'); closeMini();}} icon="/images/IconsViewCollection.svg" label="View your collection"/>
          <Menu onClick={() => {history.push('/all'); closeMini();}} icon="/images/IconsViewAllPigs.svg" label="View all minted pigs"/>
          <Menu onClick={() => {history.push('/attribute'); closeMini();}} icon="/images/IconsPigAttributes.svg" label="Pig attributes"/>
          <Menu onClick={() => {closeMini();}} icon="/images/IconsMarketplace.svg" label="Marketplace" subLabel="coming soon"/>
        </S.Menus>
        <S.Bottom>
          <div className="farm--link"><a href="#">piggybank.farm</a></div>
          <div className="social--link">
            <a href=""><img src={"/images/SocialIconTelegram.svg"} alt={"telegram"}/></a>
            <a href=""><img src={"/images/SocialIconTwitter.svg"} alt={"twitter"}/></a>
            <a href=""><img src={"/images/SocialIconDiscord.svg"} alt={"discord"}/></a>
          </div>
        </S.Bottom>
      </S.Navbar>
    </S.Container>
  );
};

export default Sidebar;
