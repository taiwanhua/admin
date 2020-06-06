import styled from 'styled-components'
import { mediaQuery } from './MediaQuery';

/* 
   Date   : 2020-05-18 15:07:21
   Author : Arhua Ho
   Content: P標籤組件
*/
export const P = styled.p.attrs((props) => ({

}))`

    //常用屬性
    font-size: ${props => props?.theme?.fontSize ?? '2rem'};
    color: ${props => props?.theme?.color ?? '#191919'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'initial'};
    line-height: ${props => props?.theme?.height ?? '2.2rem'};
    height: ${props => props?.theme?.height ?? '2.2rem'};
    width: ${props => props?.theme?.width ?? 'initial'};
    font-family: ${props => props?.theme?.fontFamily ?? 'Impact'};
    padding: ${props => props?.theme?.padding ?? 'initial'}; 
    transition: background-color 1s ease, color 1s ease;
    text-align: ${props => props?.theme?.textAlign ?? 'center'}; 

    margin-block-start:${props => props?.theme?.resetSE ? '0rem' : '1em'}; 
    margin-block-end: ${props => props?.theme?.resetSE ? '0rem' : '1em'}; 

    @media ${mediaQuery.tablet} { 
        
        font-size: ${props => props?.theme?.tablet?.fontSize ? props.theme.tablet.fontSize : (props?.theme?.fontSize ?? '2rem')};
        color: ${props => props?.theme?.tablet?.color ? props.theme.tablet.color : (props?.theme?.color ?? '#191919')};
        background-color: ${props => props?.theme?.tablet?.backgroundColor ? props.theme.tablet.backgroundColor : (props?.theme?.backgroundColor ?? 'initial')};
        line-height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? '2.2rem')};
        height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? '2.2rem')};
        width: ${props => props?.theme?.tablet?.width ? props.theme.tablet.width : (props?.theme?.width ?? 'initial')};
        font-family: ${props => props?.theme?.tablet?.fontFamily ? props.theme.tablet.fontFamily : (props?.theme?.fontFamily ?? 'Impact')};
        padding: ${props => props?.theme?.tablet?.padding ? props.theme.tablet.padding : (props?.theme?.padding ?? 'initial')};
        transition: background-color 1s ease, color 1s ease;
        text-align: ${props => props?.theme?.tablet?.textAlign ? props.theme.tablet.textAlign : (props?.theme?.textAlign ?? 'center')};
    }


`

export const H6 = styled.h6.attrs((props) => ({

}))`

    // //常用屬性
    display: ${props => props?.theme?.display ?? 'initial'};
    font-size: ${props => props?.theme?.fontSize ?? '1.25rem'};
    font-family: ${props => props?.theme?.fontFamily ?? '"Roboto", "Helvetica", "Arial", sans-serif'};
    font-weight: ${props => props?.theme?.fontWeight ?? '500'};
    letter-spacing: ${props => props?.theme?.letterSpacing ?? '0.0075em'};
    margin: ${props => props?.theme?.margin ?? '0'};
    color: ${props => props?.theme?.color ?? 'initial'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'initial'};
    line-height: ${props => props?.theme?.height ?? '1.6'};
    height: ${props => props?.theme?.height ?? 'initial'};
    width: ${props => props?.theme?.width ?? 'initial'};
    padding: ${props => props?.theme?.padding ?? 'initial'}; 
    transition: background-color 1s ease, color 1s ease;
    text-align: ${props => props?.theme?.textAlign ?? 'center'}; 
    border-right: ${props => props?.theme?.borderRight ?? 'initial'}; 
    overflow-x: ${props => props?.theme?.overflowX ?? 'initial'}; 
    cursor: ${props => props?.theme?.cursor ?? 'initial'}; 

    // margin-block-start:${props => props?.theme?.resetSE ? '0rem' : '1em'}; 
    // margin-block-end: ${props => props?.theme?.resetSE ? '0rem' : '1em'}; 

    @media ${mediaQuery.tablet} { 

        display: ${props => props?.theme?.tablet?.display ? props.theme.tablet.display : (props?.theme?.display ?? 'initial')};
        font-size: ${props => props?.theme?.tablet?.fontSize ? props.theme.tablet.fontSize : (props?.theme?.fontSize ?? '1.25rem')};
        font-family: ${props => props?.theme?.tablet?.fontFamily ? props.theme.tablet.fontFamily : (props?.theme?.fontFamily ?? '"Roboto", "Helvetica", "Arial", sans-serif')};
        font-weight: ${props => props?.theme?.tablet?.fontWeight ? props.theme.tablet.fontWeight : (props?.theme?.fontWeight ?? '500')};
        letter-spacing: ${props => props?.theme?.tablet?.letterSpacing ? props.theme.tablet.letterSpacing : (props?.theme?.letterSpacing ?? '0.0075em')};
        margin: ${props => props?.theme?.tablet?.margin ? props.theme.tablet.margin : (props?.theme?.margin ?? '0.0075em')};
        color: ${props => props?.theme?.tablet?.color ? props.theme.tablet.color : (props?.theme?.color ?? 'initial')};
        background-color: ${props => props?.theme?.tablet?.backgroundColor ? props.theme.tablet.backgroundColor : (props?.theme?.backgroundColor ?? 'initial')};
        line-height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? '1.6')};
        height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? 'initial')};
        width: ${props => props?.theme?.tablet?.width ? props.theme.tablet.width : (props?.theme?.width ?? 'initial')};
        padding: ${props => props?.theme?.tablet?.padding ? props.theme.tablet.padding : (props?.theme?.padding ?? 'initial')};
        transition: background-color 1s ease, color 1s ease;
        text-align: ${props => props?.theme?.tablet?.textAlign ? props.theme.tablet.textAlign : (props?.theme?.textAlign ?? 'center')};
        border-right: ${props => props?.theme?.tablet?.borderRight ? props.theme.tablet.borderRight : (props?.theme?.borderRight ?? 'center')};
        overflow-x: ${props => props?.theme?.tablet?.overflowX ? props.theme.tablet.overflowX : (props?.theme?.overflowX ?? 'center')};
        cursor: ${props => props?.theme?.tablet?.cursor ? props.theme.tablet.cursor : (props?.theme?.cursor ?? 'initial')};
    }


`