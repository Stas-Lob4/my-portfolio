import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../component/FlexWrapper";
import {TitleH4} from "../../../../styled/Text";
import {Container} from "../../../../component/Container";

export const AboutMe: React.FC = () => {
    return (
        <StyledAboutMe>
            <a id={"about"}></a>
            <Container>
            <FlexWrapper direction={"column"} justify={"space-around"} wrap={"wrap"}>
                <TitleH4>
                    About Me
                </TitleH4>
                <Text>
                    The Generator App is an online tool that helps you to export ready-made templates ready to work as
                    your future website. It helps you to combine slides, panels and other components and export it as a
                    set of static files: HTML/CSS/JS.
                </Text>
            </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Text = styled.p`
  color: #666666;
  font-size: calc((100vw - 360px) / (1920 - 360) * (20 - 15) + 15px);
  font-weight: 400;
  line-height: 26px;
`