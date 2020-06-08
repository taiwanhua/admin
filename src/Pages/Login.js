import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Container, SubContainer } from '../Components/Container';
import { Context } from '../Store/store';
import { useForm } from '../SelfHooks/useForm';
import { useLoginAsync } from '../SelfHooks/useAsync';
import { Input } from '../Components/Input';
import { H6 } from '../Components/Text';
import { StyledIconButton } from '../Components/Button';
import { Redirect, useHistory } from 'react-router-dom';
import { setItem, getItem, removeItem, clear } from '../SelfHooks/handleLocalStorage';

export const Login = (props) => {

    const [FullOrSimple, setFullOrSimple] = useState(true);//供判斷開關側邊欄
    const [RouteMapFunctionTitle, setRouteMapFunctionTitle] = useState("歡迎頁");//初始登入為歡迎頁

    const { Theme, setTheme, LeftSideData, setLeftSideData, Logined, setLogined } = useContext(Context);
    const { subContainer, container, text, fixContainer, styledIconButton } = Theme;

    const [ID, IDhandler, IDregExpResult] = useForm("", "^[a-zA-Z0-9]{0,5}$");
    const [Pass, Passhandler, PassregExpResult] = useForm("", "^[a-zA-Z0-9]{0,5}$");
    let history = useHistory();

    const loginVerification = useCallback(async () => {
        await new Promise((resolve, reject) => {
            try {
                //模擬延遲
                setTimeout(() => {
                    resolve('登錄延遲 ')
                }, 1000);
            } catch (Error) {
                reject(Error);
            }
        });

        return await fetch("./LeftSideData.json")//側邊欄請求
            .then(Result => {
                const ResultJson = Result.clone().json();//Respone.clone()
                return ResultJson;
            })
            .then((PreResult) => {
                setItem("LeftSideData", JSON.stringify(PreResult))
                setItem("Auth", true)
                history.push("/");
                return "登入成功"
            })
            .catch((Error) => {

            })
            .finally(() => {

            });

    }, [history])

    const [execute] = useLoginAsync(loginVerification, false);

    return (
        <>
            {(localStorage.getItem("Auth") === null) ? (
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
                                        onClick={() => { execute() }}
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