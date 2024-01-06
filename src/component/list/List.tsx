import {FlexWrapper} from '../FlexWrapper';
import {Button} from '../button/Button';
import {Icon, IconSvg} from '../icon/Icon';
import {BoxIconDesktop, BoxIconMobile, BoxIconTablet} from '../icon/BoxIcons';
import React from 'react';
import styled from 'styled-components';
import {AdaptiveIcon} from '../icon/AdaptiveIcon';

type  PropsType = {
    position: string,
    btnTitle: string,
    office: string,
    time: string,
    location?: string,
}
export const List = (props: PropsType) => {
    return <FlexWrapper
                 direction={'column'}
                 justify={'center'}
                 border_bottom={'2px solid #EBEAED'}
                 max_width={'700px'}
                 width={'calc((100vw - 360px) / (1920 - 360) * (700 - 360) + 360px)'}
                 padding_bottom={"20px"}>
        <FlexWrapper justify={'space-between'}>
            <TitlePosition>{props.position}</TitlePosition>
            <Button>{props.btnTitle}</Button>
        </FlexWrapper>
        <FlexWrapper justify={'space-between'} wrap={'wrap'}>
            <FlexWrapper align={'center'} gap={'15px'} wrap={'wrap'}>
                <FlexWrapper align={'center'} gap={'5.3px'}>
                    <IconSvg value={props.office} iconId={'office'}/>
                    <TitleText>{props.office}</TitleText>
                </FlexWrapper>
               <FlexWrapper align={'center'} gap={'5.3px'}>
                    <IconSvg value={props.location} iconId={'location'}/>
                    <TitleText>{props.location}</TitleText>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper align={'center'} gap={'5.3px'}>
                <IconSvg value={props.office} iconId={'calendar'}/>
                <TitleText>{props.time}</TitleText>
            </FlexWrapper>
        </FlexWrapper>
    </FlexWrapper>
}

const TitlePosition = styled.p`
    font-size: calc((100vw - 360px) / (1920 - 360) * (25 - 18) + 18px);
    font-weight: 400;
    line-height: 28px;
`

const TitleText = styled.span`
    font-size: calc((100vw - 360px) / (1920 - 360) * (20 - 12) + 12px);
`