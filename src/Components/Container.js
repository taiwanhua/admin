import styled from 'styled-components'
import { mediaQuery } from './MediaQuery';

/* 
   Date   : 2020-05-18 15:07:21
   Author : Arhua Ho
   Content: 作為Flex外層容器組件使用
*/
export const Container = styled.div.attrs((props) => ({}))`
    //Flex設置
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex-direction: ${props => props?.theme?.direction ?? 'initial'}; //控制子組件排列方向: row、row-reverse、column、column-reverse
    justify-content: ${props => props?.theme?.justify ?? 'initial'};  //控制子組件在水平方向上的對齊: flex-start、center、flex-end、space-between、space-around、space-evenly
    align-items: ${props => props?.theme?.alignItems ?? 'initial'};   //控制子組件在垂直方向上的對齊: flex-start、center、flex-end、stretch、baseline

    //常用屬性
    position: ${props => props?.theme?.position ?? 'initial'};        //控制position屬性: static、relative、fixed、absolute、sticky、inherit、initial
    padding: ${props => props?.theme?.padding ?? 'initial'};
    height: ${props => props?.theme?.height ?? 'initial'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'initial'};
    background-image: ${props => 'url(' + props?.theme?.img + ')' ?? 'initial'};
    background-position: ${props => props?.theme?.backgroundPosition ?? 'initial'};
    background-position-y: ${props => props?.theme?.positiony ?? 'initial'};
    background-position-x: ${props => props?.theme?.positionx ?? 'initial'};
    background-repeat: ${props => props?.theme?.backgroundRepeat ?? 'initial'};
    background-size: ${props => props?.theme?.backgroundSize ?? 'initial'};
    background-attachment: ${props => props?.theme?.attachment ?? 'initial'};
    min-width: ${props => props?.theme?.minWidth ?? 'initial'};
    box-shadow: ${props => props?.theme?.boxShadow ?? 'initial'};
    margin: ${props => props?.theme?.margin ?? 'initial'};
    overflow-y: ${props => props?.theme?.overflowY ?? 'initial'};
    overflow-x: ${props => props?.theme?.overflowX ?? 'initial'};

    //滾動條美化
    ::-webkit-scrollbar {
        width: 0.5em;
        }
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        margin:0px 0.1rem 5px 0;
        }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: ${props => props?.theme?.scrollBarColor ?? '#9093994d'};
        }

    @media ${mediaQuery.tablet} { 
        max-width: ${props => props?.theme?.tablet?.occupy ? props.theme.tablet.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'initial')};                  
        flex-basis: ${props => props?.theme?.tablet?.occupy ? props.theme.tablet.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'initial')};
        padding: ${props => props?.theme?.tablet?.padding ? props.theme.tablet.padding : (props?.theme?.padding ?? 'initial')};
        background-color: ${props => props?.theme?.tablet?.backgroundColor ? props.theme.tablet.backgroundColor : (props?.theme?.backgroundColor ?? 'initial')};
        height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? 'initial')};
        width: ${props => props?.theme?.tablet?.width ? props.theme.tablet.width : (props?.theme?.width ?? 'initial')}; 
        margin: ${props => props?.theme?.tablet?.margin ? props.theme.tablet.margin : (props?.theme?.margin ?? 'initial')}; 
        min-width: ${props => props?.theme?.tablet?.minWidth ? props.theme.tablet.minWidth : (props?.theme?.minWidth ?? 'initial')}; 

        background-attachment: ${props => props?.theme?.tablet?.backgroundAttachment ? props.theme.tablet.backgroundAttachment : (props?.theme?.backgroundAttachment ?? 'initial')}; 
        background-image: ${props => props?.theme?.tablet?.img ? 'url(' + props.theme.tablet.img + ')' : (props?.theme?.img ?? 'initial')}; 
        background-position: ${props => props?.theme?.tablet?.backgroundPosition ? props.theme.tablet.backgroundPosition : (props?.theme?.backgroundPosition ?? 'initial')};
        background-position-y: ${props => props?.theme?.tablet?.positiony ? props.theme.tablet.positiony : (props?.theme?.positiony ?? 'initial')};
        background-position-x: ${props => props?.theme?.tablet?.positionx ? props.theme.tablet.positionx : (props?.theme?.positionx ?? 'initial')};
        background-repeat: ${props => props?.theme?.tablet?.backgroundRepeat ? props.theme.tablet.backgroundRepeat : (props?.theme?.backgroundRepeat ?? 'initial')};
        background-size: ${props => props?.theme?.tablet?.backgroundSize ? props.theme.tablet.backgroundSize : (props?.theme?.backgroundSize ?? 'initial')};
        border-top: ${props => props?.theme?.tablet?.borderTop ? props.theme.tablet.borderTop : (props?.theme?.borderTop ?? 'initial')};
        overflow-y: ${props => props?.theme?.tablet?.overflowY ? props.theme.tablet.overflowY : (props?.theme?.overflowY ?? 'initial')};
        overflow-x: ${props => props?.theme?.tablet?.overflowX ? props.theme.tablet.overflowX : (props?.theme?.overflowX ?? 'initial')};
    }
    
`

/* 
   Date   : 2020-05-18 15:07:21
   Author : Arhua Ho
   Content: 作為Flex次層容器組件使用，
            選用斷點:
                tablet: '768px'
*/
export const SubContainer = styled.div.attrs((props) => ({}))`

    //Flex設置
    flex-grow: 0;
    max-width: ${props => props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'initial'};                  
    flex-basis: ${props => props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'initial'};
    box-sizing: border-box;

    //固定屬性
    height: ${props => props?.theme?.height ?? 'initial'}; 
    line-height: ${props => props?.theme?.height ?? 'initial'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'initial'};
    padding: ${props => props?.theme?.padding ?? 'initial'}; 
    cursor: ${props => props?.theme?.cursor ?? 'initial'}; 
    margin: ${props => props?.theme?.margin ?? 'initial'}; 
    transition: ${props => props?.theme?.transition ?? 'initial'}; 
 
    
    //常用屬性
    text-align: ${props => props?.theme?.textAlign ?? 'initial'}; 
    font-size: ${props => props?.theme?.fontSize ?? 'initial'}; 
    color: ${props => props?.theme?.color ?? 'initial'}; 
    width: ${props => props?.theme?.width ?? 'initial'}; 
    background-attachment: ${props => props?.theme?.backgroundAttachment ?? 'initial'}; 
    background-image: ${props => 'url(' + props?.theme?.img + ')' ?? 'initial'};
    background-position: ${props => props?.theme?.backgroundPosition ?? 'initial'};
    background-position-y: ${props => props?.theme?.positiony ?? 'initial'};
    background-position-x: ${props => props?.theme?.positionx ?? 'initial'};
    background-repeat: ${props => props?.theme?.backgroundRepeat ?? 'initial'};
    background-size: ${props => props?.theme?.backgroundSize ?? 'initial'};
    border: ${props => props?.theme?.border ?? 'initial'};
    border-top: ${props => props?.theme?.borderTop ?? 'initial'};
    overflow-y: ${props => props?.theme?.overflowY ?? 'initial'};
    overflow-x: ${props => props?.theme?.overflowX ?? 'initial'};
    box-shadow: ${props => props?.theme?.boxShadow ?? 'initial'};
    border-radius: ${props => props?.theme?.borderRadius ?? 'initial'};


    //滾動條美化
    ::-webkit-scrollbar {
        width: 0.5em;
        }
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        margin:0px 0.1rem 5px 0;
        }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: #9093994d;
        }

    @media ${mediaQuery.tablet} { 
        line-height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? 'initial')};
        max-width: ${props => props?.theme?.tablet?.occupy ? props.theme.tablet.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'initial')};                  
        flex-basis: ${props => props?.theme?.tablet?.occupy ? props.theme.tablet.occupy * 100 / 12 + '%' : (props?.theme?.occupy ? props.theme.occupy * 100 / 12 + '%' : props?.theme?.occupy ?? 'initial')};
        padding: ${props => props?.theme?.tablet?.padding ? props.theme.tablet.padding : (props?.theme?.padding ?? 'initial')};
        background-color: ${props => props?.theme?.tablet?.backgroundColor ? props.theme.tablet.backgroundColor : (props?.theme?.backgroundColor ?? 'initial')};
        height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? 'initial')};
        width: ${props => props?.theme?.tablet?.width ? props.theme.tablet.width : (props?.theme?.width ?? 'initial')}; 
        margin: ${props => props?.theme?.tablet?.margin ? props.theme.tablet.margin : (props?.theme?.margin ?? 'initial')}; 

        background-attachment: ${props => props?.theme?.tablet?.backgroundAttachment ? props.theme.tablet.backgroundAttachment : (props?.theme?.backgroundAttachment ?? 'initial')}; 
        background-image: ${props => props?.theme?.tablet?.img ? 'url(' + props.theme.tablet.img + ')' : (props?.theme?.img ?? 'initial')}; 
        background-position: ${props => props?.theme?.tablet?.backgroundPosition ? props.theme.tablet.backgroundPosition : (props?.theme?.backgroundPosition ?? 'initial')};
        background-position-y: ${props => props?.theme?.tablet?.positiony ? props.theme.tablet.positiony : (props?.theme?.positiony ?? 'initial')};
        background-position-x: ${props => props?.theme?.tablet?.positionx ? props.theme.tablet.positionx : (props?.theme?.positionx ?? 'initial')};
        background-repeat: ${props => props?.theme?.tablet?.backgroundRepeat ? props.theme.tablet.backgroundRepeat : (props?.theme?.backgroundRepeat ?? 'initial')};
        background-size: ${props => props?.theme?.tablet?.backgroundSize ? props.theme.tablet.backgroundSize : (props?.theme?.backgroundSize ?? 'initial')};
        border-top: ${props => props?.theme?.tablet?.borderTop ? props.theme.tablet.borderTop : (props?.theme?.borderTop ?? 'initial')};
        overflow-y: ${props => props?.theme?.tablet?.overflowY ? props.theme.tablet.overflowY : (props?.theme?.overflowY ?? 'initial')};
        overflow-x: ${props => props?.theme?.tablet?.overflowX ? props.theme.tablet.overflowX : (props?.theme?.overflowX ?? 'initial')};
        box-shadow: ${props => props?.theme?.tablet?.boxShadow ? props.theme.tablet.boxShadow : (props?.theme?.boxShadow ?? 'initial')};
        border-radius: ${props => props?.theme?.tablet?.borderRadius ? props.theme.tablet.borderRadius : (props?.theme?.borderRadius ?? 'initial')};
    }

`

/* 
   Date   : 2020-05-18 15:07:21
   Author : Arhua Ho
   Content: 作為固定容器組件使用，
            選用斷點:
                tablet: '768px'
*/
export const FixContainer = styled.div.attrs((props) => ({}))`

    //固定屬性
    
    position: fixed;

    height: ${props => props?.theme?.height ?? '100%'}; 
    top: ${props => props?.theme?.top ?? 'initial'};
    left: ${props => props?.theme?.left ?? 'initial'};
    bottom: ${props => props?.theme?.bottom ?? 'initial'};
    width: ${props => props?.theme?.width ?? 'initial'};
    background-color: ${props => props?.theme?.backgroundColor ?? 'initial'};
    overflow-y: ${props => props?.theme?.overflowY ?? 'initial'};
    overflow-x: ${props => props?.theme?.overflowX ?? 'initial'};

    padding: ${props => props?.theme?.padding ?? '#$'};
    z-index: ${props => props?.theme?.zIndex ?? 'initial'};
    white-space : ${props => props?.theme?.whiteSpace ?? 'initial'};
    min-width: 0; //修復 x 方向

    //滾動條美化
    ::-webkit-scrollbar {
        width: 0.5em;
        height: ${props => props?.theme?.scrollHeight ?? 'initial'}; 
        }
    ::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        margin:0px 0.1rem 5px 0;
        }
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: ${props => props?.theme?.scrollUnhoverBackgroundColor ?? '#9093994d'};
        }

    &:hover::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: #9093994d;
        }

    @media ${mediaQuery.tablet} { 

        height: ${props => props?.theme?.tablet?.height ? props.theme.tablet.height : (props?.theme?.height ?? 'initial')};
        top: ${props => props?.theme?.tablet?.top ? props.theme.tablet.top : (props?.theme?.top ?? 'initial')};
        left: ${props => props?.theme?.tablet?.left ? props.theme.tablet.left : (props?.theme?.left ?? 'initial')};
        bottom: ${props => props?.theme?.tablet?.bottom ? props.theme.tablet.bottom : (props?.theme?.bottom ?? 'initial')};
        width: ${props => props?.theme?.tablet?.width ? props.theme.tablet.width : (props?.theme?.width ?? 'initial')};
        background-color: ${props => props?.theme?.tablet?.backgroundColor ? props.theme.tablet.backgroundColor : (props?.theme?.backgroundColor ?? 'initial')};
        overflow-y: ${props => props?.theme?.tablet?.overflowY ? props.theme.tablet.overflowY : (props?.theme?.overflowY ?? 'initial')};
        overflow-x: ${props => props?.theme?.tablet?.overflowX ? props.theme.tablet.overflowX : (props?.theme?.overflowX ?? 'initial')};
    }

`