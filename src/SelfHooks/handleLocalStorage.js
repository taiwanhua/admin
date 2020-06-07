import React, { useCallback } from 'react'

/* 
   Date   : 2020-06-07 16:28:28
   Author : Arhua Ho
   Content: LocalStorage操作封裝，包含setItem、getItem、removeItem、clear
   @return : { setItem, getItem, removeItem, clear } ； 回傳值 : { setItem, getItem, removeItem, clear }
*/

const setItem = (itemName, item) => {
    localStorage.setItem(itemName, item);
};

const getItem = (itemName) => {
    return localStorage.getItem(itemName);
};

const removeItem = (itemName) => {
    localStorage.removeItem(itemName);
};

const clear = () => {
    localStorage.clear();
};

export { setItem, getItem, removeItem, clear };