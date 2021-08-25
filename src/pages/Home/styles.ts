import styled from 'styled-components';
import {Heart} from '@styled-icons/bootstrap/Heart';
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';
import {ChevronRight} from "@styled-icons/bootstrap/ChevronRight";
import {ChevronLeft} from "@styled-icons/bootstrap/ChevronLeft";
import {ArrowsAngleExpand} from "@styled-icons/bootstrap/ArrowsAngleExpand";
import {Shrink2} from "@styled-icons/icomoon/Shrink2";
import {Close} from "@styled-icons/evil/Close";

export const Container = styled.div`
    max-width: 1216px;
    margin: 0 auto;
`;

export const Section = styled.div`
    margin-top: 2rem;
    &#introduce{
      margin-top: 4rem;
      display: flex;
      justify-content: space-around;
    }

    &#foxes{
      margin-top: 4rem;
      height: 240px;
      .area{
        white-space: nowrap;
      }
    }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  label{
    white-space: nowrap;
    letter-spacing: .05rem;
    animation : typing 5s steps(240, end);
    overflow: hidden;
  }
  @keyframes typing{
    from {
      width: 1%;
    }
    to{
      width: 100%;
    }
  }
`;

export const JoinUs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const JoinContent = styled.div`
  border: solid 6px grey;
  padding: 12px;
  max-width: 620px;
  margin-right: 24px;
  span{
    font-size: 18px;
  }
`;

export const JoinBtn = styled.div`
    background-color: white;
    padding: 20px 48px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
      background-color: black;
      span{
        color: white;
      }
    }
    span{
      color: black;
    }
`;

export const Introduce = styled.div`
  width: 50%;
  padding: 0 4rem;
`;

export const IntroduceTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const IntroduceContent = styled.div`
  margin-top: 2rem;
  text-align: center;
  >span{
    font-size: 14px;
  }
`;

export const IntroduceEmpress = styled.div`
  background-color: #9a8a78;
  padding: 2rem 4rem;
  text-align: left;
  margin-top: 1rem;
`;

export const FoxContainer = styled.div`
  width: 165px;
  height: 220px;
  display: inline-block;
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
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
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
