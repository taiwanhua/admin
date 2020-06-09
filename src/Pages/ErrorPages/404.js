import React, { useContext } from 'react'
import { FixContainer } from '../../Components/Container'
import { Context } from '../../Store/store'
import { TabBar } from '../../Components/TabBar';

export const Error404 = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                <TabBar></TabBar>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
                <div style={{
                    height: '10rem',
                }}>404 Not Found</div>
            </FixContainer>
        </>
    )
}


