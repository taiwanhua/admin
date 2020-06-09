import { Navbar } from '../../Components/Navbar';
import React, { useContext, useState, useRef, useEffect, useCallback } from 'react';
import { Context, FullOrSimpleContext } from '../../Store/store'
import { FixContainer } from '../../Components/Container';
import { StyledIconButton } from '../../Components/Button'
import { FloatCard } from '../../Components/FloatCard'
import MenuIcon from '@material-ui/icons/Menu';
import { LeftSide } from '../../Components/LeftSide';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Error404 } from '../ErrorPages/404';
import { Welcome } from './Welcome';
import { UserRoles } from './UserRoles';
import { UserUsers } from './UserUsers';
import { PermissionModule } from './PermissionModule';
import { PermissionPermission } from './PermissionPermission';
import { PermissionAssign } from './PermissionAssign';
import { LocalationCustomer } from './LocalationCustomer';
import { LocalationFootMaster } from './LocalationFootMaster';
import { LocalationShop } from './LocalationShop';
import { OrderOrderList1 } from './OrderOrderList1';
import { OrderOrderList2 } from './OrderOrderList2';
import { OrderOrderList } from './OrderOrderList';
import { DespatchDespatchTable } from './DespatchDespatchTable';
import { DespatchDespatchList } from './DespatchDespatchList';
import { NewFrom } from './NewFrom';
import { SystemMy } from './SystemMy';
import { setItem, getItem, removeItem, clear } from '../../SelfHooks/handleLocalStorage';
import { setItemSession, getItemSession, removeItemSession, clearSession } from '../../SelfHooks/handleSessionStorage';
import { useArray } from '../../SelfHooks/useArray';

export const Home = (props) => {

    const [FullOrSimple, setFullOrSimple] = useState(true);//供判斷開關側邊欄
    const [RouteMapFunctionTitle, setRouteMapFunctionTitle] = useState("歡迎頁");//初始登入為歡迎頁

    const { Theme, setTheme, Logined, setLogined } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton } = Theme;
    const [LeftSideData, setLeftSideData] = useState([]);
    // const openedTab = useArray([]);//放置分頁列以開啟分頁，放置Context   ，要刪除

    const urlMapping = {
        "/User/Roles": <UserRoles />,
        "/User/Users": <UserUsers />,
        "/Permission/Module": <PermissionModule />,
        "/Permission/Permission": <PermissionPermission />,
        "/Permission/Assign": <PermissionAssign />,
        "/Localation/Customer": <LocalationCustomer />,
        "/Localation/FootMaster": <LocalationFootMaster />,
        "/Localation/Shop": <LocalationShop />,
        "/Order/OrderList1": <OrderOrderList1 />,
        "/Order/OrderList2": <OrderOrderList2 />,
        "/Order/OrderList": <OrderOrderList />,
        "/Despatch/DespatchTable": <DespatchDespatchTable />,
        "/Despatch/DespatchList": <DespatchDespatchList />,
        "/New/From": <NewFrom />,
        "/System/My": <SystemMy />,
        "/": <Welcome />,
        "/404": < Error404 />,
    };

    //防止登入時 OpenedTab 未設置
    if (sessionStorage.getItem("OpenedTab") === null) {
        setItemSession("OpenedTab", JSON.stringify([{ name: "歡迎頁", link: "/" }]))
    }

    useEffect(() => {
        if (getItem("LeftSideData") !== null) {
            setLeftSideData(JSON.parse(getItem("LeftSideData")));
        }
    }, [setLeftSideData])

    return (
        <>
            < FullOrSimpleContext.Provider value={{ FullOrSimple, setFullOrSimple, RouteMapFunctionTitle, setRouteMapFunctionTitle }}>
                <Navbar />
                <LeftSide />
                {LeftSideData &&
                    (<>

                        {/* 
                            Date   : 2020-06-05 10:17:23
                            Author : Arhua Ho
                            Content: 渲染由後端回傳的路由，當登入時連接正確路由返回其對應頁面；當未登入時重導向至 /Login
                        */}
                        {LeftSideData.map((item, index) => {

                            return (
                                <React.Fragment key={item.name}>
                                    {item.link && (<Route exact path={item.link}

                                        render={({ location }) => {
                                            //console.log("/User/Roles");
                                            //console.log(location);
                                            return (localStorage.getItem("Auth") !== null) ? (
                                                urlMapping[item.link]
                                            ) : (
                                                    <Redirect
                                                        to={{
                                                            pathname: "/Login",
                                                            //state: { from: location }
                                                        }}
                                                    />
                                                );
                                        }
                                        }>
                                    </Route>)}
                                    {item.sub && item.sub.map((item, index) => {

                                        return (<Route exact path={item.link}
                                            key={item.name}
                                            render={({ location }) => {
                                                //console.log("/User/Roles");
                                                //console.log(location);
                                                return (localStorage.getItem("Auth") !== null) ? (
                                                    urlMapping[item.link]
                                                ) : (
                                                        <Redirect
                                                            to={{
                                                                pathname: "/Login",
                                                                //state: { from: location }
                                                            }}
                                                        />
                                                    );
                                            }
                                            }>
                                        </Route>)
                                    })}
                                </React.Fragment>
                            )
                        })}
                        {/* 
                           Date   : 2020-06-05 10:17:23
                           Author : Arhua Ho
                           Content: 個人中心，當登入時返回Welcome頁面；當未登入時重導向至 /Login
                        */}
                        <Route exact path={"/System/My"}

                            render={({ location }) => {
                                //console.log(location);
                                return (localStorage.getItem("Auth") !== null) ? (
                                    <SystemMy />
                                ) : (
                                        <Redirect
                                            to={{
                                                pathname: "/Login",
                                                //state: { from: location }
                                            }}
                                        />
                                    );
                            }
                            }>
                        </Route>
                        {/* 
                           Date   : 2020-06-05 10:17:23
                           Author : Arhua Ho
                           Content: root，當登入時返回Welcome頁面；當未登入時重導向至 /Login
                        */}
                        <Route exact path={"/"}

                            render={({ location }) => {
                                //console.log(location);
                                return (localStorage.getItem("Auth") !== null) ? (
                                    <Welcome />
                                ) : (
                                        <Redirect
                                            to={{
                                                pathname: "/Login",
                                                //state: { from: location }
                                            }}
                                        />
                                    );
                            }
                            }>
                        </Route>
                        {/* 
                           Date   : 2020-06-05 10:17:23
                           Author : Arhua Ho
                           Content: 亂打網址，當登入時返回404頁面；當未登入時重導向至 /Login
                        */}
                        <Route exact path={"*"}
                            render={({ location }) => {
                                //console.log(location);
                                return (localStorage.getItem("Auth") !== null) ? (
                                    (urlMapping.hasOwnProperty(location.pathname) ? null : <Redirect
                                        to={{
                                            pathname: "/404",
                                            //state: { from: location }
                                        }}
                                    />)
                                ) : (
                                        <Redirect
                                            to={{
                                                pathname: "/Login",
                                                //state: { from: location }
                                            }}
                                        />
                                    );
                            }
                            }>
                        </Route>
                    </>
                    )
                }
            </FullOrSimpleContext.Provider>
        </>
    )
}