import React from 'react';
import styled from "styled-components";
import {AboutMe} from "./about/AboutMe";
import {Works} from "./works/Works";
import {Education} from "./education/Education";
import {Container} from "../../../component/Container";
import {FlexWrapper} from "../../../component/FlexWrapper";
import {Theme} from "../../../styled/Theme";

export const CvSection = () => {
    return (
        <CvSectionStyled>
            <Container>
                <FlexWrapper max_width={"700px"} direction={"column"} gap={"38px"} align={"flex-start"} justify={"flex-start"}>
                    <AboutMe/>
                    <Works/>
                    <Education/>
                </FlexWrapper>
            </Container>
        </CvSectionStyled>
    );
};

const CvSectionStyled = styled.div`
  max-width: 100%;
  margin-top: 250px;
  @media ${Theme.media.tablet}{
    margin-top: 120px;
  }
  @media ${Theme.media.tablet}{
    margin-top: 60px;
  }
`
