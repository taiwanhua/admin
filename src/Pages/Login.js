import React, { useState, useContext, useEffect } from 'react';
import { Container, SubContainer } from '../Components/Container';
import { Context } from '../Store/store';
import { useForm } from '../SelfHooks/useForm';
import { Input } from '../Components/Input';
import { H6 } from '../Components/Text';
import { StyledIconButton } from '../Components/Button';
import { Redirect } from 'react-router-dom';

export const Login = (props) => {

    const [FullOrSimple, setFullOrSimple] = useState(true);//供判斷開關側邊欄
    const [RouteMapFunctionTitle, setRouteMapFunctionTitle] = useState("歡迎頁");//初始登入為歡迎頁

    const { Theme, setTheme, LeftSideData, setLeftSideData, Logined, setLogined } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton } = Theme;

    const [ID, IDhandler, IDregExpResult] = useForm("", "^[a-zA-Z0-9]{0,5}$");
    const [Pass, Passhandler, PassregExpResult] = useForm("", "^[a-zA-Z0-9]{0,5}$");

    useEffect(() => {

        const mockLeftSideData = [
            {
                icon: 'PeopleIcon', name: '用戶角色管理', link: null,
                sub: [
                    { icon: null, name: '角色管理', link: '/User/Roles' },
                    { icon: null, name: '用戶管理', link: '/User/Users' },
                ]
            },
            {
                icon: 'AccountTreeIcon', name: '菜單權限管理', link: null,
                sub: [
                    { icon: null, name: '接口管理', link: '/Permission/Module' },
                    { icon: null, name: '菜單管理', link: '/Permission/Permission' },
                    { icon: null, name: '權限分配', link: '/Permission/Assign' },
                ]
            },
            {
                icon: 'SupervisedUserCircleIcon', name: '門市與人員名單', link: null,
                sub: [
                    { icon: null, name: '門市名單-無分頁', link: '/404' },
                    { icon: null, name: '顧客名單', link: '/Localation/Customer' },
                    { icon: null, name: '足健師名單', link: '/Localation/FootMaster' },
                    { icon: null, name: '門市名單', link: '/Localation/Shop' },
                ]
            },
            {
                icon: 'DateRangeIcon', name: '預約狀況', link: null,
                sub: [
                    { icon: null, name: '預約件數', link: '/Order/OrderList1' },
                    { icon: null, name: '預約率總覽', link: 'Order/OrderList2' },
                    { icon: null, name: '預約清單', link: '/Order/OrderList' },
                ]
            },
            {
                icon: 'AirportShuttleIcon', name: '任務調度', link: null,
                sub: [
                    { icon: null, name: '派遣單總覽', link: '/Despatch/DespatchTable' },
                    { icon: null, name: '足健師派遣', link: '/Despatch/DespatchList' },
                ]
            },
            {
                icon: 'ViewListIcon', name: '預約數總表', link: null,
                sub: [
                    { icon: null, name: '門市預約率', link: '/404' },
                    { icon: null, name: '區域預約率', link: '/404' },
                    { icon: null, name: '足健師預約率', link: '/404' },
                ]
            },
            {
                icon: 'FormatLineSpacingIcon', name: '新增問券', link: '/New/From',
                sub: null
            },
        ];

        setLeftSideData(mockLeftSideData)

    }, [setLeftSideData])

    return (
        <>
            {!Logined ? (
                <Container theme={container.login}>
                    <SubContainer theme={subContainer.loginForScroll}>

                        <Container theme={container.loginFormContainer}>
                            <SubContainer name={`h4`} theme={subContainer.login}>
                                <div style={{ height: "2rem", lineHeight: "2rem", textAlign: "center", margin: "0 0 2.5rem", color: "#606266" }}>
                                    <H6 style={{ height: "2rem", lineHeight: "2rem", textAlign: "center", margin: "0 0 2.5rem", color: "#606266" }}>系統登錄</H6>
                                </div>
                                <Input theme={{ height: "2.5rem", width: "100%" }} value={ID} onChange={IDhandler} regExpResult={IDregExpResult}></Input>
                                <Input pass theme={{ height: "2.5rem", width: "100%" }} value={Pass} onChange={Passhandler} regExpResult={PassregExpResult}></Input>
                                <div style={{ height: "2rem", lineHeight: "2rem", textAlign: "center", color: "#606266" }}>
                                    <StyledIconButton
                                        onClick={() => { setLogined(true); }}
                                        theme={{ justify: "center", fontSize: "0.8rem", height: "inherit", width: "100%", hoverBackgroundColor: "#409eff", backgroundColor: "#409eff", borderRadius: "4px" }}>
                                        登錄
                                </StyledIconButton>
                                </div>
                            </SubContainer>

                        </Container>
                    </SubContainer>
                </Container>
            ) :
                <Redirect
                    to={{
                        pathname: "/",
                        //state: { from: location }
                    }}
                />
            }
        </>
    )
}