import styled from 'styled-components';
import {Heart} from "@styled-icons/bootstrap/Heart";
import {HeartFill} from "@styled-icons/bootstrap/HeartFill";
import {ArrowsAngleExpand} from "@styled-icons/bootstrap/ArrowsAngleExpand";
import {Shrink2} from "@styled-icons/icomoon/Shrink2";
import {Close} from "@styled-icons/evil/Close";
import {ChevronRight} from "@styled-icons/bootstrap/ChevronRight";
import {ChevronLeft} from "@styled-icons/bootstrap/ChevronLeft";

export const Container = styled.div`
    max-width: 1216px;
    margin: 0 auto;
`;


export const Section = styled.div`
    margin-top: 2rem;
    &#what_is{
      margin-top: 4rem;
    }

    &#buyafox{
      margin-top: 4rem;
      padding: 1rem 4rem;
    }

    &#foxes{
      display: flex;
      justify-content: space-around;
      img{
        width: 100%;
        height: 100%;
        cursor: pointer;
        padding: 2px;
      }
      .foxes-items-1{
        with: 400px;
        height: 400px;
      }
      .foxes-items-11{
        with: 400px;
        height: 400px;
        display: flex;
      }
      .foxes-items-21{
        with: 280px;
        height: 400px;
      }
      .foxes-items-22{
        with: 120px;
        height: 400px;
      }
      .foxes-items-31{
        display: flex;
        with: 280px;
        height: 120px;
      }
      .foxes-items-32{
        with: 280px;
        height: 280px;
      }
     .foxes-items-33{
        with: 120px;
        height: 200px;
      }
      .foxes-items-4{
        width: 140px;
        height: 120px;
      }
    }

    &#moredeetz{
      margin-top: 4rem;
      p {
        margin: 2rem 8rem;
      }
    }

    &#loadmap{
      margin-top: 4rem;
      display: flex;
      justify-content: center;
    }

    &#loadmap{
      margin-top: 4rem;
    }
`;

export const SectionTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;

export const WhatIsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const FoxImages = styled.div`
  width: 48%;
  div.imageContainer{
    width: 282px;
    height: 282px;
    margin: 2px;
    display: inline-block;

   &:hover{
    background: #DDDDDD;
    img{
      opacity: 0.5;
    }
  }
  }
  img{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const FoxesCaption = styled.div`
  width: 48%;
  padding: 2rem;
  div.caption--title{
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
    a{
      color: white;
      font-weight: bold;
      font-size: 18px;
      &:hover{
        text-decoration: unset;
      }
    }
  }
`;


export const BuyAFoxContent = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      position: relative;
      padding: 1rem 2rem;
      z-index: 1;

      >p{
        width: 25%;
      }

      div.counter{
        text-align: center;
        display: flex;
        flex-direction: column;
      }

      div.mintBtn{
        background-color: white;
        padding: 1.5rem 4rem;
        span{
          color: black;
          font-weight: bold;
        }
      }

      div.border-back{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 8px;
        left: 8px;
        background-color: #b3a89a;
        z-index: -1;
      }
      div.back-ground{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: #9a8a78;
        z-index: -1;
      }
`;

export const TokenNomicsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const TokenNomicsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div.imageContainer{
    border: solid 8px white;
    outline: solid 1px black;
    outline-offset: -4px;
    margin-bottom: 12px;
  }
  label{
    text-align: left;
    font-size: 14px;
  }
`;

export const TokenNomicsCaption = styled.div`
    margin: 1rem 12rem;
    color: #9a8a78;
    text-decoration: underline;
`;

export const LoadmapItem = styled.div`
  width: 40%;
  border: solid 1px #9a8a78;

  &.loadmap-caption{
    padding: 2rem 1rem;
  }
  video{
      object-fit: cover;
  }
`;

export const LoadmapTitle = styled.div`
  text-align: center;
`;

export const TeamCaption = styled.div`
  padding: 1rem 4rem;
`;

export const TeamMembers = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;

  div.imageContainer{
    border: solid 8px white;
    outline: solid 1px black;
    outline-offset: -4px;
  }

  img{
    width: 176px;
    height: 176px;
  }
  label.member-name{
    margin-top: 8px;
    text-align: center;
    color: white;
  }
  label.member-caption{
    color: #9a8a78;
    width: 70%
  }
`;

export const Address = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

export const AddressTitle = styled.span`
  color: white;
  margin-right: 4rem;
`;

export const AddressContent = styled.span`
  color: #9a8a78;
  text-decoration: under-line;
`;


export const FoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  margin: 8px;
  cursor: pointer;
  position: relative;
  &:hover{
    background: #DDDDDD;
    .favorite{
      display: flex;
    }
    img{
      opacity: 0.5;
    }
  }
`;

export const FoxImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const Favorite = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: none;
`;

export const HearIcon = styled(Heart)`
  color: black;
`;


export const HearFillIcon = styled(HeartFill)`
  color: red;
`;

export const FullScreenFoxes = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  color: white;
  z-index: 999;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const FullScreenHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
  font-size: 32px;
`;


export const ArrowsAngleExpandIcon = styled(ArrowsAngleExpand)`
  color: white;
  cursor: pointer;
`;

export const Shrink2Icon = styled(Shrink2)`
  color: white;
  cursor: pointer;
`;

export const HearWhiteIcon = styled(Heart)`
  color: white;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  color: white;
  cursor: pointer;
`;


export const HeaderRight = styled.div`

`;


export const FullScreenContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 66%;
  padding: 6rem;
`;

export const RightIcon = styled.div`

`;

export const ChevronRightIcon = styled(ChevronRight)`
  color: white;
  cursor: pointer;
`;


export const SliderFoxImage = styled.div`
  img{
    width: 560px;
    height: 700px;
  }
`;

export const LeftIcon = styled.div`

`;

export const ChevronLeftIcon = styled(ChevronLeft)`
  color: white;
  cursor: pointer;
`;

export const ContentCaption = styled.div`
  padding-top: 2rem;
  font-size: 48px;
  font-weight: bold;
`;

