import styled from 'styled-components';
import {typography} from "~/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 0;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    background-image: url(/images/BackgroundFarm.svg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  width: 100%;

  @media (min-width: 1216px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Introduce = styled.div`
  margin: 0 72px;
  margin-top: 24px;

  @media (min-width: 1216px) {
    width: 28%;
    &.right--intro {
      text-align: right;
    }
  }

`;

export const Title = styled.div`
  color: ${typography.colors.main};
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  color: ${typography.colors.text};
  font-size: 18px;
  font-family: sans serif;
  font-weight: bold;
`;

export const MintContainer = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  position: relative;
  margin: 20px auto;
  img{
     width: 360px;
     height: 360px;
   }

  @media (min-width: 1216px) {
    margin: unset;
    img{
       width: 360px;
       height: 360px;
     }
  }
`;

export const MintButton = styled.div`
  position: absolute;
  bottom: 48px;
  width: 100%;
  text-align: center;
`;

export const Button = styled.div`
  display: inline-block;
  border-radius: 8px;
  padding: 14px 14px;
  color: ${typography.colors.main};
  background-color: white;
  font-size: 22px;
  cursor: pointer;

  :hover {
    background-color: ${typography.colors.main};
    color: white;
  }
`;

export const MintLabel = styled.div`
  margin-top: 16px;
  color: ${typography.colors.label};
  text-align: center;
  font-size: 20px;
`;

export const RecentMints = styled.div`
`;

export const RecentLabel = styled.div`
  text-align: center;
  color: ${typography.colors.menu};
  margin-bottom: 20px;
  font-size: 24px;
`;

export const Mints = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1216px) {
    flex-direction: row;
  }
`;

export const Mint = styled.div`
  margin: 8px auto;
  img{
     width: 240px;
     height: 240px;
  }

   @media (min-width: 1216px) {
        margin: 0 8px;
   }
`;

export const MiddleMint = styled.div`
  margin: 0 8px;
  img{
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1216px) {

  }
`;

// Modal
export const ModalBody = styled.div`
  padding: 8px 12px;
`;

export const ModalTitle = styled.div`
  color: ${typography.colors.text};
  margin-bottom: 24px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 240px;
    height: 240px;
  }

   @media (min-width: 768px) {
    flex-direction: row;
   }
`;

export const ContentDetail = styled.div`
  margin: 20px 0 0 0;

   @media (min-width: 768px) {
    margin: 0 0 0 20px;
   }
`;

export const DetailItem = styled.div`
  margin-bottom: 8px;
`;

export const ItemTitle = styled.div`
  color: ${typography.colors.menu};
  font-size: 14px;
`;

export const ItemContent = styled.div`
  color: ${typography.colors.main};
  font-size: 14px;
`;

export const ModalAction = styled.div`
  width: 100%;
  text-align: right;
`;

export const ModalButton = styled.div`
  display: inline-block;
  background-color: ${typography.colors.main};
  color: white;
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 20px;
  cursor: pointer;
`;
