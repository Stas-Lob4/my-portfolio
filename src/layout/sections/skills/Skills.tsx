import React from 'react';
import styled from "styled-components";
import {SubtitleH3, TitleH3} from "../../../styled/Text";
import {Icon} from "../../../component/icon/Icon";
import {SkillsListIcon} from "./SkillsListIcon";
import {Container} from "../../../component/Container";
import {FlexWrapper} from "../../../component/FlexWrapper";
import {BoxIconDesktop, BoxIconMobile, BoxIconTablet} from "../../../component/icon/BoxIcons";
import {Works} from "../cvsection/works/Works";
import {Theme} from "../../../styled/Theme";

export const Skills = () => {
    return (
        <StyleSkills>
            <a id={"tech_stack"}></a>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <TitleH3>My Tech Stack</TitleH3>
                    <SubtitleH3> Technologies I’ve been working with recently</SubtitleH3>
                    <IconsBox>
                        <BoxIconDesktop>
                            <FlexWrapper gap={"75px"} wrap={"wrap"} align={"center"} justify={"space-between"}>
                                {SkillsListIcon.map((value)=>{
                                    return <Icon iconId={value.iconId} width={120} height={120} viewBox={"0 0 120 120"}/>
                                })}
                            </FlexWrapper>
                        </BoxIconDesktop>
                        <BoxIconTablet>
                            <FlexWrapper gap={"45px"} wrap={"wrap"} align={"center"} justify={"space-between"}>
                                {SkillsListIcon.map((value)=>{
                                    return <Icon iconId={value.iconId} width={80} height={80} viewBox={"0 0 120 120"}/>
                                })}
                            </FlexWrapper>
                        </BoxIconTablet>
                        <BoxIconMobile>
                            <FlexWrapper gap={"30px"} wrap={"wrap"} align={"center"} justify={"space-between"}>
                                {SkillsListIcon.map((value)=>{
                                    return <Icon iconId={value.iconId} width={60} height={60} viewBox={"0 0 120 120"}/>
                                })}
                            </FlexWrapper>
                        </BoxIconMobile>
                    </IconsBox>
                </FlexWrapper>
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.div`
  margin-top: 200px;
  padding: 10px;
  @media ${Theme.media.tablet}{
    margin-top: 120px;
  }
  @media ${Theme.media.tablet}{
    margin-top: 60px;
  }
`
const IconsBox = styled.div`
  margin-top: 120px;
  @media ${Theme.media.tablet} {
    margin-top: 50px;
  }
  @media ${Theme.media.tablet} {
    margin-top: 30px;
  }
`