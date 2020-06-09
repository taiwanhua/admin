import React from 'react'
import { Routers } from '../Routers/Routers'
import { LeftSide } from './LeftSide'
import { Navbar } from './Navbar'

/* 
   Date   : 2020-06-09 14:40:41
   Author : Arhua Ho
   Content: 需要一層轉發Context
*/
export const ContextContainer = (props) => {

    return (
        <>
            {(localStorage.getItem("Auth") !== null) &&
                <>
                    <Navbar />
                    <LeftSide />
                </>
            }
            <Routers></Routers>
        </>
    )
}