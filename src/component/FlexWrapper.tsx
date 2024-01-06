import styled from 'styled-components';

type FlexWrapperPropsType = {
    direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
    align?: string
    justify?: string
    wrap?: string
    gap?: string
    max_width?: string
    width?: string
    border_bottom?: string
    padding_bottom?:string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    max-width: ${props => props.max_width || ''};
    width: ${props => props.width || ''};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || ''};
    align-items: ${props => props.align || ''};
    flex-wrap: ${props => props.wrap || ''};
    gap: ${props => props.gap || ''};
    border-bottom: ${props => props.border_bottom || ''};
    padding-bottom: ${props => props.padding_bottom || ''};
`