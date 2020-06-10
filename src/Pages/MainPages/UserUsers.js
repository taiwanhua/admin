import React, { useContext } from 'react'
import { FixContainer } from '../../Components/Container'
import { Context } from '../../Store/store'

export const UserUsers = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    return (
        <>
            <FixContainer theme={{ ...fixContainer.mainPageFull, ...(FullOrSimple ? {} : { left: '4rem', width: 'calc( 100% - 4rem )' }) }}>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
                <div style={{
                    height: '10rem',
                }}>UserUsers</div>
            </FixContainer>
        </>
    )
}


