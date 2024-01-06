import React from 'react';
import {SubtitleH3, TitleH3} from "../../../styled/Text";
import styled from "styled-components";
import {Container} from "../../../component/Container";
import {Theme} from "../../../styled/Theme";
import {Carousel} from "./carousel/Carousel";

export const Projects = () => {

    return (
        <StyledProjects>
            <Container>
                <a id={"project"}/>
                <TitleH3>Projects</TitleH3>
                <SubtitleH3>Things I’ve built so far</SubtitleH3>
                <StyledBox>
                    <Carousel/>
                </StyledBox>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${Theme.media.tablet} {
    margin-top: 120px;
  }
  @media ${Theme.media.tablet} {
    margin-top: 60px;
  }
`

const StyledBox = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
 
`