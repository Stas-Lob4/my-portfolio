import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styled/Theme";
import {Icon} from "../../../../component/icon/Icon";
import {CardListData} from "./CardListData";

export const CartList = () => {
    return (
        <StyledCarts>
            {CardListData.map((value) => {
                return (
                    <CartStyled key={value.id}>
                        <Image src={value.image}/>
                        <CartTitle>{value.title}</CartTitle>
                        <CartText>{value.description}</CartText>
                        <CartDescr>
                            <span>Tech stack : </span>{value.techStack}
                        </CartDescr>
                        <BoxLink>
                            <LinkSection>
                                <Icon iconId={"link_dark"} height={20} width={20}/>
                                <a href={value.srcUrl}>Live Preview</a>
                            </LinkSection>
                            <LinkSection>
                                <Icon iconId={"github_3_dark"} height={20} width={20}/>
                                <a href={value.srcGit}>View Code</a>
                            </LinkSection>
                        </BoxLink>
                    </CartStyled>
                )
            })}
        </StyledCarts>
    );
};


const StyledCarts = styled.div`
  margin-top: 99px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc((100vw - 320px) / (1920 - 320) * (35 - 20) + 20px);
  @media ${Theme.media.tablet}{
    margin-top: 40px;
  }
  @media ${Theme.media.mobile}{
    margin-top: 30px;
  }
  
`

const CartStyled = styled.div`
  width: 375px;
  height: 567px;
  border-radius: 20px;
  background: #363636;
  @media ${Theme.media.mobile}{
    width: 300px;
    height: 500px;
  }
`


const Image = styled.img`
  width: 375px;
  height: 260px;
  border-radius: 20px 20px 0px 0px;
  @media ${Theme.media.mobile}{
    height: 240px;
    width: 300px;
  }
`


const CartTitle = styled.h4`
  margin-top: 27px;
  margin-left: 28px;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  @media ${Theme.media.mobile}{
    margin-top: 25px;
    font-size: 24px;
    margin-left: 20px;
  }
`
const CartText = styled.p`
  margin-top: 17px;
  margin-left: 28px;
  width: 314px;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height:  24px;
  @media ${Theme.media.mobile}{
    width: 280px;
    margin-top: 15px;
    line-height: 23px;
    font-size: 14px;
    margin-left: 20px;
  }
`

const CartDescr = styled.p`
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
  margin-top: 17px;
  margin-left: 28px;
  font-size: calc((100vw - 320px) / (1920 - 320) * (14 - 12) + 12px);
  font-style: normal;
  font-weight: 300;
  @media ${Theme.media.mobile}{
    span {
      font-size: 14px;
    }
    margin-left: 20px;    
  }
`

const BoxLink = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const LinkSection = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  a{
    color: #FFF;
    font-size: calc((100vw - 320px) / (1920 - 320) * (16 - 14) + 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    :hover{
      text-decoration-line: underline;
    }
  }
`