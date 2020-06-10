import React, { useContext } from 'react'
import { Routers } from '../Routers/Routers'
import { LeftSide } from './LeftSide'
import { Navbar } from './Navbar'
import { TabBar } from './TabBar'
import { FixContainer } from './Container'
import { Context } from '../Store/store'

/* 
   Date   : 2020-06-09 14:40:41
   Author : Arhua Ho
   Content: 需要一層轉發Context
*/
export const ContextContainer = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    return (
        <>
            {(localStorage.getItem("Auth") !== null) &&
                <>
                    <Navbar />
                    <LeftSide />
                    <FixContainer theme={{ ...fixContainer.tabBar, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                        <TabBar />
                    </FixContainer>
                </>
            }
            <Routers></Routers>
        </>
    )
}