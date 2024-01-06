import styled from "styled-components";
import {Theme} from "./Theme";

export const TitleH1 = styled.h1`
  color: #D9D9D9;
  font-size: calc((100vw - 360px) / (1920 - 360) * (58 - 30) + 30px);
  font-style: normal;
  font-weight: 700;
  line-height: calc((100vw - 360px) / (1920 - 360) * (70 - 50) + 50px);
  span{
    background-image: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const TitleH2 = styled.h2`
  font-size: calc((100vw - 320px) / (1920 - 320) * (58 - 20) + 20px);
  font-weight: 700;
  line-height: calc((100vw - 360px) / (1920 - 360) * (70 - 30) + 30px);
  text-align: center;
  a {
    background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const TitleH3 = styled.h3`
  color: #CCC;
  text-align: center;
  font-size: calc((100vw - 360px) / (1920 - 360) * (48 - 28) + 28px);
  font-weight: 700;
  line-height: calc((100vw - 360px) / (1920 - 360) * (24 - 16) + 16px);
`
export const TitleH4 = styled.h4`
  margin-bottom: 38px;
  color: #CCC;
  font-size: calc((100vw - 360px) / (1920 - 360) * (46 - 25) + 25px);
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  @media ${Theme.media.tablet}{
    margin-bottom: 34px;
  }
  @media ${Theme.media.mobile}{
    margin-bottom: 20px;
  }
`

export const SubtitleH3 = styled.p`
  margin-top: calc((100vw - 360px) / (1920 - 360) * (29 - 15) + 15px);
  color: #A7A7A7;
  text-align: center;
  font-size: calc((100vw - 360px) / (1920 - 360) * (32 - 15) + 15px);
  font-weight: 400;
  line-height: 26px;
`