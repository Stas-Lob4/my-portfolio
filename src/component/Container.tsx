import styled from "styled-components";
import {Theme} from "../styled/Theme";

export const Container = styled.div`
  max-width: 1220px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: 15px 15px;

  @media ${Theme.media.tablet}{
    max-width: 768px;
    padding: 10px 10px;
  }
  @media ${Theme.media.mobile}{
    padding: 0 10px;
    max-width: 320px;
  }
`
