import React, {useState} from 'react';
import * as S from './styles';

interface Props {
  history: React.ComponentProps<any>
}


const Footer: React.FC<Props> = ({history}) => {
  return (
    <S.Container>
      <S.Inner>
        <S.Content>
          <S.Action>
            <div className="social--link">
              <a href=""><img src={"/images/link_1.png"} alt={"wallet"}/></a>
              <a href=""><img src={"/images/link_twitter.png"} alt={"twitter"}/></a>
              <a href=""><img src={"/images/link_youtube.png"} alt={"youtube"}/></a>
              <a href=""><img src={"/images/link_tumblr.png"} alt={"tumblr"}/></a>
              <a href=""><img src={"/images/link_instagram.png"} alt={"instagram"}/></a>
            </div>
            <div className="terms"><a href={"#"}>Terms and Conditions</a></div>
            <div className="others"><a href={"#"}>Ethos</a><a href={"#"}>FAQs</a></div>
          </S.Action>
          <S.Logo className="float-none">
            <a href="/">
              <img src={"/images/logo-footer.png"} alt={"logo"}/>
            </a>
          </S.Logo>
          <S.SendMail>
            <h5>JOIN OUR MAILING LIST</h5>
            <S.MailForm>
              <div>
                <input type={'text'} placeholder={'Email*'} required name={'email'} id={'email'}/>
                <p className={"thanks--joining"}>Thanks For joining!</p>
              </div>
              <S.MailBtn>
                <S.ChevronRightIcon size={32}/>
              </S.MailBtn>
            </S.MailForm>
          </S.SendMail>
        </S.Content>
        <S.CopyRight>© 2021 by Funki Labs Ltd.</S.CopyRight>
      </S.Inner>
    </S.Container>
  );
};

export default Footer;
