import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../component/FlexWrapper";
import {MenuBoxList} from "../../component/menu/MenuBoxList";
import {Container} from "../../component/Container";
import {Theme} from "../../styled/Theme";
import {BoxIconMobile, BoxIconTablet} from "../../component/icon/BoxIcons";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerDesktop>
                <FlexWrapper direction={"row"} justify={"space-between"} gap={"176px"}>
                    <MenuBoxList gap={"45px"} size={"18px"}/>
                    <FooterText>
                        Designed and built by <span>Stanislav Lobchuk</span> with <span>Love</span> & <span>Coffee</span>
                    </FooterText>
                </FlexWrapper>
            </ContainerDesktop>
            <ContainerMobile>
                <BoxIconTablet>
                    <FooterText>
                        Designed and built by <span>Stanislav Lobchuk</span> with <span>Love</span> & <span>Coffee</span>
                    </FooterText>
                </BoxIconTablet>
                <BoxIconMobile>
                    <FooterText>
                        Designed and built by<br/> <span>Stanislav Lobchuk</span> with <span>Love</span> & <span>Coffee</span>
                    </FooterText>
                </BoxIconMobile>
            </ContainerMobile>
        </StyledFooter>
    );
};


const StyledFooter = styled.div`
  margin-top: 25px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  @media ${Theme.media.mobile}{
    margin-top: 10px;
    margin-bottom: 30px;
  }
`


const FooterText = styled.h5`
  color: #A7A7A7;
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  span{
    background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media ${Theme.media.mobile}{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const ContainerDesktop = styled(Container)`
  display: block;
  @media ${Theme.media.tablet}{
    display: none;
  }
`
const ContainerMobile = styled(Container)`
  display: none;
  @media ${Theme.media.tablet}{
    display: block;
    text-align: center;
  }
`