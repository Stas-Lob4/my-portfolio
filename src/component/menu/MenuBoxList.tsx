import React from 'react';
import styled from "styled-components";
import {MenuList} from "./MenuList";


export const MenuBoxList = (props: {gap?: string, size?:string, direction?: string } ) => {
    return (
        <MenuBoxListStyled gap={props.gap} size={props.size} direction={props.direction}>
            {MenuList.map((value)=>{
                return <li><a href={`#${value.href}`} aria-label={value.href}>{value.title}</a></li>
            })}
        </MenuBoxListStyled>
    );
};

type MenuBoxListStyledPropsType = {
    size?: string
    gap?: string
    direction?: string
}

const MenuBoxListStyled = styled.ul<MenuBoxListStyledPropsType>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap};

  li > a {
    color: #A7A7A7;
    font-family: 'DM Sans';
    font-size: ${(props) => props.size};
    font-weight: 500;
    line-height: 26px;
    :hover{
      text-decoration: underline;
    }
  }
`
