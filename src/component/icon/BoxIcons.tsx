import styled from "styled-components";
import {Theme} from "../../styled/Theme";


export const BoxIconDesktop = styled.div`
  display: block;
  @media ${Theme.media.tablet} {
    display: none;
  }
`

export const BoxIconTablet = styled.div`
  display: none;
  @media ${Theme.media.tablet} {
    display: block;
  }
  @media ${Theme.media.mobile} {
    display: none;
  }
`

export const BoxIconMobile = styled.div`
  display: none;
  @media ${Theme.media.tablet} {
    display: none;
  }
  @media ${Theme.media.mobile} {
    display: block;
  }
`