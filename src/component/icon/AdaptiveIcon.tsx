import React, {useEffect, useState} from 'react';
import {Icon} from "./Icon";


interface AdaptiveIconProps {
    iconId: string;
    width:number;
    height?: number;
    heightIconHard?: number;
    breakpoint: number;
    minValue: number;
    maxValue: number;
}

export const AdaptiveIcon: React.FC<AdaptiveIconProps> = (props) => {

    const [adjustedWidth, setAdjustedWidth] = useState<number>(props.width)
    const [adjustedHeight, setAdjustedHeight] = useState<number|undefined>(props.height)

    const updateIconSize = () => {
        const newWidth = calcDimension(props.width, props.minValue, props.breakpoint);
        setAdjustedWidth(newWidth);
        if(props.height !== undefined){
            const newHeight = calcDimension(props.height, 0, props.breakpoint);
            setAdjustedHeight(newHeight);
        }
    }

    const calcDimension = (value: number, minValue: number, breakpoint: number, ) => {
        return (
            (window.innerWidth - minValue) / (breakpoint - minValue) * (value - minValue) + minValue
        )
    }

    useEffect(() => {
        updateIconSize();
        window.addEventListener('resize', updateIconSize);
        return () => {
            window.removeEventListener('resize', updateIconSize);
        };
    }, []);

    return <Icon
        iconId={props.iconId}
        width = {adjustedWidth}
        height={adjustedHeight || props.heightIconHard || 'auto'}
    />
}
