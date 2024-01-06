import React from 'react';
import styled from "styled-components";
import {TitleH4} from "../../../../styled/Text";
import {EducationList} from "./education-list/EducationList";
import {Container} from "../../../../component/Container";

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <TitleH4>Education</TitleH4>
                <EducationList/>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
`