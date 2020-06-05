import React, { useReducer, useState } from 'react';
import { Context } from './Store/store'
import './App.css';
import { Navbar } from './Components/Navbar';
import themes from './Components/Themes';
import { Home } from './Pages/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './Pages/Login';

const reducer = (state, action) => {

  switch (action.type) {
    case "ThemeDafault":
      return themes.themeDafault;
    case "ThemeOther":
      return themes.themeOther;
    case "ThemeCustom":
      return 0;
    default:
      return "處理Theme失敗";
  }
}

function App() {

  const [Theme, setTheme] = useReducer(reducer, themes.themeDafault);
  const [LeftSideData, setLeftSideData] = useState([]);
  const [Logined, setLogined] = useState(false);


  return (
    <>
      < Context.Provider value={{ Theme, setTheme, LeftSideData, setLeftSideData, Logined, setLogined }}>
        <Switch>
          {/* 
             Date   : 2020-06-04 11:35:34
             Author : Arhua Ho
             Content: 登入頁面 與 主頁面切換
          */}
          <Route exact path={"/Login"} children={<Login />} />
          <Home></Home>
        </Switch>
      </Context.Provider>
    </>
  );
}

export default App;
