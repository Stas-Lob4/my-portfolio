import React from 'react';
import {Logo} from "../../component/logo/Logo";
import {MenuDesktop} from "./menu-desktop/MenuDesktop";
import styled from "styled-components";
import {Container} from "../../component/Container";
import {FlexWrapper} from "../../component/FlexWrapper";
import {MenuMobile} from "./menu-mobile/MenuMobile";
import {Theme} from "../../styled/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper direction={"row"} justify={"space-between"} align={"center"}>
                    <Logo idLogo={"logo"}/>
                    <MenuDesktop/>
                    <MenuMobile/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  padding-top: 20px;
  @media ${Theme.media.tablet}{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${Theme.colors.darkBg};
    z-index: 888888;
    padding-top: 10px;
  }

`