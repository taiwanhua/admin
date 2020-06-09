import React, { useState } from 'react';
import { FixContainer } from '../Components/Container';

/* 
   Date   : 2020-06-04 14:45:08
   Author : Arhua Ho
   Content: 開關控制器，或作為組件re-render觸發器
   @return : [Value, Switch, Open, Close] ； 回傳值 : [欄位當前值, 開關控制, 開啟控制 , 關閉控制]
*/
export const useSwitch = () => {

    const [Value, setValue] = useState(false);

    return [Value, () => { setValue(!Value) }, () => { setValue(true) }, () => { setValue(false) }]
}