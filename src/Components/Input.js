import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import { StyledIconButton } from './Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

/* 
   Date   : 2020-06-04 18:07:25
   Author : Arhua Ho
   Content: 輸入框基底
*/
const InputBase = (props) => {
    //console.log(props)
    const [PassVisible, setPassVisible] = useState(false);
    const ref = useRef();
    return (
        <>
            <div className={props.className} >
                <input ref={ref} type={props.pass ? (PassVisible ? "text" : "password") : "text"} value={props.value} onChange={props.onChange} />
                <br />
                {props.pass && (
                    <>
                        <StyledIconButton
                            onClick={() => { ref.current.focus(); setPassVisible(!PassVisible); }}
                            theme={{ position: "relative", top: `calc( -${props.theme.height} - .25rem )`, left: `calc( ${props.theme.width} - 2.75rem)`, color: "#606266" }}
                        >
                            {PassVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </StyledIconButton>
                        <br />
                    </>
                )}
                <span className={`regSpan`}>{props.regExpResult}</span>
                {props.children}
            </div>
        </>
    )
}

/* 
   Date   : 2020-06-04 18:07:46
   Author : Arhua Ho
   Content: 輸入框，具一般輸入、顯示/隱藏密碼功能
*/
export const Input = styled(InputBase).attrs((props) => ({}))`
    //固定屬性
    height: ${props => props?.theme?.height ?? 'unset'}; 
    width: ${props => props?.theme?.width ?? 'unset'}; 
    line-height: ${props => props?.theme?.height ?? 'unset'};
    padding: .2rem 0 1rem 0;

    input {
        height: ${props => props?.theme?.height ? `calc( ${props.theme.height} - .8rem )` : 'unset'}; 
        line-height: ${props => props?.theme?.height ? `calc( ${props.theme.height} - .8rem )` : 'unset'}; 
        width: ${props => props?.theme?.width ? `calc( ${props.theme.width} - .5rem )` : 'unset'}; 
        font-size: ${props => props?.theme?.height ? `calc( ${props.theme.height} * 0.45 )` : 'unset'}; 
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        color: #606266;

        &:focus {
            outline: 1px solid #409eff;
        }
    }

    .regSpan {
        font-size: ${props => props?.theme?.height ? `calc( ${props.theme.height} * 0.25 )` : 'unset'}; 
        color: #ff6347;
        position: relative;
        left: .3rem;
        top: ${props => props?.theme?.height ? `calc( ${props.theme.height} * -0.35 ${props.pass ? '- 3rem ' : ""})` : 'unset'}; 
    }
`


