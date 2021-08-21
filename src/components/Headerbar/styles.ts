import styled from 'styled-components';
import {typography} from "~/styles/typography";
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';

export const Container = styled.div`
  background-color: white;
  position: fixed;
  height: 100%;
  z-index: 1;
`;

export const Navbar = styled.div`
  margin: 0 auto;
  padding: 12px;
  display: none;
  flex-direction: column;
  align-items: center;
  height: 100%;

  &.display-mini{
    display: flex;
    width: 320px;
    z-index: 9999;
  }

  @media (min-width: 768px){
    width: 320px;
    display flex;
  }
`;

export const CloseContainer = styled.div`
  text-align: right;
  width: 100%;
`;

export const CloseBtn = styled(CloseOutline)`
  color: ${typography.colors.text};
`;

export const Logo = styled.div`
  margin-top: 60px;
  float: none;
  display: inline-flex;

  img {
    width: 180px;
    height: 100px;
  }

  @media (min-width: 768px){
    margin-top: 100px;
  }
`;

export const Menus = styled.div`
  flex-grow: 1;
  margin-top: 60px;
  `;

export const Action = styled.div`
  margin-bottom: 48px;

  div.farm--link {
    text-align: center;
    margin-bottom: 24px;
    a {
      color: ${typography.colors.main};
      text-decoration: underline;
    }
  }

  div.social--link img{
    with: 64px;
    height: 64px;
    padding: 0 8px;
  }
  `;

export const MenuContainer = styled.div`
  margin-bottom: 32px;
  cursor: pointer;
  `;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `;

export const MenuIcon = styled.div`
  padding-right: 12px;
`;

export const MenuLabel = styled.div`
  color: ${typography.colors.menu};
  font-size: 16px;
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubLabel = styled.div`
  margin-left: 32px;
  font-size: 12px;
  color: #ff4e91c4;
  align-items: flex-start;
  display: flex;

  span{
    font-size: 6px;
  }
`;
