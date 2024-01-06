import React from 'react';
import iconSprite from "../../assets/img/svg/icons-sprite.svg"

type IconPropsType = {
    iconId: string,
    width: number,
    height: number | string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width ||"30"} height={props.height ||"30"} viewBox={props.viewBox ||`0 0 ${props.width} ${props.height} `} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};

export const IconSvg = (props: { iconId: string, value?: string }) => {
    if (props.value === undefined) {
        return <></>
    }
    return (
        <svg width={"16"} height={"12"} viewBox={"0 0 16 12"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
}

