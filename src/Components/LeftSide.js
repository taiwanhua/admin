import React, { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { Context, FullOrSimpleContext } from '../Store/store'
import { FixContainer } from '../Components/Container';
import { StyledIconButton } from '../Components/Button'

import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ViewListIcon from '@material-ui/icons/ViewList';
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';
import { setItem, getItem, removeItem, clear } from '../SelfHooks/handleLocalStorage';
import { Ul, Li } from './List';
import { Link } from 'react-router-dom';
import { setItemSession, getItemSession, removeItemSession, clearSession } from '../SelfHooks/handleSessionStorage';


export const LeftSide = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle } = useContext(Context);
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
        (JSON.parse(getItem("LeftSideData")) ?? []).forEach((item, index) => {
            if (!item.link) {
                obj[item.name] = false;
            }
        })
        //console.log(obj)
        setState(() => obj);
        setObj(() => obj);
    }, [setState, setObj])

    useEffect(() => {
        // 切換Full或Simple重置選單
        setState(() => Obj);

    }, [FullOrSimple, Obj])

    /* 
       Date   : 2020-06-08 16:46:30
       Author : Arhua Ho
       Content: 檢查是否已存在分頁列中
    */
    const checkoutExist = useCallback(
        (arr, pushItem) => {
            let res = true;
            arr.forEach((item, index) => {
                if (item.link === pushItem.link) {
                    res = false;
                }
            })
            return res;
        },
        []
    )

    const renderFullList = (data) => {

        return (
            <Ul theme={ul.leftSideFullUl}>
                {data.map((item, index) => {
                    return (
                        <React.Fragment key={item.name} >
                            <Link to={item.link ?? '#'} style={{ textDecoration: "none" }}>
                                <StyledIconButton theme={styledIconButton.leftSideStyledIconButton} onClick={() => {
                                    if (item.link) {
                                        if (checkoutExist((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link })) {
                                            setItemSession("OpenedTab", JSON.stringify([...(JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link }]));
                                        }
                                    }
                                    setState({ ...State, [item.name]: !State[item.name] });
                                }}>
                                    {iconMap[item.icon]}
                                    <Li theme={li.leftSideFullLi} >{item.name}</Li>
                                </StyledIconButton>
                            </Link>
                            {item.sub && (
                                <Ul theme={{ ...ul.leftSideFullUlSub, ...(State[item.name] ? { display: "block" } : { display: "none" }) }}>
                                    {item.sub.map((item, index) => {
                                        return (
                                            <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
                                                <StyledIconButton theme={styledIconButton.leftSideStyledIconButton} onClick={() => {
                                                    if (checkoutExist((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link })) {
                                                        setItemSession("OpenedTab", JSON.stringify([...(JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link }]));
                                                    }
                                                }}>
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
                                onClick={() => {
                                    if (item.link) {
                                        if (checkoutExist((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link })) {
                                            setItemSession("OpenedTab", JSON.stringify([...(JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link }]));
                                        }
                                    }
                                    setState({ ...State, [item.name]: true });
                                }}
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
                                        <StyledIconButton theme={styledIconButton.leftSideStyledIconButton} onClick={() => {
                                            if (checkoutExist((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link })) {
                                                setItemSession("OpenedTab", JSON.stringify([...(JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]), { name: item.name, link: item.link }]));
                                            }
                                        }}>
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
                {FullOrSimple ? renderFullList((JSON.parse(getItem("LeftSideData")) ?? [])) : renderSimpleList((JSON.parse(getItem("LeftSideData")) ?? []))}
            </FixContainer>
            {!FullOrSimple && renderSimpleListSub((JSON.parse(getItem("LeftSideData")) ?? []))}

        </>
    )
}

