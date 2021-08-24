import React, {useState} from 'react';

import * as S from './styles';
import ReactPlayer from 'react-player';
import { Scrollbars } from 'react-custom-scrollbars';
import Fox from "~/pages/Home/fox";

const Home: React.FC = () => {
  const [favorites, setFavorites] = useState([] as Number[]);
  const foxes = [
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

  const onClick = (id: Number) => {

  }

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
        <Scrollbars
          className={"area"}
        >
        {
          foxes.map(fox => <Fox key={fox.id} name={fox.name} image={fox.image} isFavorite={favorites.includes(fox.id)} onToggleFavorite={() => onToggleFavorite(fox.id)} onClick={() => onClick(fox.id)}/> )
        }
        </Scrollbars>
      </S.Section>
    </S.Container>
  );
};

export default Home;
