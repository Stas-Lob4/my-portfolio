import React from 'react';
import {EducationListData} from "./EducationListData";
import {List} from "../../../../../component/list/List";
import styled from "styled-components";

export const EducationList = () => {
    return (
        <EducationListStyled>
            {EducationListData.map((value) => {
                return <li>
                    <List position={value.position}
                          btnTitle={value.btnTitle}
                          office={value.office}
                          time={value.time}/>
                </li>
            })}
        </EducationListStyled>
    );
};

const EducationListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`