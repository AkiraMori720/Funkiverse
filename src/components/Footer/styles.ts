import styled from 'styled-components';
import {ChevronRight} from '@styled-icons/bootstrap/ChevronRight';

export const Container = styled.div`
  border-top: solid 3px #9a8a78;
  max-width: 1216px;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const Inner = styled.div`
  padding: 2rem 4rem;
`;

export const Content = styled.div`
  padding: 12px;
  display: none;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px){
    display flex;
  }
`;


export const Logo = styled.div`
  float: none;
  display: inline-flex;

  img {
    width: 220px;
    height: 220px;
  }
`;

export const Action = styled.div`
  font-size: 15px;

  div.social--link img{
    with: 20px;
    height: 20px;
    padding: 0 8px;
  }

  div.terms{
    margin-top: 12px;
    a{
      color: white;
      text-decoration: underline;
    }
  }

  div.others{
    margin-top: 12px;
    a{
      color: white;
      margin-right: 24px;
      text-decoration: underline;
    }
  }
  `;

export const SendMail = styled.div`
  `;


export const MailForm = styled.div`
  display: flex;

  input{
    padding: 4px 12px;
    width: 240px
  }
  p.thanks--joining{
    text-align: center;
    margin: 0;
    padding: 4px;
    color: #9a8a78;
    background: white;
  }
  `;


export const MailBtn = styled.div`
  background: #9a8a78;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  `;

export const CopyRight = styled.div`
  color: #9a8a78;
`;

export const ChevronRightIcon = styled(ChevronRight)`
  color: black;
`;
