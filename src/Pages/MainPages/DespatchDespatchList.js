import React, { useContext } from 'react'
import { FixContainer } from '../../Components/Container'
import { Context, FullOrSimpleContext } from '../../Store/store'
import { TabBar } from '../../Components/TabBar';

export const DespatchDespatchList = (props) => {

    const { Theme, setTheme } = useContext(Context);
    const { FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(FullOrSimpleContext);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                <TabBar></TabBar>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
                <div style={{
                    height: '10rem',
                }}>DespatchDespatchList</div>
            </FixContainer>
        </>
    )
}


