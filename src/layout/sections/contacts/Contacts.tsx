import React from 'react';
import styled from "styled-components";
import {MenuBoxIcons} from "../../../component/menu/MenuBoxIcons";
import {TitleH2} from "../../../styled/Text";
import {Logo} from "../../../component/logo/Logo";
import {FlexWrapper} from "../../../component/FlexWrapper";
import {Container} from "../../../component/Container";
import {Theme} from "../../../styled/Theme";
import {AdaptiveIcon} from "../../../component/icon/AdaptiveIcon";

export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
            <Container>
                <a id={"contact"}></a>
                <ContainerDesktop>
                    <FlexWrapper direction={"column"} gap={"200px"} >
                        <TitleH2>
                            <FlexWrapper direction={"column"} align={"center"}>
                                For any questions please mail me:<br/>
                                <a href={"mailto:lobchuk.stanislav@gmail.com"}>lobchuk.stanislav@gmail.com</a>
                            </FlexWrapper>
                        </TitleH2>

                        <FlexWrapper justify={"space-between"}>
                            <Logo idLogo={"logo"}/>
                            <BoxContacts>
                                <ContactsText>+91 12345 09876</ContactsText>
                                <ContactsText>info@example.com</ContactsText>
                                <MenuBoxIcons/>
                            </BoxContacts>
                        </FlexWrapper>
                    </FlexWrapper>
                    <AdaptiveIcon iconId={"line_2"} width={1200} height={5} breakpoint={1920} minValue={768} maxValue={1200}/>
                </ContainerDesktop>
                <ContainerTablet>
                    <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                        <TitleH2>
                            <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                                <p>For any questions please mail me:</p>
                                <a href={"mailto:lobchuk.stanislav@gmail.com"}>lobchuk.stanislav@gmail.com</a>
                            </FlexWrapper>
                        </TitleH2>
                        <BoxContacts>
                            <ContactsText>+91 12345 09876</ContactsText>
                            <ContactsText>info@example.com</ContactsText>
                            <MenuBoxIcons/>
                        </BoxContacts>
                        <AdaptiveIcon iconId={"line_2"} width={700} heightIconHard={5} breakpoint={1920} minValue={180} maxValue={768}/>
                    </FlexWrapper>
                </ContainerTablet>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
  margin-top: 197px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${Theme.media.tablet}{
    margin-top: 150px;
  }
  @media ${Theme.media.mobile}{
    margin-top: 100px;
  }
`

const BoxContacts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  @media ${Theme.media.tablet}{
    margin-top: 70px;
  }
  @media ${Theme.media.mobile}{
    gap: 30px;
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const ContactsText = styled.p`
  color: #A7A7A7;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`

const ContainerDesktop = styled(Container)`
  display: block;
  @media ${Theme.media.tablet}{
    display: none;
  }
`
const ContainerTablet = styled(Container)`
  display: none;
  @media ${Theme.media.tablet}{
    display: block;
  }
`

