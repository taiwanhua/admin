import React from 'react';
import { getItem } from '../SelfHooks/handleLocalStorage';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Error404 } from '../Pages/ErrorPages/404';
import { UserRoles } from '../Pages/MainPages/UserRoles';
import { UserUsers } from '../Pages/MainPages/UserUsers';
import { PermissionModule } from '../Pages/MainPages/PermissionModule';
import { PermissionPermission } from '../Pages/MainPages/PermissionPermission';
import { PermissionAssign } from '../Pages/MainPages/PermissionAssign';
import { LocalationCustomer } from '../Pages/MainPages/LocalationCustomer';
import { LocalationFootMaster } from '../Pages/MainPages/LocalationFootMaster';
import { LocalationShop } from '../Pages/MainPages/LocalationShop';
import { OrderOrderList1 } from '../Pages/MainPages/OrderOrderList1';
import { OrderOrderList2 } from '../Pages/MainPages/OrderOrderList2';
import { OrderOrderList } from '../Pages/MainPages/OrderOrderList';
import { DespatchDespatchTable } from '../Pages/MainPages/DespatchDespatchTable';
import { DespatchDespatchList } from '../Pages/MainPages/DespatchDespatchList';
import { NewFrom } from '../Pages/MainPages/NewFrom';
import { SystemMy } from '../Pages/MainPages/SystemMy';
import { Home } from '../Pages/MainPages/Home';
import { Login } from '../Pages/MainPages/Login';

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
    "/": <Home />,
    "/404": < Error404 />,
    "/Login": <Login />,
};

export const Routers = React.memo((props) => {
    return (
        <>
            {console.log(getItem("LeftSideData"))}
            <Switch>
                {/* 
                   Date   : 2020-06-05 10:17:23
                   Author : Arhua Ho
                   Content: root，當登入時返回Home頁面；當未登入時重導向至 /Login
                */}
                <Route exact path={"/"}
                    render={({ location }) => {
                        return (localStorage.getItem("Auth") !== null) ? (
                            <Home />
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

                <Route path={"/Login"}
                    render={({ location }) => {
                        return (localStorage.getItem("Auth") === null) ? (
                            <Login />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/",
                                        //state: { from: location }
                                    }}
                                />
                            );
                    }
                    }>
                </Route>

                <Route path={"/404"}
                    render={({ location }) => {
                        return (localStorage.getItem("Auth") !== null) ? (
                            <Error404 />
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

                {JSON.parse(getItem("LeftSideData")) &&
                    (<>

                        {/* 
                            Date   : 2020-06-05 10:17:23
                            Author : Arhua Ho
                            Content: 渲染由後端回傳的路由，當登入時連接正確路由返回其對應頁面；當未登入時重導向至 /Login
                                     PS.Switch 下不支援Fragment，否則NoMatch不匹配。(這裡要因應專案調整)
                        */}
                        {JSON.parse(getItem("LeftSideData")).map((item, index) => {

                            return (
                                <React.Fragment key={item.name}>
                                    {item.link && (<Route path={item.link}

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

                                        return (<Route path={item.link}
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
                           Content: 個人中心，當登入時返回SystemMy頁面；當未登入時重導向至 /Login
                        */}
                        <Route path={"/System/My"}

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
                    </>)}

                {/* 
                           Date   : 2020-06-05 10:17:23
                           Author : Arhua Ho
                           Content: 亂打網址，當登入時返回404頁面；當未登入時重導向至 /Login
                        */}
                <Route path="*"
                    component={({ location }) => {
                        console.log("*****");
                        return (localStorage.getItem("Auth") !== null) ? (
                            // <Error404 />
                            <Redirect
                                to={{
                                    pathname: "/404",
                                    //state: { from: location }
                                }}
                            />
                            // (urlMapping.hasOwnProperty(location.pathname) ? null : <Redirect
                            //     to={{
                            //         pathname: "/404",
                            //         //state: { from: location }
                            //     }}
                            // />)
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
            </Switch>
        </>
    )
})

//e93
//5 fu06
