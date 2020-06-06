import React, { useContext, useState, useEffect } from 'react';
import { Context, FullOrSimpleContext } from '../Store/store'
import { FixContainer } from '../Components/Container';
import { StyledIconButton } from '../Components/Button'

import styled from 'styled-components'
import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ViewListIcon from '@material-ui/icons/ViewList';
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';

import { Ul, Li } from './List';
import { Link } from 'react-router-dom';


export const LeftSide = (props) => {

    const { Theme, setTheme, LeftSideData, setLeftSideData } = useContext(Context);
    const { FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(FullOrSimpleContext);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li } = Theme;

    const [State, setState] = useState(true);//控管展開選單
    const [Obj, setObj] = useState(true);//初始值佔存控管展開選單

    const iconMap = {
        PeopleIcon: <PeopleIcon />,
        AccountTreeIcon: <AccountTreeIcon />,
        SupervisedUserCircleIcon: <SupervisedUserCircleIcon />,
        DateRangeIcon: <DateRangeIcon />,
        AirportShuttleIcon: <AirportShuttleIcon />,
        ViewListIcon: <ViewListIcon />,
        FormatLineSpacingIcon: <FormatLineSpacingIcon />
    }

    useEffect(() => {
        let obj = {};
        LeftSideData.forEach((item, index) => {
            if (!item.link) {
                obj[item.name] = false;
            }
        })
        //console.log(obj)
        setState(() => obj);
        setObj(() => obj);
    }, [LeftSideData])

    useEffect(() => {
        // 切換Full或Simple重置選單
        setState(() => Obj);

    }, [FullOrSimple, Obj])

    const renderFullList = (data) => {

        return (
            <Ul theme={ul.leftSideFullUl}>
                {
                    data.map((item, index) => {
                        return (
                            <React.Fragment key={item.name} >
                                <Link to={item.link ?? '#'} style={{ textDecoration: "none" }}>
                                    <StyledIconButton theme={styledIconButton.leftSideStyledIconButton} onClick={() => { setState({ ...State, [item.name]: !State[item.name] }); }}>
                                        {iconMap[item.icon]}
                                        <Li theme={li.leftSideFullLi} >{item.name}</Li>
                                    </StyledIconButton>
                                </Link>
                                {item.sub && (
                                    <Ul theme={{ ...ul.leftSideFullUlSub, ...(State[item.name] ? { display: "block" } : { display: "none" }) }}>
                                        {item.sub.map((item, index) => {
                                            return (
                                                <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
                                                    <StyledIconButton theme={styledIconButton.leftSideStyledIconButton} onClick={() => { console.log('dd') }}>
                                                        {iconMap[item.icon]}
                                                        <Li theme={li.leftSideFullLiSub} >{item.name}</Li>
                                                    </StyledIconButton>
                                                </Link>
                                            )
                                        })}
                                    </Ul>
                                )
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Ul>
        )
    }

    const renderSimpleList = (data) => {

        return (
            <Ul theme={ul.leftSideSimpleUl}>
                {data.map((item, index) => {
                    return (
                        <Link key={item.name} to={'#'} style={{ textDecoration: "none" }}>
                            <StyledIconButton theme={styledIconButton.leftSideStyledIconButton}
                                onClick={() => { setState({ ...State, [item.name]: true }); }}
                                //onMouseEnter={() => { setState({ ...State, [item.name]: true });  }}
                                onMouseLeave={() => { setState({ ...State, [item.name]: false }); }}
                            >
                                {iconMap[item.icon]}
                                {/* <Li theme={li.leftSideFullLi} >{item.name}</Li> */}
                            </StyledIconButton>
                        </Link>
                    )

                })}
            </Ul>
        )
    }

    const renderSimpleListSub = (data) => {

        return (
            <>
                {data.map((item, index) => {
                    return (
                        <Ul key={item.name} theme={{ ...ul.leftSideSimpleUlSub, top: `${index * (3) + 4.1}rem`, ...(State[item.name] ? { display: "block" } : { display: "none" }) }}
                            onMouseEnter={() => { setState({ ...State, [item.name]: true }); }}
                            onMouseLeave={() => { setState({ ...State, [item.name]: false }); }}
                        >
                            {item.sub && item.sub.map((item, index) => {
                                return (
                                    <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
                                        <StyledIconButton theme={styledIconButton.leftSideStyledIconButton} onClick={() => { }}>
                                            {iconMap[item.icon]}
                                            <Li theme={li.leftSideFullLi} >{item.name}</Li>
                                        </StyledIconButton>
                                    </Link>
                                )

                            })}
                        </Ul>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <FixContainer
                theme={{ ...(FullOrSimple ? fixContainer.leftSideFull : fixContainer.leftSideSimple) }}
            >
                {FullOrSimple ? renderFullList(LeftSideData) : renderSimpleList(LeftSideData)}
            </FixContainer>
            {!FullOrSimple && renderSimpleListSub(LeftSideData)}

        </>
    )
}

