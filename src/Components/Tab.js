import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelIcon from '@material-ui/icons/Cancel';
import { StyledIconButton } from './Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const TabBase = (props) => {

    const [Enter, setEnter] = useState(false);

    return (
        <>

            <span className={props.className} onClick={props.tabOnClick}>
                {props.text}
                <StyledIconButton theme={{
                    position: "relative",
                    right: "-.9rem",
                    top: "-.1rem",
                    padding: 0,
                    height: "0.8rem",
                    width: "0.8rem",
                }} onMouseLeave={() => { setEnter(false) }}
                    onMouseEnter={() => { setEnter(true) }}
                    onClick={props.cancleOnClick}
                >

                    {!props.cancleHide && (Enter ? (
                        <CancelIcon style={{
                            height: "0.8rem",
                            width: "0.8rem",
                            color: "#f56c6c",
                        }}></CancelIcon>
                    ) : (
                            <HighlightOffIcon

                                style={{
                                    height: "0.8rem",
                                    width: "0.8rem",
                                    color: "#f56c6c",
                                }}></HighlightOffIcon>
                        ))}
                </StyledIconButton>
                {props.active &&
                    <StyledIconButton theme={{
                        position: "relative",
                        right: `${(props.text.length * 0.8 + 1.45) + 'rem'}`,
                        top: "-.1rem",
                        padding: 0,
                        height: "0.6rem",
                        width: "0.6rem",
                    }} >
                        <FiberManualRecordIcon style={{
                            height: "0.6rem",
                            width: "0.6rem",
                            color: "#f56c6c",
                        }} />
                    </StyledIconButton>
                }
                {props.children}

            </span>
        </>
    )
}


export const Tab = styled(TabBase).attrs((props) => ({}))`

    border: ${props => props?.theme?.border ?? 'initial'}; 
    color: ${props => props?.theme?.color ?? 'initial'}; 
    background-color: ${props => props?.theme?.backgroundColor ?? 'initial'}; 
    font-size: ${props => props?.theme?.fontSize ?? 'initial'}; 
    height: ${props => props?.theme?.height ?? 'initial'}; 
    line-height: ${props => props?.theme?.height ?? 'initial'}; 
    width: ${props => props?.text ? (props.text.length * 0.8 + 3) + 'rem' : "3rem"};
    display: ${props => props?.theme?.display ?? 'initial'}; 
    text-align: ${props => props?.theme?.textAlign ?? 'initial'}; 
    margin: ${props => props?.theme?.margin ?? 'initial'}; 
    cursor: pointer;

`