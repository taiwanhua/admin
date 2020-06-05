import React, { useContext } from 'react';
import styled from 'styled-components';
import { mediaQuery } from './MediaQuery';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


export const Ul = styled.ul.attrs((props) => ({}))`

    //基本屬性
    display: ${props => props?.theme?.display ?? 'block'};
    list-style-type: ${props => props?.theme?.listStyleType ?? '#@$'};
    margin-block-start: ${props => props?.theme?.marginBlockStart ?? '#@$'};
    margin-block-end: ${props => props?.theme?.marginBlockEnd ?? '#@$'};
    margin-inline-start: ${props => props?.theme?.marginInlineStart ?? '#@$'};
    margin-inline-end: ${props => props?.theme?.marginInlineEnd ?? '#@$'};
    padding-inline-start: ${props => props?.theme?.paddingInlineStart ?? '#@$'};

    position: ${props => props?.theme?.position ?? '#@$'}; 
    top: ${props => props?.theme?.top ?? '#@$'};
    background-color: ${props => props?.theme?.backgroundColor ?? '#@$'};
    left: ${props => props?.theme?.left ?? '#@$'};
    right: ${props => props?.theme?.right ?? '#@$'};
    z-index: ${props => props?.theme?.zIndex ?? '#@$'};
    width: ${props => props?.theme?.width ?? '#@$'};
    border-radius: ${props => props?.theme?.borderRadius ?? '#@$'};
    border: ${props => props?.theme?.border ?? '#@$'};
    box-shadow: ${props => props?.theme?.boxShadow ?? '#@$'};

    @media ${mediaQuery.tablet} { 
        display: ${props => props?.theme?.tablet?.display ? props.theme.tablet.display : (props?.theme?.display ?? 'block')};
        list-style-type: ${props => props?.theme?.tablet?.listStyleType ? props.theme.tablet.listStyleType : (props?.theme?.listStyleType ?? '#@$')};
        margin-block-start: ${props => props?.theme?.tablet?.marginBlockStart ? props.theme.tablet.marginBlockStart : (props?.theme?.marginBlockStart ?? '#@$')};
        margin-block-end: ${props => props?.theme?.tablet?.marginBlockEnd ? props.theme.tablet.marginBlockEnd : (props?.theme?.marginBlockEnd ?? '#@$')};
        margin-inline-start: ${props => props?.theme?.tablet?.marginInlineStart ? props.theme.tablet.marginInlineStart : (props?.theme?.marginInlineStart ?? '#@$')};
        margin-inline-end: ${props => props?.theme?.tablet?.marginInlineEnd ? props.theme.tablet.marginInlineEnd : (props?.theme?.marginInlineEnd ?? '#@$')};
        padding-inline-start: ${props => props?.theme?.tablet?.paddingInlineStart ? props.theme.tablet.paddingInlineStart : (props?.theme?.paddingInlineStart ?? '#@$')};
        width: ${props => props?.theme?.tablet?.width ? props.theme.tablet.width : (props?.theme?.width ?? '#@$')};

        position: ${props => props?.theme?.tablet?.position ? props.theme.tablet.position : (props?.theme?.position ?? '#@$')};
        top: ${props => props?.theme?.tablet?.top ? props.theme.tablet.top : (props?.theme?.top ?? '#@$')};
        background-color: ${props => props?.theme?.tablet?.backgroundColor ? props.theme.tablet.backgroundColor : (props?.theme?.backgroundColor ?? '#@$')};
        left: ${props => props?.theme?.tablet?.left ? props.theme.tablet.left : (props?.theme?.left ?? '#@$')};
        right: ${props => props?.theme?.tablet?.right ? props.theme.tablet.right : (props?.theme?.right ?? '#@$')};
        z-index: ${props => props?.theme?.tablet?.zIndex ? props.theme.tablet.zIndex : (props?.theme?.zIndex ?? '#@$')};
        border-radius: ${props => props?.theme?.tablet?.borderRadius ? props.theme.tablet.borderRadius : (props?.theme?.borderRadius ?? '#@$')};
        border: ${props => props?.theme?.tablet?.border ? props.theme.tablet.border : (props?.theme?.border ?? '#@$')};
        box-shadow: ${props => props?.theme?.tablet?.boxShadow ? props.theme.tablet.boxShadow : (props?.theme?.boxShadow ?? '#@$')};
    }
`

export const Li = styled.li.attrs((props) => ({}))`

    padding-left:  ${props => props?.theme?.paddingLeft ?? '#@$'};
    font-size:  ${props => props?.theme?.fontSize ?? '#@$'};
    color: ${props => props?.theme?.color ?? '#@$'};

    &:hover {
        color: ${props => props?.theme?.hoverColor ?? '#@$'};
    }

    @media ${mediaQuery.tablet} { 
        padding-left:  ${props => props?.theme?.tablet?.paddingLeft ? props.theme.tablet.paddingLeft : (props?.theme?.paddingLeft ?? '#@$')};
        font-size:  ${props => props?.theme?.tablet?.fontSize ? props.theme.tablet.fontSize : (props?.theme?.fontSize ?? '#@$')};  
        color: ${props => props?.theme?.tablet?.color ? props.theme.tablet.color : (props?.theme?.color ?? '#@$')};   

        &:hover {
            color: ${props => props?.theme?.tablet?.hoverColor ? props.theme.tablet.hoverColor : (props?.theme?.hoverColor ?? '#@$')};   
        }
    }
`




