import React, {useState} from 'react';

import * as S from './styles';
import Modal from "react-modal";

const Provenance: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const hashString = "c92b0386542d8beb8fb167aed611e73c5f30250a083f54edf78653946a8a6913ba2ea17148a6b4fd17df39b4c5531d860c565f465c866213806bb8cfb96ada247edf3c2c26498ead3f4144c5d43509bbbaa2317edc3571ccd54be795705b2a8e6e89bf24717b39009dd7b8e742018602a7adb32762c27e2735b3bd38d45641e2a5a2a50e5ff57ae1234f4a8fa4c2630e9a215d46aa4bedd761e35d654e41eefeb80baadd4c5ddb1be8b3d21ef7ffde175b77c9a652dfae3b29971d8907281c632091eb5bf983a3b5beac921fa66e6aa1cb5bfdc6965b173c8e2697d8614b681805c1204e21a6cad5648d87c906d18232b9083a8cb1ed47e2a11405f5057f66ddf9b5c92daad7296a5f90e8f91401a35c068755067fab692ac6cff0e92bd3400f3f005e81f781ed1d492b2580fed6aef2b7b28396b11d38c7f20f345df212ddaa12c663e9408c16cf36392c05c7143713ebc79b83993131436467190d7cdbd91a3549711dd8e202ffe9da26db2618d46d74b25184875fe3c5aed905bafc0325ff7d336fe4ef10cee64950863317cabc3ebc16ac2e57f550dbde1294215aa68524ec91e0efd6e63a3880281f048a24fbfb8ed564851b9bcc2af3cb32a4b50b053d56f6c243cc67c89b6b05ad892a67d4cd7ebf34db38b35c66402a90780a8e746fa878da423b4c195c9b8baebdf45ef108663900e97dac11dcf39db2cb0634c4317a5ab7cb0780fe353009e1fca6c0623a19536c432cbca916be405cd2b3e3d36e8c73f61da88e4163e64c801dc558c49dd0daca1ca4614bd90524285ab936f0a742ac9662a387552aaf85776c17ad5a2d8d07e83345638950b738486a714c376ee57d1dc8caba98227024e49c44f88ae0ba0555240dce65360bd2cd1e0d8d84ec3d2a1a7b4e7f803926200f28d36a98d93536e3768a0664cc24eeedb95443fbfcc2a1667e0ad80d618264a1cf8b88ba6175d1916e07f8615ac7e1b946e0dbe7543af5749fa6a13996fb94c89089a455c2ecbab0ed93a321cb2abab7a459ef7427a9db10ba684714fcef8ef768e0994ddb4d6b560a6736cb8277420a00c0db887306207b8fd0f108b1177100660a734d5ed01a37e4bdbb56a54aef1600842dba30f3757a132f9bf50e1c80c9f21cb3fdfc0c4b12d2fd06d9b943581396966611d3b6d740b302a2983a148c6cbb7a669856b3ba060e0aed5c78f85181840d566461e904a7900eb864ded1df9486ed9c2b1d3f36eca9917eabf252c1983f444fc4db00037df9e5c9187cfa4be0ed2c13b6cb49a053f55cb7c65d907aa7a11d11df27c3155ef5174ea7f8f14c8b0f716f63b5f11cfcc2c692e8a360c20dd10ae354698e02b36e3fc1f4c5419a13dcc3d6ec615884b8ad2f4c43bb5dccc0693f8cb309840280821776c152fa054";

  const records = [
    {
      id: 1147,
      sha_hash: "c92b0386542d8beb8fb167aed611e73c5f30250a083f54edf78653946a8a6913",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    },
    {
      id: 1148,
      sha_hash: "ba2ea17148a6b4fd17df39b4c5531d860c565f465c866213806bb8cfb96ada24",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    },
    {
      id: 1149,
      sha_hash: "7edf3c2c26498ead3f4144c5d43509bbbaa2317edc3571ccd54be795705b2a8e",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    },
    {
      id: 1150,
      sha_hash: "6e89bf24717b39009dd7b8e742018602a7adb32762c27e2735b3bd38d45641e2",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    },
    {
      id: 1151,
      sha_hash: "a5a2a50e5ff57ae1234f4a8fa4c2630e9a215d46aa4bedd761e35d654e41eefe",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    },
    {
      id: 1152,
      sha_hash: "b80baadd4c5ddb1be8b3d21ef7ffde175b77c9a652dfae3b29971d8907281c63",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    },
    {
      id: 1153,
      sha_hash: "2091eb5bf983a3b5beac921fa66e6aa1cb5bfdc6965b173c8e2697d8614b6818\t",
      ipfs_hash: "QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk",
      url: "https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"
    }
  ];

  return (
    <S.Container>
      <S.RecordHeader>
        <S.Title>
          FUNKI FOXES PROVENANCE RECORD
        </S.Title>
        <S.Caption>
          This page shows the provenance information concerning each Funki Fox which will ever exist. <br/><br/>
          In essence, each Funki Fox image is hashed using SHA-256 algorithm. An integrated string is gotten through
          concatenating SHA-256 of each Funki Fox image in the specific order as enumerated below. The concluding proof
          is gotten through SHA-256 hashing of this combined string. <br/><br/>
          This is the ultimate provenance record which is stored on the smart contract.
        </S.Caption>
      </S.RecordHeader>
      <div className={"divider"}/>
      <S.RecordInfo>
        <S.RecordInfoTitle>IMPORTANT INFORMATION</S.RecordInfoTitle>
        <S.RecordInfoContent>
          <div className={"info-label"}>Each Bored Ape token ID is assigned to an artwork image from the initial
            sequence with this formula:
          </div>
          <div className={"formula"}>(tokenId + startingIndex) % 10000 → Initial Sequence Index</div>
          <div className={"info-label"}>Here's the relevant information:</div>
          {
            loading ?
              <div className={"spinner-container"}>
                <S.Spinner size={"large"}/>
              </div> :
              <S.RelevantInfo>
                <S.InfoItem>
                  <div className={'re-info-label'}><label>FINALIZED STARTING INDEX</label></div>
                  | <div className={"re-info-value"}>8853</div>
                </S.InfoItem>
                <S.InfoItem>
                  <div className={'re-info-label'}><label>BORED APE YACHT CLUB CONTRACT ADDRESS</label></div>
                  | <div className={"re-info-value"}><a className={"link"}
                                                        href={"#"}>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a></div>
                </S.InfoItem>
                <S.InfoItem>
                  <div className={'re-info-label'}><label>FINAL PROOF HASH</label></div>
                  | <div className={"re-info-value"}><a className={"link"}
                                                        href={"#"}>cc354b3fcacee8844dcc9861004da081f71df9567775b3f3a43412752752c0bf</a>
                </div>
                </S.InfoItem>
                <S.InfoItem>
                  <div className={'re-info-label'}><label>ARWEAVE PERMAWEB URIS</label></div>
                  | <div className={"re-info-value"}><a className={"link"} href={"#"}>List of Arweave URIs</a></div>
                </S.InfoItem>
              </S.RelevantInfo>
          }
        </S.RecordInfoContent>
      </S.RecordInfo>
      <div className={"divider"}/>
      <S.RecordInfo>
        <S.RecordInfoTitle>CONCATENATED HASH STRING</S.RecordInfoTitle>
        {
          loading ?
            <div className={"spinner-container"}>
              <S.Spinner size={"large"}/>
            </div>
            :
            <S.RecordInfoContent>
              <textarea className={"hash-string"} value={hashString}/>
            </S.RecordInfoContent>
        }
      </S.RecordInfo>
      <div className={"divider"}/>
      <S.RecordInfo>
        <S.RecordInfoTitle>PROVENANCE RECORD</S.RecordInfoTitle>
        {
          loading ?
            <div className={"spinner-container"}>
              <S.Spinner size={"large"}/>
            </div> :
            <S.RecordInfoContent>
              <div>The table below lists the original index, assigned BAYC Token ID, SHA256 Hash output and IPFS link of
                each Bored Ape image.
              </div>
              <div className={"record-info-header"}><label>INITIAL SEQUENCE INDEX | ASSIGNED BAYC TOKEN ID | SHA-256
                HASH | IPFS HASH</label></div>
              <table className={"prov-table"}>
                {
                  records.map((r, index) => (
                    <tr>
                      <td>{index}</td>
                      <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                      <td>{r.id}</td>
                      <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                      <td>{r.sha_hash}</td>
                      <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                      <td><a className="link"
                             href={r.url}>{r.ipfs_hash}</a>
                      </td>
                    </tr>
                  ))
                }
              </table>
            </S.RecordInfoContent>
        }
      </S.RecordInfo>
    </S.Container>
  );
};

export default Provenance;
