import React, { useContext, useState, useCallback } from 'react';
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

    const { Theme, setTheme ,FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle} = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton, ul, li, tab } = Theme;
    const [openMenu, setopenMenu] = useState(false);
    let history = useHistory();


    const rendernavbarMenu = () => {
        return (
            <Ul onMouseEnter={() => { setopenMenu(true); }}
                onMouseLeave={() => { setopenMenu(false); }}
                theme={{ ...ul.navbarMenuUl, top: "5.4rem", right: ".6rem", position: "fixed" }}>
                {[
                    { text: "關閉其他",  /*onClick: AlertOpen*/ },
                    { text: "關閉所有", link: "/System/My" },
                    { text: "退出登錄", /*onClick: LogoutOpen*/ }
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
       Content: 更新Session時處理更新項目
    */
    const filter = useCallback(
        (willfilter) => {
            //console.log(willfilter)
            //console.log(openedTab.value)
            return (JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).filter(item => item.link !== willfilter)
        },
        []
    )

    return (
        <>
            <FixContainer theme={fixContainer.tabBarFull} >
                {(JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).map((item, index) => (
                    <Tab theme={tab.tabBarFullTab} text={item.name} link={item.link} key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            setItemSession("OpenedTab", JSON.stringify(filter(item.link)));
                            if ((JSON.parse(getItemSession("OpenedTab")) ?? [{ name: "歡迎頁", link: "/" }]).lenght > 1) {
                                history.push(JSON.parse(getItemSession("OpenedTab"))[index - 1].link);
                            } else {
                                history.push("/");
                            }

                        }} />
                ))}
                <Tab theme={{ ...tab.tabBarFullTab, color: "#f0f0f0", backgroundColor: "#f0f0f0", border: "" }} cancleHide text={"來撐"}></Tab>
            </FixContainer>

            {/* 關閉所有、關閉其他按紐 */}
            <Button style={{
                backgroundColor: "#f0f0f0",
                height: "1.8rem", right: "0rem", color: "#495060",
                width: "3rem",
                position: "fixed"

            }} onClick={() => { setopenMenu(!openMenu) }} onMouseLeave={() => { setopenMenu(false); }}>
                <ArrowDropDownIcon />
            </Button>
            {openMenu && rendernavbarMenu()}
        </>
    )
}