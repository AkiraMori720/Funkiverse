import styled from 'styled-components';
import {typography} from "~/styles/typography";
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';

export const Container = styled.div`
  z-index: 1;
`;

export const Navbar = styled.div`
  margin: 0 auto;
  padding: 12px;
  display: none;
  flex-direction: row;
  align-items: center;
  max-width: 1216px;
  justify-content: space-around;

  @media (min-width: 768px){
    display flex;
  }
`;


export const Logo = styled.div`
  float: none;
  display: inline-flex;

  img {
    width: 108px;
    height: 108px;
  }
`;

export const Menus = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  `;

export const MenuContainer = styled.div`
  margin: 0 12px;
  &.active{
    color: #cfc8c0;
  }
  a{
    cursor: pointer;
    text-decoration: unset;
    color: white;
  }
`;

export const Action = styled.div`
  div.social--link img{
    with: 20px;
    height: 20px;
    padding: 0 8px;
  }

  div.connect--btn{
    background-color: white;
    text-align: center;
    padding: 6px;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
      background-color: #000000;
      a{
        color: #FFFFFF;
        text-decoration: none;
      }
    }
    a{
      transition: inherit;
      color: #000000;
      font-family: impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif;
      font-size: 16px;
    }
  }
  `;
