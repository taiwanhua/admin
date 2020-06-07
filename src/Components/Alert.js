import React, { useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelIcon from '@material-ui/icons/Cancel';
import { StyledIconButton } from './Button';
//import styled from 'styled-components'

//#region Alert level Theme
const debug = {
    span: {
        position: "relative",
        margin: ".5rem 0",
        // height: "1.5rem",
        lineHeight: "1rem",
        width: "9.3rem",
        border: "#acd2f7 1px solid",
        display: "inline-block",
        fontSize: "0.75rem",
        color: "#409eff",
        borderRadius: "4px",
        backgroundColor: "#e2eefb",
        padding: "0 1.3rem 0 0.5rem"
    },
    cancleButton: {
        height: "0.8rem",
        width: "0.8rem",
        color: "#409eff"
    }
}

const info = {
    span: {
        position: "relative",
        margin: ".5rem 0",
        // height: "1.5rem",
        lineHeight: "1rem",
        width: "9.3rem",
        border: "#c4c4da 1px solid",
        display: "inline-block",
        fontSize: "0.75rem",
        color: "#909399",
        borderRadius: "4px",
        backgroundColor: "#e9e9ea",
        padding: "0 1.3rem 0 0.5rem"
    },
    cancleButton: {
        height: "0.8rem",
        width: "0.8rem",
        color: "#909399"
    }
}

const warn = {
    span: {
        position: "relative",
        margin: ".5rem 0",
        // height: "1.5rem",
        lineHeight: "1rem",
        width: "9.3rem",
        border: "#a7dc8d 1px solid",
        display: "inline-block",
        fontSize: "0.75rem",
        color: "#67c23a",
        borderRadius: "4px",
        backgroundColor: "#e6f2df",
        padding: "0 1.3rem 0 0.5rem"
    },
    cancleButton: {
        height: "0.8rem",
        width: "0.8rem",
        color: "#67c23a"
    }
}

const error = {
    span: {
        position: "relative",
        margin: ".5rem 0",
        // height: "1.5rem",
        lineHeight: "1rem",
        width: "9.3rem",
        border: "#efcc9a 1px solid",
        display: "inline-block",
        fontSize: "0.75rem",
        color: "#e6a23c",
        borderRadius: "4px",
        backgroundColor: "#fdf0de",
        padding: "0 1.3rem 0 0.5rem"
    },
    cancleButton: {
        height: "0.8rem",
        width: "0.8rem",
        color: "#e6a23c"
    }
}

const fatal = {
    span: {
        position: "relative",
        margin: ".5rem 0",
        // height: "1.5rem",
        lineHeight: "1rem",
        width: "9.3rem",
        border: "#f7c6c6 1px solid",
        display: "inline-block",
        fontSize: "0.75rem",
        color: "#f56c6c",
        borderRadius: "4px",
        backgroundColor: "#fde5e5",
        padding: "0 1.3rem 0 0.5rem"
    },
    cancleButton: {
        height: "0.8rem",
        width: "0.8rem",
        color: "#f56c6c"
    }
}
//#endregion

const returnLevelTheme = (level = "") => {
    switch (level) {
        case "debug":
            return debug;
        case "info":
            return info;
        case "warn":
            return warn;
        case "error":
            return error;
        case "fatal":
            return fatal;
        default:
            return debug;
    }
}

/* 
   Date   : 2020-06-07 14:34:34
   Author : Arhua Ho
   Content: 單個Alert組件
*/
export const Alert = ({ item }) => {

    const [Enter, setEnter] = useState(false);

    return (
        <>
            <span style={returnLevelTheme(item?.level)['span']}>
                {item?.text ?? ""}
                <StyledIconButton theme={{
                    position: "absolute",
                    top: ".12rem",
                    right: ".5rem",
                    margin: "0 0 0 1rem",
                    padding: 0,
                    height: "0.8rem",
                    width: "0.8rem",
                }} onMouseLeave={() => { setEnter(false) }}
                    onMouseEnter={() => { setEnter(true) }}
                >
                    {Enter ? (
                        <CancelIcon style={returnLevelTheme(item?.level)['cancleButton']}></CancelIcon>
                    ) : (
                            <HighlightOffIcon style={returnLevelTheme(item?.level)['cancleButton']}></HighlightOffIcon>
                        )}
                </StyledIconButton>
            </span>
        </>
    )
}
