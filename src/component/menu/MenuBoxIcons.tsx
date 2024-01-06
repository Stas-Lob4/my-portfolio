import styled from "styled-components";
import {Icon} from "../icon/Icon";
import React from "react";

export const MenuBoxIcons = () => {
   return <MenuBoxIconStyled>
        <a href="https://github.com/Stas-Lob4">
            <Icon iconId={"github2"} width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/stanislav-lobchuk-13a832237/">
            <Icon iconId={"linkedin"} width={30} height={30}/>
        </a>
        <a href="https://twitter.com/LobcukStanislav">
            <Icon iconId={"twitter"} width={33} height={33}/>
        </a>
    </MenuBoxIconStyled>
}


const MenuBoxIconStyled = styled.li`
    display: flex;
    gap:20px;
    align-items: center;
    justify-content: center;
`