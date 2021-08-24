import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    max-width: 1216px;
    margin: 0 auto;

    div.divider{
      margin-top: 2rem;
      border-bottom: 1px solid #9a8a78;
    }
`;

export const RecordHeader = styled.div`
  margin-top: 2rem;
  background-color: #3c3c3c;
  padding: 1rem 8rem 4rem 8rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

export const Caption = styled.div`
  margin-top: 1rem;
`;

export const RecordInfo = styled.div`
  margin-top: 2rem;
  div.spinner-container{
    width: 100%;
    height: 160px;
    display: flex;
    align-items:center;
    justify-content: center;
  }
`;


export const RecordInfoTitle = styled.div`
  font-weight: bold;
`;


export const RecordInfoContent = styled.div`
  margin-top: 1rem;
  div.info-label{
    margin: 1rem 0;
  }
  div.formula{
    text-align: center;
    font-size: 14px;
  }

  textarea{
    width: 100%;
    height: 160px;
    font-size: 12px;
    background-color: black;
    color: white;
  }

  div.record-info-header{
    margin-top: 2rem;
    margin-top: 2rem;
    text-align: center;
  }

  table.prov-table{
    margin: 0 auto;
    width: 80%;
    font-size: 12px;
    tr td{
      text-align: center;
    }
  }
`;

export const RelevantInfo = styled.div`
`;

export const InfoItem = styled.div`
  display: flex;
  font-size: 12px;
  div.re-info-label{
    width: 48%;
    text-align: right;
    margin-right: 8px;
  }
    div.re-info-value{
    margin-left: 8px;
    }
`;


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface SpinnerProps{
  size: string;
}

export const Spinner = styled.div<SpinnerProps>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #9a8a78;
  border-right: 2px solid #9a8a78;
  border-bottom: 2px solid #9a8a78;
  border-left: 4px solid black;
  background: transparent;
  width: ${props => props.size === 'small'?'24px':'48px'};
  height: ${props => props.size === 'small'?'24px':'48px'};
  border-radius: 50%;
`;

