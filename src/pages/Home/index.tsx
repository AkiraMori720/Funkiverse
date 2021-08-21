import React from 'react';

import * as S from './styles';
import Modal from "react-modal";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onMintOwn = () => {

  }

  return (
    <S.Container>
      <S.IntroduceContainer>
        <S.Introduce>
          <S.Title>what is/are cryptopigs?</S.Title>
          <S.Content>
            Cryptopigs is an NFT project that uses Harmony's HRC721 standard and features 5.000 uniquely generated variations of the Piggybank Yield Farm mascot. Each Piggy NFT is minted with four to seven attributes, some being rarer than others. We made so many attributes, we could've generated over 20 million pigs - but we wanted to keep the supply low!
            <br/><br/>
            By adding up the rarities for each attribute, you can calculate the value of each Cryptopig, which is also shown by the Piggy's background. If you're lucky, you might be able to mint one of 20 Piggies with an elusive Rainbow-colored background!
          </S.Content>
        </S.Introduce>
        <S.MintContainer>
          <S.ButtonContainer>
            <img src={"/images/MintButtonBackground.png"} alt="mint"/>
            <S.MintButton><S.Button onClick={() => onMintOwn()}>MINT YOUR OWN</S.Button></S.MintButton>
          </S.ButtonContainer>
          <S.MintLabel>
            x out of 5,000 minted
          </S.MintLabel>
        </S.MintContainer>
        <S.Introduce className={"right--intro"}>
          <S.Title>cryptopigs tokenomics</S.Title>
          <S.Content>
            You can mint a Piggy yourself for 500 ONE. Of these minting fees, 5% are reflected to Piggy owners, 20% is sent to the artist, the remaining 75% is used to strengthen the Piggybank project, to cover future development of additional gamification features, a marketplace for you to swap your NFTs, marketing costs and COINK staking incentives.
            <br/><br/>
            We intend to keep adding value to Cryptopigs, even after all pigs have been minted. By getting a Piggy, not only will you own oinkredible, unique, limited edition art on the blockchain, support a great artist and help develop the Piggybank ecosystem - but you will also be presented with unique opportunities to play with your pig - Piggybank is working on Piggy NFT gamification for your farming efforts with virtual pet and PvP mechanics, as well as integration with the worlds.freyala.com NFT and gaming ecosystem.
          </S.Content>
        </S.Introduce>
      </S.IntroduceContainer>
      <S.RecentMints>
        <S.RecentLabel>most recent mints</S.RecentLabel>
        <S.Mints>
          <S.Mint onClick={() => setIsOpen(true)}>
            <img src={"/images/pig.png"} alt="mint"/>
          </S.Mint>
          <S.MiddleMint onClick={() => setIsOpen(true)}>
            <img src={"/images/pig.png"} alt="mint"/>
          </S.MiddleMint>
          <S.Mint onClick={() => setIsOpen(true)}>
            <img src={"/images/pig.png"} alt="mint"/>
          </S.Mint>
        </S.Mints>
      </S.RecentMints>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(60, 37, 53, 0.25)',
            zIndex: 99,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '500px',
            zIndex: 9999
          },
        }}
      >
        <S.ModalBody>
          <S.ModalTitle>hooray, you now own Piggy no. x!</S.ModalTitle>
          <S.ModalContent>
            <img src={"/images/pig.png"} alt={"pig"}/>
            <S.ContentDetail>
              <S.DetailItem>
                <S.ItemTitle>Body</S.ItemTitle>
                <S.ItemContent>red body</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Nose</S.ItemTitle>
                <S.ItemContent>hot pink nose</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Eyes</S.ItemTitle>
                <S.ItemContent>tired eyes</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Dome</S.ItemTitle>
                <S.ItemContent>green party hat</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Front</S.ItemTitle>
                <S.ItemContent>drink</S.ItemContent>
              </S.DetailItem>
              <S.DetailItem>
                <S.ItemTitle>Back</S.ItemTitle>
                <S.ItemContent>dark clouds</S.ItemContent>
              </S.DetailItem>
            </S.ContentDetail>
          </S.ModalContent>
          <S.ModalAction>
            <S.ModalButton onClick={() => setIsOpen(false)}>CONFIRM</S.ModalButton>
          </S.ModalAction>
        </S.ModalBody>
      </Modal>
    </S.Container>
  );
};

export default Home;
