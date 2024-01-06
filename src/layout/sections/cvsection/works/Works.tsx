import React from 'react';
import styled from "styled-components";
import {TitleH4} from "../../../../styled/Text";
import {WorkList} from "./work-list/WorkList";
import {Container} from "../../../../component/Container";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <TitleH4>Work Experience</TitleH4>
                <WorkList/>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.div`
  
`