import React, { useContext, useState, useCallback, useEffect } from 'react';
import { FixContainer } from './Container';
import { Tab } from './Tab';
import { Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Context, FullOrSimpleContext } from '../Store/store';
import { Ul, Li } from './List';
import { Link, useHistory } from 'react-router-dom';
import { setItemSession, getItemSession, removeItemSession, clearSession } from '../SelfHooks/handleSessionStorage';
import { useSwitch } from '../SelfHooks/useSwitch';

export const TabBar = (props) => {

    const { Theme, setTheme, FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle, Switch, ToggleNameAndLink, setToggleNameAndLink, TabValue, TabClose } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li, tab } = Theme;
    const [openMenu, setopenMenu] = useState(false);
    let history = useHistory();

    useEffect(() => {
        /* 
           Date   : 2020-06-10 17:12:22
           Author : Arhua Ho
           Content: 控制初始tab滾動
        */
        let element = document.getElementById("tabBarContainer");
        console.log(TabValue)
        if (TabValue) {
            let count = 0;
            let maxScrollLeft = element.scrollWidth - element.clientWidth;
            (JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).forEach((item, index) => {
                if (ToggleNameAndLink.link === item.link) {
                    //console.log(document.getElementById("tabBarContainer").scrollLeft)
                    element.scrollLeft = (count * 100 > maxScrollLeft) ? maxScrollLeft : count * 100;
                }
                count++;
            })
        }
    })

    const rendernavbarMenu = () => {
        return (
            <Ul onMouseEnter={() => { setopenMenu(true); }}
                onMouseLeave={() => { setopenMenu(false); }}
                theme={{ ...ul.navbarMenuUl, top: "5.4rem", right: ".6rem", position: "fixed", zIndex: "inherit", boxShadow: "0 2px 12px 0 #00000040" }}>
                {[
                    {
                        text: "關閉其他",
                        onClick: () => {
                            setToggleNameAndLink((T) => T);
                            setItemSession("OpenedTab", JSON.stringify([ToggleNameAndLink]));
                            history.push(ToggleNameAndLink.link);
                        },
                    },
                    {
                        text: "關閉所有",
                        onClick: () => {
                            setToggleNameAndLink({ name: "歡迎頁", link: "/" });
                            setItemSession("OpenedTab", JSON.stringify([{ name: "歡迎頁", link: "/" }]));
                            history.push("/");
                        },
                    }
                ].map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                item.link ? (

                                    <Link to={item.link} style={{ textDecoration: "none" }}>
                                        <Button
                                            style={{ width: "100%", justifyContent: "unset" }}
                                            onClick={item.onClick}
                                        >
                                            <Li theme={li.navbarMenuLi}>{item.text}</Li>
                                            {item.alertcount && (<span style={{
                                                width: "1.55rem",
                                                position: "absolute", right: "0.1rem", top: "-0.3rem",
                                                background: "#e6a23c",
                                                borderRadius: "15px",
                                                color: "#fff",
                                            }}>{item.alertcount}</span>)}
                                        </Button>
                                    </Link>

                                ) : (
                                        <Button
                                            style={{ width: "100%", justifyContent: "unset" }}
                                            onClick={item.onClick}
                                        >
                                            <Li theme={li.navbarMenuLi}>{item.text}</Li>
                                            {item.alertcount && (<span style={{
                                                width: "1.55rem",
                                                position: "absolute", right: "0.1rem", top: "-0.3rem",
                                                background: "#e6a23c",
                                                borderRadius: "15px",
                                                color: "#fff",
                                            }}>{item.alertcount}</span>)}
                                        </Button>)
                            }
                        </React.Fragment>
                    )
                })
                }
            </Ul >
        )
    }

    /* 
       Date   : 2020-06-08 17:31:33
       Author : Arhua Ho
       Content: 更新Session時處理更新項目，去除掉陣列中 link 等於 willfilter 的項目
    */
    const filter = useCallback(
        (willfilter) => {
            return (JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).filter(item => item.link !== willfilter)
        },
        []
    )

    return (
        <>
            <FixContainer theme={fixContainer.tabBarFull} id={"tabBarContainer"}
            /*onScroll={() => { console.log(document.getElementById("tabBarContainer").scrollLeft) }}*/
            >
                {(JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).map((item, index) => (
                    <Tab theme={tab.tabBarFullTab} text={item.name} link={item.link} key={index}
                        active={ToggleNameAndLink.link === item.link}
                        tabOnClick={(e) => {
                            setToggleNameAndLink({ name: item.name, link: item.link });
                            TabClose();//不觸發滾動
                            //setTabScroll(document.getElementById("tabBarContainer").scrollLeft);//若非側邊攔觸發則引用現在Scroll
                            history.push(item.link);
                        }}
                        cancleOnClick={(e) => {
                            e.stopPropagation();

                            if ((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).length > 1) {
                                let len = (JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).length;

                                /* 
                                   Date   : 2020-06-10 12:12:22
                                   Author : Arhua Ho
                                   Content: 更改Toggle標記
                                */
                                let forToggle = {
                                    link: JSON.parse(getItemSession("OpenedTab"))[
                                        (index - 1 === len) ? index - 2 : (index > 0 ? index - 1 : index + 1)
                                    ].link,
                                    name: JSON.parse(getItemSession("OpenedTab"))[
                                        (index - 1 === len) ? index - 2 : (index > 0 ? index - 1 : index + 1)
                                    ].name,
                                }
                                setToggleNameAndLink(forToggle);
                                history.push(JSON.parse(getItemSession("OpenedTab"))[
                                    (index - 1 === len) ? index - 2 : (index > 0 ? index - 1 : index + 1)
                                ].link);
                                Switch();
                            } else {
                                //console.log((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).length)
                                setToggleNameAndLink({ name: "歡迎頁", link: "/" });
                                setItemSession("OpenedTab", JSON.stringify([{ name: "歡迎頁", link: "/" }]));
                                history.push("/");
                            }
                            setItemSession("OpenedTab", JSON.stringify(filter(item.link)));
                        }} />
                ))}
                <Tab theme={{ ...tab.tabBarFullTab, color: "#f0f0f0", backgroundColor: "#f0f0f0", border: "", cursor: "default" }} cancleHide text={"　　"}></Tab>
            </FixContainer>

            {/* 關閉所有、關閉其他按紐 */}
            <Button style={{
                backgroundColor: "#f0f0f0",
                height: "1.8rem", right: "0rem", color: "#495060",
                width: "3rem",
                position: "fixed",
                zIndex: "inherit"

            }} onClick={() => { setopenMenu(!openMenu) }} onMouseLeave={() => { setopenMenu(false); }}>
                <ArrowDropDownIcon />
            </Button>
            {openMenu && rendernavbarMenu()}
        </>
    )
}