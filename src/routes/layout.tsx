import React, {useState} from "react";
import Sidebar from "~/components/Sidebar";
import * as S from "./layoutStyle";

interface Props {
  component: React.FC,
  props: React.ComponentProps<any>
}

const AppLayout : React.FC<Props> = ({component, props}) => {
  const[openDrop, setOpenDrop] = useState(false);

  return (
    <S.Container>
      <S.DropButton onClick={() => {console.log('open', openDrop); setOpenDrop(true);}} className={openDrop?"display-none":""}>
        <span className="bg-black rounded"/>
        <span className="bg-black rounded middle"/>
        <span className="bg-black rounded"/>
      </S.DropButton>
      <Sidebar history={props.history} mini={openDrop} closeMini={() => setOpenDrop(false)}/>
      <S.Main>
        {React.createElement(component, props)}
      </S.Main>
    </S.Container>
  );
}

export default AppLayout;
