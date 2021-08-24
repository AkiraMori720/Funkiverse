import React, {useState} from 'react';

import * as S from './styles';
import ReactPlayer from "react-player/lazy";
import Fox from "./fox";

const Welcome: React.FC = () => {
  const [favorites, setFavorites] = useState([] as string[]);
  const onToggleFavorite = (name:string) => {
    if(favorites.includes(name)){
      setFavorites(favorites.filter(f => f!== name));
    } else {
      setFavorites([...favorites, name]);
    }
  }

  const onClick = (name: string) => {

  }


  return (
    <S.Container>
      <S.Section id="welcome_video">
        <ReactPlayer
          url="/video/file.mp4"
          playing
          loop
          controls
          width='100%'
          height='100%'/>
      </S.Section>
      <S.Section id="what_is">
        <S.SectionTitle>WHAT IS FUNKI FOXES?</S.SectionTitle>
        <S.WhatIsContent>
          <S.FoxImages>
            <div className={"imageContainer"}><img src={"/images/what_1.png"} alt={'what_1'}/></div>
            <div className={"imageContainer"}><img src={"/images/what_2.png"} alt={'what_2'}/></div>
            <div className={"imageContainer"}><img src={"/images/what_3.png"} alt={'what_3'}/></div>
            <div className={"imageContainer"}><img src={"/images/what_4.png"} alt={'what_4'}/></div>
          </S.FoxImages>
          <S.FoxesCaption>
            <p>
              The Funki Foxes are a collection of 11,000 algorithmically and randomly generated digital collectibles living the luxury life on the Ethereum blockchain. <br/><br/>
              Each Funki Fox is a unique token which also serves as proof of your Funkizen status. This gives you access to members-only benefits, a voice in the community and the undiscovered perks of the Funkiverse; the first category of which can be unlocked by the community through the roadmap. </p>
            <div className={"caption--title"}><a href={'#'}>EQUITABLE DISTRIBUTION</a></div>
            <p>The only tiers we acknowledge are cake tiers.<br/> Purchasing a Funki Fox costs 0.1 ETH. It's the same for everyone.</p>
          </S.FoxesCaption>
        </S.WhatIsContent>
      </S.Section>

      <S.Section id={"buyafox"}>
        <S.SectionTitle>BUY A FOX</S.SectionTitle>
        <S.BuyAFoxContent>
          <div className={"border-back"}/>
          <div className={"back-ground"}/>
          <p>Minting will be available here on launch date!</p>
          <div className={"counter"}>
            <img src={"/images/counter.png"} alt={"counter"} />
            <label>(counter)</label>
          </div>
          <div className={"mintBtn"} onClick={() => {}}><span>MINT</span></div>
        </S.BuyAFoxContent>
      </S.Section>


      <S.Section id={"tokenomics"}>
        <S.SectionTitle>TOKENOMICS</S.SectionTitle>
        <S.TokenNomicsContainer>
          <S.TokenNomicsItem>
            <div className={"imageContainer"}>
              <img src={"/images/info1.png"} alt={"info1"}/>
            </div>
            <label>11,000<br/>Rare Tokens</label>
          </S.TokenNomicsItem>
          <S.TokenNomicsItem>
            <div className={"imageContainer"}>
              <img src={"/images/info2.png"} alt={"info2"}/>
            </div>
            <label>Fair<br/>Distribution</label>
          </S.TokenNomicsItem>
          <S.TokenNomicsItem>
            <div className={"imageContainer"}>
              <img src={"/images/info3.png"} alt={"info3"}/>
            </div>
            <label>Commercial<br/>License</label>
          </S.TokenNomicsItem>
          <S.TokenNomicsItem>
            <div className={"imageContainer"}>
              <img src={"/images/info4.png"} alt={"info4"}/>
            </div>
            <label>7.5%<br/>Royalties</label>
          </S.TokenNomicsItem>
          <S.TokenNomicsItem>
            <div className={"imageContainer"}>
              <img src={"/images/info5.png"} alt={"info5"}/>
            </div>
            <label>More Offerings<br/>Through Roadmap</label>
          </S.TokenNomicsItem>
        </S.TokenNomicsContainer>
        <S.TokenNomicsCaption>
          <span>Note: 111 tokens would be reserved from the initial sale for the team and also to be used in giveaways, raffles, airdrops & for competitions.</span>
        </S.TokenNomicsCaption>
      </S.Section>

      <S.Section id={"foxes"}>
        <div className={"foxes-items-11"}>
          <div className={"foxes-items-21"}>
            <div className={"foxes-items-31"}>
              <div className={"foxes-items-4"}>
                <Fox name={"more-1"} image={'/images/more-1.png'} isFavorite={favorites.includes("more-1")} onToggleFavorite={() => onToggleFavorite("more-1")} onClick={() => onClick("more-1")}/>
              </div>
              <div className={"foxes-items-4"}>
                <Fox name={"more-2"} image={'/images/more-2.png'} isFavorite={favorites.includes("more-2")} onToggleFavorite={() => onToggleFavorite("more-2")} onClick={() => onClick("more-2")}/>
              </div>
            </div>
            <div className={"foxes-items-32"}>
              <Fox name={"more-3"} image={'/images/more-3.png'} isFavorite={favorites.includes("more-3")} onToggleFavorite={() => onToggleFavorite("more-3")} onClick={() => onClick("more-3")}/>
            </div>
          </div>
          <div className={"foxes-items-22"}>
            <div className={"foxes-items-33"}>
              <Fox name={"more-4"} image={'/images/more-4.png'} isFavorite={favorites.includes("more-4")} onToggleFavorite={() => onToggleFavorite("more-4")} onClick={() => onClick("more-4")}/>
            </div>
            <div className={"foxes-items-33"}>
              <Fox name={"more-5"} image={'/images/more-5.png'} isFavorite={favorites.includes("more-5")} onToggleFavorite={() => onToggleFavorite("more-5")} onClick={() => onClick("more-5")}/>
            </div>
          </div>
        </div>
        <div className={"foxes-items-1"}>
          <Fox name={"more-6"} image={'/images/more-6.png'} isFavorite={favorites.includes("more-6")} onToggleFavorite={() => onToggleFavorite("more-6")} onClick={() => onClick("more-6")}/>
        </div>
        <div className={"foxes-items-1"}>
          <Fox name={"more-7"} image={'/images/more-7.png'} isFavorite={favorites.includes("more-7")} onToggleFavorite={() => onToggleFavorite("more-7")} onClick={() => onClick("more-7")}/>
        </div>
      </S.Section>

      <S.Section id={"moredeetz"}>
        <S.SectionTitle>MORE DEETZ</S.SectionTitle>
        <p>When you purchase a Funki Fox, it's not just any kinda art piece that you're buying. You are getting a stunning avatar that's a provably rare piece of art which can be utilized as your digital identity. You're also acquiring access to an exclusive universe whose advantages and value would improve with time. <br/><br/>
          Each Funki Fox is a 1/1 provably rare unique art piece which is algorithmically generated from a selection of over 180 properties that include outfits, hats, superpowers and so much more. All the Funki Foxes are special in their own way, but some are rarer than others. <br/><br/>
          The foxes are stored as ERC-721 standard tokens on the Ethereum blockchain and are hosted on IPSF. Buying a fox is the same for everyone and costs 0.1 ETH.</p>
      </S.Section>

      <S.Section id={"loadmap"}>
        <S.LoadmapItem className={"loadmap-caption"}>
          <S.LoadmapTitle>ROADMAP</S.LoadmapTitle>
          <p>We envisioned this as a long term project and with that conviction in mind, we set some missions to accomplish at certain stages.</p>
          <p>Pre-Launch:<br/>
            (i) Giveaway for the early supporters in the Discord server.<br/>
            (ii) Raffles for twitter community.<br/>
            (iii) Pre-Launch party in our gallery. Come hangout with us!<br/>
            (iv) Launch Date Revealed!</p>
          <p>Post-Launch:</p>
          <ul>
            <li>11% : Random Airdrop to 11 wallets holding the FUFO token.</li>
            <li>22% : Exclusive Funkizen Merch store is launched with surprise unlockables.</li>
            <li>33% : ETH raffle for Funkizens.</li>
            <li>44% : We release the treasure hunts with various prizes up for grabs.</li>
            <li>55% : Activation of the Funki Foxes liquidity pool.</li>
            <li>66% : 111 Hodlers would be selected to receive custom prints of their Funki Foxes.</li>
            <li>77% : We release a limited collection of digital trading cards.</li>
            <li>88% : We go hunting for some virtual land where we can all hangout.</li>
            <li>99% : Unveiling the Tavern.</li>
            <li>100% : Advancing deep into the Funkiverse.</li>
          </ul>
        </S.LoadmapItem>
        <S.LoadmapItem>
          <ReactPlayer
            url="/video/info.mp4"
            playing
            loop
            width='100%'
            height='100%'/>
        </S.LoadmapItem>
      </S.Section>

      <S.Section id={"team"}>
        <S.SectionTitle>MEET THE TEAM</S.SectionTitle>
        <S.TeamCaption>The Funki Foxes project was put together by a group of 4 friends who decided to create some amazing foxes, utilize our skills and all our years of combined research and attempt to birth a new weird world.</S.TeamCaption>
        <S.TeamMembers>
          <S.TeamMember>
            <div className={"imageContainer"}>
              <img src={"/images/team1.png"} alt={"team1"}/>
            </div>
            <label className={"member-name"}>AeroFox</label>
            <label className={"member-caption"}>
              Purifier Of <br/>Frequencies
            </label>
          </S.TeamMember>
          <S.TeamMember>
            <div className={"imageContainer"}>
              <img src={"/images/team2.png"} alt={"team2"}/>
            </div>
            <label className={"member-name"}>Funkiveller</label>
            <label className={"member-caption"}>
              Interdimensional Traveller
            </label>
          </S.TeamMember>
          <S.TeamMember>
            <div className={"imageContainer"}>
              <img src={"/images/team3.png"} alt={"team3"}/>
            </div>
            <label className={"member-name"}>Old Baron</label>
            <label className={"member-caption"}>
              Always Working Towards Improvement
            </label>
          </S.TeamMember>
          <S.TeamMember>
            <div className={"imageContainer"}>
              <img src={"/images/team4.png"} alt={"team4"}/>
            </div>
            <label className={"member-name"}>Spicy T</label>
            <label className={"member-caption"}>
              Foodie & Motivational Speaker
            </label>
          </S.TeamMember>
        </S.TeamMembers>
        <S.Address>
          <S.AddressTitle>VERIFIED SMART CONTRACT ADDRESS:</S.AddressTitle>
          <S.AddressContent>0x.......................</S.AddressContent>
        </S.Address>
      </S.Section>
    </S.Container>
  );
};

export default Welcome;
