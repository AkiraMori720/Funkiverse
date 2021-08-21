import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
`;

export const Main = styled.div`
  background-color: white;
  background-image: url(/images/BackgroundClouds.svg);
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  background-attachment: fixed;
  min-height: 100vh;

  @media (min-width: 768px){
    margin-left: 320px;
  }
`;


export const DropButton = styled.div`
  position: absolute;
  padding: 8px;
  top: 12px;
  left: 12px;
  border-radius: 4px;
  border: solid 1px rgba(0,0,0,0.75);
  cursor: pointer;
  background: #feeef2;
  z-index: 10;

  &.display-none{
    display: none !important;
  }

  @media (min-width: 768px){
    display: none;
  }

  span{
    background-color: rgba(0,0,0,0.75);
    border-radius: .25rem;
    width: 22px; height: 2px;
    display: block;

    &.middle{
       margin-bottom: 6px; margin-top: 6px;
    }
  }
`;
