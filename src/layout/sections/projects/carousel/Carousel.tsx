import React from 'react';
import {CardListData} from '../cart-list/CardListData';
import {Icon} from '../../../../component/icon/Icon';
import {
    BoxLink,
    CardDescr,
    CardStyled,
    CardText,
    CardTitle,
    LinkSection,
    Image
} from '../cart-list/CartListStyle';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const items = CardListData.map((value) => (
    <div key={value.id} className="keen-slider__slide">
        <CardStyled>
            <Image src={value.image}/>
            <CardTitle>{value.title}</CardTitle>
            <CardText>{value.description}</CardText>
            <CardDescr>
                <span>Tech stack : </span>{value.techStack}
            </CardDescr>
            <BoxLink>
                <LinkSection>
                    <Icon iconId={'link_dark'} height={20} width={20}/>
                    <a href={value.srcUrl}>Live Preview</a>
                </LinkSection>
                <LinkSection>
                    <Icon iconId={'github_3_dark'} height={20} width={20}/>
                    <a href={value.srcGit}>View Code</a>
                </LinkSection>
            </BoxLink>
        </CardStyled>
    </div>
));

export const Carousel = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        rtl: true,
        slides: {
            perView: 3,
            spacing: 10,
        },
        breakpoints: {
            '(max-width: 110px)': {
                slides: {
                    perView: 2,
                    spacing: 10,
                },
            },
            '(max-width: 780px)': {
                slides: {
                    perView: 1,
                    spacing: 10,
                },
            },
        }
    })
    return<div ref={ref} className="keen-slider">{items}</div>
}

