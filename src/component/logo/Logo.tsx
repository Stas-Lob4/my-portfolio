import React from 'react';
import {Icon} from "../icon/Icon";

type LogoPropsType = {
    idLogo: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <a href="#">
            <Icon iconId={props.idLogo} width={76} height={40}/>
        </a>
    );
};
