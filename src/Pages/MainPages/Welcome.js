import React, { useContext } from 'react'
import { FixContainer } from '../../Components/Container'
import { Context, FullOrSimpleContext } from '../../Store/store'

export const Welcome = (props) => {

    const { Theme, setTheme } = useContext(Context);
    const { FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(FullOrSimpleContext);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
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


