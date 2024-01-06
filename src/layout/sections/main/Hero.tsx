import React from 'react';
import userPhoto from '../../../assets/img/photo.png'
import styled from "styled-components";
import {TitleH1} from "../../../styled/Text";
import {Container} from "../../../component/Container";
import {FlexWrapper} from "../../../component/FlexWrapper";
import {Theme} from "../../../styled/Theme";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Hero = () => {
    return (
        <StyledMain id={"home"}>
            <Container>
                <FlexWrapper  justify={"space-between"} align={"center"} wrap={"wrap-reverse"}>
                    <TitleH1>
                        Hi 👋,<br/>
                        My name is<br/>
                        <Typewriter
                            options={{
                                strings: ['Stanislav Lobchuk'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        I build things for web<br/>
                    </TitleH1>
                    <Tilt>
                        <ContainerImage>
                            <BoxImage>
                                <Photo src={userPhoto}/>
                            </BoxImage>
                            {/*<RotatedSquare></RotatedSquare>*/}
                            {/*<RotatedSquare></RotatedSquare>*/}
                            {/*<RotatedSquare></RotatedSquare>*/}
                            {/*<RotatedSquare></RotatedSquare>*/}
                            {/*<RotatedSquare></RotatedSquare>*/}
                        </ContainerImage>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  margin-top: 140px;
  @media ${Theme.media.tablet} {
    margin-top: 100px;
  }
  @media ${Theme.media.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ContainerImage = styled.div`
  position: relative;
  display: inline-block;
`

const BoxImage = styled.div`
  z-index: 1;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background-image:  linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
  background-origin: border-box;
  background-clip: padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${Theme.media.tablet}{
    width: 300px;
    height: 300px;
  }
`
const Photo = styled.img`
  width: 360px;
  height: 360px;
  border: 5px solid transparent;
  border-radius: 50%;
  @media ${Theme.media.tablet}{
    width: 300px;
    height: 300px;
  }
`
const RotatedSquare = styled.div`
  width: 444px;
  height: 444px;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(99, 93, 93, 0.79);
  transform: translate(-50%, -50%) rotate(105deg);
  z-index: 0;
  position: absolute;
  display: block;
  @media ${Theme.media.tablet}{
    display: none;
  }
  //background-color: aqua;

  :nth-child(2) {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  :nth-child(3) {
    transform: translate(-50%, -50%) rotate(135deg);
  }

  :nth-child(4) {
    transform: translate(-50%, -50%) rotate(150deg);
  }

  :nth-child(5) {
    transform: translate(-50%, -50%) rotate(165deg);
  }
`
