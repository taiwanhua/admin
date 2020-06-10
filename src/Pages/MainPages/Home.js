import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { Context, FullOrSimpleContext } from '../../Store/store'
import { FixContainer } from '../../Components/Container';
import { setItemSession, getItemSession, removeItemSession, clearSession } from '../../SelfHooks/handleSessionStorage';

import { TabBar } from '../../Components/TabBar';

export const Home = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li, tab } = Theme;

    //防止登入時 OpenedTab 未設置
    if (getItemSession("OpenedTab") === null) {
        setItemSession("OpenedTab", JSON.stringify([{ name: "歡迎頁", link: "/" }]))
    }


    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                <TabBar></TabBar>

                {/* 真正內容 */}
                <div style={{
                    margin: "2rem 0 0 0",
                    width: "100rem",
                    height: '10rem',
                }}>Home</div>
                <div style={{
                    height: '10rem',
                }}>Home</div>
                <div style={{
                    height: '10rem',
                }}>Home</div>
                <div style={{
                    height: '10rem',
                }}>Home</div>
                <div style={{
                    height: '10rem',
                }}>Home</div>
                <div style={{
                    height: '10rem',
                }}>Home</div>
            </FixContainer>
        </>
    )
}