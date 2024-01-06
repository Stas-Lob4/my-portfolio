import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {MenuBoxList} from "../../../component/menu/MenuBoxList";
import {MenuBoxIcons} from "../../../component/menu/MenuBoxIcons";
import {Theme} from "../../../styled/Theme";
import {FlexWrapper} from "../../../component/FlexWrapper";

export const MenuMobile = () => {


    let [isShow, setIsShow] = useState<boolean>(false)

    return (
        <MenuStyled>
                <BurgerButton
                    isOpen={isShow}
                    onClick={() => setIsShow((prefIsShow) => !prefIsShow)}
                >
                    <span></span>
                </BurgerButton>
                <MenuMobilePopup isOpen={isShow}>
                    <FlexWrapper direction={"column"} align={"center"} justify={"center"} gap={"25px"}>
                        <MenuBoxList gap={"20px"} direction={"column"}/>
                        <MenuBoxIcons />
                    </FlexWrapper>
                </MenuMobilePopup>
        </MenuStyled>
    );
};

const MenuStyled = styled.nav`
  display: none;
  @media ${Theme.media.tablet}{
    display: block;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 180px;
  z-index: 9999999;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: rgba(99,93,93,0.79);
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css`
      background-color: rgba(165, 42, 42, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: rgba(99,93,93,0.79);
      position: absolute;
      transform: translateY(-10px);
     
      ${props => props.isOpen && css`
        transform: rotate(-45deg) translateY(0);
        transition-duration: 30ms;
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: rgba(99,93,93,0.79);
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css`
        transform: rotate(45deg)  translateY(0);
        transition-duration: 30ms;
        width: 36px;
      `}
    }
  }
`

const MenuMobilePopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(25, 25, 25, 0.9);
  display: none;
  ${props => props.isOpen && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
