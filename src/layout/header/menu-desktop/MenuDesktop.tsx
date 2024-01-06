import React from 'react';
import styled from "styled-components";
import {MenuBoxIcons} from "../../../component/menu/MenuBoxIcons";
import {MenuBoxList} from "../../../component/menu/MenuBoxList";
import {Theme} from "../../../styled/Theme";

export const MenuDesktop = () => {
    return (
        <MenuStyled>
            <MenuBoxList gap={"20px"}/>
            <MenuBoxIcons />
        </MenuStyled>
    );
};


const MenuStyled = styled.nav`
  display: flex;
  gap: 51px;
  
  @media ${Theme.media.tablet}{
    display: none;
  }
`
