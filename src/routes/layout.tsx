import React, {useState} from "react";
import Headerbar from "~/components/Headerbar";
import * as S from "./layoutStyle";

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
    </S.Container>
  );
}

export default AppLayout;
