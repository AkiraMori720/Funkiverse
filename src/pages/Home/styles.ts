import styled from 'styled-components';
import {Heart} from '@styled-icons/bootstrap/Heart';
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';

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
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  display: none;
`;
export const tem = styled.div`

`;


export const HearIcon = styled(Heart)`
  color: black;
`;

export const HearFillIcon = styled(HeartFill)`
  color: red;
`;
