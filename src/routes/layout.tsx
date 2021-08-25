import React from "react";
import Headerbar from "~/components/Headerbar";
import * as S from "./layoutStyle";
import Footer from "~/components/Footer";

interface Props {
  component: React.FC,
  props: React.ComponentProps<any>
}

const AppLayout : React.FC<Props> = ({component, props}) => {

  return (
    <S.Container>
      <Headerbar history={props.history} />
      <S.Main>
        {React.createElement(component, props)}
      </S.Main>
      <Footer history={props.history} />
    </S.Container>
  );
}

export default AppLayout;
