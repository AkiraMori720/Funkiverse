import React, {useEffect, useState} from 'react';

import * as S from './styles';
import ReactPlayer from 'react-player';
import Fox from "~/pages/Home/fox";

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

const Home: React.FC = () => {
  const [favorites, setFavorites] = useState([] as Number[]);
  const [activeFox, setActiveFox] = useState(null as FoxObject | null);
  const [isFull, setIsFull] = useState(false);
  const foxes : FoxObject[] = [
    {id: 1, name: '1', image: '/images/fox0.png'},
    {id: 2, name: '2', image: '/images/fox1.png'},
    {id: 3, name: '3', image: '/images/fox2.png'},
    {id: 4, name: '4', image: '/images/fox3.png'},
    {id: 5, name: '5', image: '/images/fox4.png'},
    {id: 6, name: '6', image: '/images/fox5.png'},
    {id: 7, name: '7', image: '/images/fox6.png'},
    {id: 8, name: '8', image: '/images/fox7.png'},
    {id: 9, name: '9', image: '/images/fox8.png'},
    {id: 10, name: '10', image: '/images/fox9.png'},
  ];

  const onToggleFavorite = (id:Number) => {
      if(favorites.includes(id)){
        setFavorites(favorites.filter(f => f!== id));
      } else {
        setFavorites([...favorites, id]);
      }
  }

  const onClick = (fox: FoxObject) => {
    setActiveFox(fox);
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
      foxes.forEach((f, i) => {
        if(f.id === activeFox.id){
          index = i;
        }
      });
      console.log('index', index);
      if(next){
        index++;
        index = index % (foxes.length);
      } else {
        index--;
        if(index < 0){
          index = foxes.length - 1;
        }
      }
      setActiveFox(foxes[index]);
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
        <S.Title>
          <label>WELCOME TO THE FUNKIVERSE</label>
        </S.Title>
        <ReactPlayer
          url="/video/welcome.mp4"
          playing
          loop
          width='100%'
          height='100%'/>
        <S.JoinUs>
          <S.JoinContent>
            <span>An exclusive NFT collection where the token grants you Funkizen status. Funkizens have the prospect for co-creating the future of the Funkiverse and also access to all it's undiscovered benefits. </span>
          </S.JoinContent>
          <S.JoinBtn>
            <span>JOIN US!</span>
          </S.JoinBtn>
        </S.JoinUs>
      </S.Section>

      <S.Section id="introduce">
        <S.Introduce>
          <S.IntroduceTitle>
            FEELIN FUNKI?
          </S.IntroduceTitle>
          <S.IntroduceContent>
            <span>
              HIT THE BUTTON TO FIND OUT YOUR FUNKI PERCENTAGE!<br/>
              100% gets you a Free Fox!
            </span>
            <S.IntroduceEmpress>
              <span>
                SIMPLE GAME LIKE THE ONE ON PICKLES.<br/><br/>
                FOR LANDING PAGE VISITORS TO INTERACT WITH WEBSITE.<br/><br/>
                100% = Free fox.<br/><br/>
                You can put 20 FREE FOX "TICKETS" in the game, so if someone wins, they can enter their email and eth address in a simple form.
              </span>
            </S.IntroduceEmpress>
          </S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>
            PROLOGUE
          </S.IntroduceTitle>
          <S.IntroduceContent>
            <span>
              11 millennia after an induced hibernation, a skulk of foxes awaken to discover themselves in the peculiar caves of Zoza. Following their awakening from this unnatural slumber, they searched within the caves and its surroundings in vain for a place to quench their thirst.<br/><br/>
              Leaving the caves, they journeyed through the thick forest and eventually stumbled upon a shack that looked like it had seen better days. Luckily for them, the place was open but the only option available was a purple sparkly liquid labelled "Funki Juice"<br/><br/>
              With no choice or options left, they quickly chugged this down and before any of them could even realize, it triggered a series of irreversible transformations and teleported them straight into a magical alternate universe called the Funkiverse.<br/><br/>
              These foxes became known as the Funki Foxes.
            </span>
          </S.IntroduceContent>
        </S.Introduce>
      </S.Section>

      <S.Section id="foxes">
        <div className="fox__swiper-outer">
          <div className={"area fox__swiper"}>
            <div className={"swiper-wrapper"}>
              {
                foxes.map((fox, index) => <Fox key={fox.id} name={fox.name} image={fox.image} isFavorite={favorites.includes(fox.id)} onToggleFavorite={() => onToggleFavorite(fox.id)} onClick={() => onClick(fox)}/> )
              }
            </div>
            <div className={"fox__swiper-button-prev"}><img src={"/images/icn_swiper-button.svg"} alt="prev"/></div>
            <div className={"fox__swiper-button-next"}><img src={"/images/icn_swiper-button.svg"} alt="next"/></div>
            <div className={"swiper-scrollbar"}/>
          </div>
        </div>
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

export default Home;
