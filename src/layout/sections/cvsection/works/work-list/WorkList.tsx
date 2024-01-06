import React from 'react';
import {WorkListData} from "./WorkListData";
import {List} from "../../../../../component/list/List";
import styled from "styled-components";

export const WorkList = () => {
    return (
        <WorkListStyled>
            {WorkListData.map((value) => {
                return <li>
                    <List position={value.position}
                          btnTitle={value.btnTitle}
                          office={value.office}
                          time={value.time}
                          location={value.location}/>
                </li>
            })}
        </WorkListStyled>
    );
};

const WorkListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
