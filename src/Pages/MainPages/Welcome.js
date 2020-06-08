import React, { useContext, useState } from 'react'
import { FixContainer } from '../../Components/Container'
import { Context, FullOrSimpleContext } from '../../Store/store'
import { TabBar } from '../../Components/TabBar'

export const Welcome = (props) => {

    const { Theme, setTheme } = useContext(Context);
    const { FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(FullOrSimpleContext);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li, tab } = Theme;

    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                <TabBar></TabBar>

                {/* 真正內容 */}
                <div style={{
                    margin: "2rem 0 0 0",
                    width: "100rem",
                    height: '10rem',
                }}>welcome</div>
                <div style={{
                    height: '10rem',
                }}>welcome</div>
                <div style={{
                    height: '10rem',
                }}>welcome</div>
                <div style={{
                    height: '10rem',
                }}>welcome</div>
                <div style={{
                    height: '10rem',
                }}>welcome</div>
                <div style={{
                    height: '10rem',
                }}>welcome</div>
            </FixContainer>
        </>
    )
}


