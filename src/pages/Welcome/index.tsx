import React, {useEffect, useState} from 'react';

import * as S from './styles';
import ReactPlayer from "react-player/lazy";
import Fox from "./fox";

interface FoxObject {
  id: number;
  name: string,
  image: string
}

interface Window {
  swiper: any;
  document: any;
}

declare var window: Window;

const Welcome: React.FC = () => {
  const [favorites, setFavorites] = useState([] as Number[]);
  const [activeFox, setActiveFox] = useState(null as FoxObject | null);
  const [isFull, setIsFull] = useState(false);
  const moreFoxes : FoxObject[] = [
    {id: 1, name: 'more-1', image: '/images/more-1.png'},
    {id: 2, name: 'more-2', image: '/images/more-2.png'},
    {id: 3, name: 'more-3', image: '/images/more-3.png'},
    {id: 4, name: 'more-4', image: '/images/more-4.png'},
    {id: 5, name: 'more-5', image: '/images/more-5.png'},
    {id: 6, name: 'more-6', image: '/images/more-6.png'},
    {id: 7, name: 'more-7', image: '/images/more-7.png'}
  ];

  const onToggleFavorite = (id:Number) => {
    if(favorites.includes(id)){
      setFavorites(favorites.filter(f => f!== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }


  const onClick = (id: Number) => {
    const fox = moreFoxes.find(f => f.id === id);
    if(fox){
      setActiveFox(fox);
    }
  }

  const toggleFullScreen = () => {
    let document:Document = window.document;
    let elem = document.documentElement;
    if(!isFull){
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFull(!isFull);
  }

  const onMoveActive = (next = false) => {
    if(activeFox){
      let index = 0;
      moreFoxes.forEach((f, i) => {
        if(f.id === activeFox.id){
          index = i;
        }
      });
      console.log('index', index);
      if(next){
        index++;
        index = index % (moreFoxes.length);
      } else {
        index--;
        if(index < 0){
          index = moreFoxes.length - 1;
        }
      }
      setActiveFox(moreFoxes[index]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if(window.swiper !== undefined){
        let Swiper = window.swiper;
        new Swiper('.fox__swiper', {
          slidesPerView: 6.8,
          slidesPerGroup: 1,
          spaceBetween: 8,
          speed: 800,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: '.fox__swiper-button-next',
            prevEl: '.fox__swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
        });
      }
    }, 100);
  })

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
                <Fox name={"more-1"} image={'/images/more-1.png'} isFavorite={favorites.includes(1)} onToggleFavorite={() => onToggleFavorite(1)} onClick={() => onClick(1)}/>
              </div>
              <div className={"foxes-items-4"}>
                <Fox name={"more-2"} image={'/images/more-2.png'} isFavorite={favorites.includes(2)} onToggleFavorite={() => onToggleFavorite(2)} onClick={() => onClick(2)}/>
              </div>
            </div>
            <div className={"foxes-items-32"}>
              <Fox name={"more-3"} image={'/images/more-3.png'} isFavorite={favorites.includes(3)} onToggleFavorite={() => onToggleFavorite(3)} onClick={() => onClick(3)}/>
            </div>
          </div>
          <div className={"foxes-items-22"}>
            <div className={"foxes-items-33"}>
              <Fox name={"more-4"} image={'/images/more-4.png'} isFavorite={favorites.includes(4)} onToggleFavorite={() => onToggleFavorite(4)} onClick={() => onClick(4)}/>
            </div>
            <div className={"foxes-items-33"}>
              <Fox name={"more-5"} image={'/images/more-5.png'} isFavorite={favorites.includes(5)} onToggleFavorite={() => onToggleFavorite(5)} onClick={() => onClick(5)}/>
            </div>
          </div>
        </div>
        <div className={"foxes-items-1"}>
          <Fox name={"more-6"} image={'/images/more-6.png'} isFavorite={favorites.includes(6)} onToggleFavorite={() => onToggleFavorite(6)} onClick={() => onClick(6)}/>
        </div>
        <div className={"foxes-items-1"}>
          <Fox name={"more-7"} image={'/images/more-7.png'} isFavorite={favorites.includes(7)} onToggleFavorite={() => onToggleFavorite(7)} onClick={() => onClick(7)}/>
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

      {
        activeFox?
          <S.FullScreenFoxes>
            <S.FullScreenHeader>
              <S.HeaderLeft>
                {
                  isFull?
                    <S.Shrink2Icon size={48} onClick={toggleFullScreen}/>
                    :
                    <S.ArrowsAngleExpandIcon size={48} onClick={toggleFullScreen}/>
                }
                {
                  favorites.includes(activeFox.id)?
                    <><S.HearFillIcon size={48} onClick={() => onToggleFavorite(activeFox.id)}/> 1</>
                    :
                    <S.HearWhiteIcon size={48} onClick={() => onToggleFavorite(activeFox.id)}/>
                }
              </S.HeaderLeft>
              <S.HeaderRight>
                <S.CloseIcon size={48} onClick={() => setActiveFox(null)}/>
              </S.HeaderRight>
            </S.FullScreenHeader>
            <S.FullScreenContent>
              <S.ContentImage>
                <S.LeftIcon>
                  <S.ChevronLeftIcon size={48} onClick={() => onMoveActive(false)}/>
                </S.LeftIcon>
                <S.SliderFoxImage>
                  <img src={activeFox.image} alt={activeFox.name}/>
                </S.SliderFoxImage>
                <S.RightIcon>
                  <S.ChevronRightIcon size={48} onClick={() => onMoveActive(true)}/>
                </S.RightIcon>
              </S.ContentImage>
              <S.ContentCaption>
                <div className={"fox-name"}>{activeFox.name}</div>
                <div className={"fox-caption"}>{activeFox.image}</div>
              </S.ContentCaption>
            </S.FullScreenContent>
          </S.FullScreenFoxes>
          :null
      }

    </S.Container>
  );
};

export default Welcome;
