import React, { useState } from 'react';
import { FixContainer, Container, SubContainer } from './Container';
import CloseIcon from '@material-ui/icons/Close';
import { StyledIconButton } from './Button';
import { Button } from '@material-ui/core';
import { Alert } from './Alert';

//#region LogoutFloatCard樣式
const logoutFixContainerTheme = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    left: '0rem',
    top: "0rem",
    bottom: 0,
    //overflowY: 'scroll',
    //overflowX: 'scroll',
    backgroundColor: '#40404080',
    zIndex: 100,
}

const logoutContainerTheme = {
    direction: "row",
    justify: "center",
    height: "100%",
    alignItems: "center"
}

const logoutCardSubContainerTheme = {
    width: "25rem",
    //height: "100%",
    boxShadow: "0 2px 12px 0 #0000001a",
    backgroundColor: "#fff",
    borderRadius: "4px",
    border: "1px solid #ebeef5"
}

const logoutCardTitleTheme = {

    direction: "row",
    justify: "space-between",
    height: "3rem",
    alignItems: "center"
}

const logoutCardContentTheme = {

    direction: "row",
    justify: "flex-start",
    height: "3rem",
    alignItems: "center"
}

const logoutCardButtonTheme = {

    direction: "row",
    justify: "flex-end",
    height: "3rem",
    alignItems: "center"
}
//#endregion

export const LogoutFloatCard = (props) => {

    return (
        <>
            <FixContainer theme={props?.logoutFixContainerTheme ?? logoutFixContainerTheme} onClick={props?.switchs?.Close ?? null}>
                <Container theme={props?.logoutContainerTheme ?? logoutContainerTheme}>
                    <SubContainer onClick={(e) => { e.stopPropagation(); }}
                        theme={props?.logoutCardSubContainerTheme ?? logoutCardSubContainerTheme}>
                        <Container theme={props?.logoutCardTitleTheme ?? logoutCardTitleTheme}>
                            <SubContainer theme={{ padding: "0 0 0 .5rem", color: "#b1b3b7" }}>
                                提示
                            </SubContainer>
                            <SubContainer >
                                <StyledIconButton theme={{ color: "#b1b3b7" }} onClick={props?.switchs?.Close ?? null}>
                                    <CloseIcon />
                                </StyledIconButton>
                            </SubContainer>
                        </Container>

                        <Container theme={props?.logoutCardContentTheme ?? logoutCardContentTheme}>
                            <SubContainer theme={{ padding: "0 0 0 1rem", color: "#606266" }}>
                                確認退出嗎?
                            </SubContainer>
                        </Container>

                        <Container theme={props?.logoutCardButtonTheme ?? logoutCardButtonTheme}>
                            <SubContainer >
                                <Button style={{ margin: "0 1rem 0 0", border: "1px solid #dcdfe6", color: "#606266" }} onClick={props?.no ?? null} >
                                    取消
                                </Button>

                                <Button style={{ margin: "0 1rem 0 0", color: "#fff", backgroundColor: "#409eff" }} onClick={props?.yes ?? null} >
                                    確認
                                </Button>
                            </SubContainer>
                        </Container>
                    </SubContainer>
                </Container>
            </FixContainer>
        </>
    )
}

//#region AlertFloatCard 樣式
const alertFixContainerTheme = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    left: '0rem',
    top: "0rem",
    bottom: 0,
    //overflowY: 'scroll',
    //overflowX: 'scroll',
    backgroundColor: '#40404080',
    zIndex: 100,
}

const alertContainerTheme = {
    direction: "row",
    justify: "flex-end",
    height: "100%",
    alignItems: "stretch",
    padding: "4rem 0 0 0"
}

const alertCardSubContainerTheme = {
    width: "13.5rem",
    //height: "100%",
    boxShadow: "0 2px 12px 0 #0000001a",
    backgroundColor: "#fff",
    borderRadius: "4px",
    border: "1px solid #ebeef5"
}

const alertCardTitleTheme = {

    direction: "row",
    justify: "space-between",
    height: "3rem",
    alignItems: "center"
}

const alertCardContentTheme = {

    direction: "row",
    justify: "flex-start",
    height: "3rem",
    alignItems: "center"
}

//#endregion

/* 
   Date   : 2020-06-07 13:17:28
   Author : Arhua Ho
   Content: Alert有五種樣式，透過level設置，level={ "debug" || "info" || "warn" || "error" || "fatal" }
*/
export const AlertFloatCard = (props) => {

    return (
        <>
            <FixContainer theme={props?.alertFixContainerTheme ?? alertFixContainerTheme} onClick={props?.switchs?.Close ?? null}>
                <Container theme={props?.alertContainerTheme ?? alertContainerTheme}>
                    <SubContainer onClick={(e) => { e.stopPropagation(); }}
                        theme={props?.alertCardSubContainerTheme ?? alertCardSubContainerTheme}>
                        <Container theme={props?.alertCardTitleTheme ?? alertCardTitleTheme}>
                            <SubContainer theme={{ padding: "0 0 0 .5rem", color: "#b1b3b7" }}>
                                {props.title}
                            </SubContainer>
                            <SubContainer >
                                <StyledIconButton theme={{ color: "#b1b3b7" }} onClick={props?.switchs?.Close ?? null}>
                                    <CloseIcon />
                                </StyledIconButton>
                            </SubContainer>
                        </Container>

                        {/* 遍歷訊息 */}
                        <Container theme={props?.alertCardContentTheme ?? alertCardContentTheme}>
                            {props.alerts.map((item, index) => {
                                return (
                                    <SubContainer key={index} theme={{ occupy: 12, padding: "0 1rem 0", color: "#606266" }}>
                                        <Alert item={item} />
                                    </SubContainer>
                                )
                            })}
                        </Container>

                    </SubContainer>
                </Container>
            </FixContainer>
        </>
    )
}