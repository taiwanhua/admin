
import { useCallback, useState } from 'react';

/* 
   Date   : 2020-06-07 19:40:09
   Author : Arhua Ho
   Content: 觸發Rerender
*/
export const useForceUpdate = () => {
    const [, dispatch] = useState(Object.create(null));

    /* 
       Date   : 2020-06-07 19:39:36
       Author : Arhua Ho
       Content: 觸發此函數來更新State
    */
    const memoizedDispatch = useCallback(
        () => {
            dispatch(Object.create(null));
        },
        [dispatch],
    );
    return memoizedDispatch;
}