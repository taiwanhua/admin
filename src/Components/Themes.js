export default {
    themeDafault: {
        /* 
           Date   : 2020-06-02 00:24:35
           Author : Arhua Ho
           Content: 容器樣式
        */
        container: {
            /* 
               Date   : 2020-06-04 13:29:22
               Author : Arhua Ho
               Content: 登入畫面容器
            */
            login: {
                direction: "row",
                height: "100vh",
                overflowY: "auto",
                overflowX: "auto",
                padding: "7rem 0 0 0",
                backgroundColor: "#79b7b6",
                scrollBarColor: "#121d334d",
            },
            loginFormContainer: {
                direction: "row",
                justify: "center",
                width: "100%"
            },
            /* 
               Date   : 2020-06-04 13:31:18
               Author : Arhua Ho
               Content: 頂部導航列
            */
            navbar: {
                position: "fixed",
                width: "100%",
                direction: "row",
                justify: "space-between",
                alignItems: "center",
                backgroundColor: "#2f3e52",
                height: "4rem",

                /* 
                   Date   : 2020-06-02 02:08:21
                   Author : Arhua Ho
                   Content: 要適應左方
                */
                //margin: "0rem 0rem 0rem 8rem",

            },
            navbarLeft: {
                direction: "row",
                height: "4rem",
            },

        },
        subContainer: {

            loginForScroll: {
                height: "calc( 100vh - 6rem )",
                occupy: 12,
                width: "18.75rem",
            },
            /* 
               Date   : 2020-06-04 13:29:22
               Author : Arhua Ho
               Content: 登入畫面容器
            */
            login: {
                width: "18.75rem",
                //height: "20rem",
                backgroundColor: "#ffffff",
                border: "1px solid #eaeaea",
                boxShadow: " 0 0 25px #cac6c6",
                borderRadius: "5px",
                padding: "2rem",

                tablet: {
                    width: "21.875rem",
                }
            },
            /* 
               Date   : 2020-06-04 13:37:35
               Author : Arhua Ho
               Content: 導航列樣式
            */
            navbarLeft: {
                padding: "0rem 0rem 0rem 0.5rem",
                height: "4rem",

                tablet: {
                    padding: "0rem 0rem 0rem 1.5rem",
                }
            },
            navbarRight: {
                padding: "0rem 1.5rem 0rem 0rem ",
                height: "4rem",
            }
        },
        fixContainer: {
            /* 
               Date   : 2020-06-03 09:44:59
               Author : Arhua Ho
               Content: LeftSide側邊欄Full展開模式樣式
            */
            leftSideFull: {
                position: 'fixed',
                top: "4rem",
                height: 'calc(100% - 4rem)',
                width: '13.5rem',
                backgroundColor: '#2f3e52',
                bottom: 0,
                overflowY: 'scroll',
                overflowX: 'hidden',
            },
            mainPageFull: {
                position: 'fixed',
                height: 'calc(100% - 4rem)',
                width: 'calc( 100% - 13.5rem )',
                left: '13.5rem',
                top: "4rem",
                bottom: 0,
                overflowY: 'scroll',
                overflowX: 'scroll',
                backgroundColor: '#fff',
                scrollHeight: ".8rem",
            },
            /* 
               Date   : 2020-06-03 09:44:59
               Author : Arhua Ho
               Content: LeftSide側邊欄Simple "半" 展開模式樣式
            */
            leftSideSimple: {
                position: 'fixed',
                top: "4rem",
                height: 'calc(100% - 4rem)',
                width: '4rem',
                backgroundColor: '#2f3e52',
                bottom: 0,
                overflowY: 'scroll',
                overflowX: 'hidden',
            },
            mainPageSimple: {
                position: 'fixed',
                height: 'calc(100% - 4rem)',
                width: 'calc( 100% - 13.5rem )',
                left: '13.5rem',
                top: "4rem",
                bottom: 0,
                overflowY: 'scroll',
                overflowX: 'scroll',
                backgroundColor: '#fff',
            },
            /* 
               Date   : 2020-06-08 00:07:29
               Author : Arhua Ho
               Content: 分頁列樣式
            */
            tabBarFull: {
                padding: "0 0 0 .5rem",
                overflowX: "scroll",
                overflowY: 'hidden',
                whiteSpace: "nowrap",
                position: "fixed",
                top: "4rem",
                height: "2rem",
                right: "0rem",
                width: "inherit",
                backgroundColor: "#f0f0f0",
                scrollHeight: ".3rem",
                scrollUnhoverBackgroundColor: "#f0f0f000"
            },
        },
        /* 
           Date   : 2020-06-02 00:24:54
           Author : Arhua Ho
           Content: 文字樣式
        */
        text: {
            navbarTitle: {
                padding: "0rem 0rem 0rem 1rem",
                fontSize: "0.875rem",
                color: "#606266",
                height: "4rem",
                display: 'none',
                cursor: "text",

                tablet: {
                    display: 'block',
                }
            },
            navbarName: {
                width: '12rem',
                //padding: "0rem 1rem 0rem 1rem",
                color: "#fff",
                height: "4rem",
                display: 'none',
                textAlign: 'start',
                borderRight: '#eef1924d 1px solid',

                tablet: {
                    display: 'block',
                }
            },
        },
        /* 
           Date   : 2020-06-02 15:04:58
           Author : Arhua Ho
           Content: 按鈕樣式
        */
        styledIconButton: {
            leftSideStyledIconButton: {
                borderRadius: '10%',
                width: '100%',
                justify: 'start',
            },

        },
        /* 
           Date   : 2020-06-02 16:14:27
           Author : Arhua Ho
           Content: ul、li 列表樣式
        */
        ul: {
            /* 
               Date   : 2020-06-03 09:44:59
               Author : Arhua Ho
               Content: LeftSide側邊欄Full展開模式樣式
            */
            leftSideFullUl: {
                display: "block",
                listStyleType: "none",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
                marginInlineStart: "0rem",
                marginInlineEnd: "0rem",
                paddingInlineStart: "0rem",
            },
            leftSideFullUlSub: {
                display: "block",
                listStyleType: "none",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
                marginInlineStart: "0rem",
                marginInlineEnd: "0rem",
                paddingInlineStart: "3rem",
            },
            /* 
               Date   : 2020-06-03 09:45:38
               Author : Arhua Ho
               Content: LeftSide側邊欄Simple "半" 展開模式樣式
            */
            leftSideSimpleUl: {
                display: "block",
                listStyleType: "none",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
                marginInlineStart: "0.4rem",
                marginInlineEnd: "0rem",
                paddingInlineStart: "0rem",
            },
            leftSideSimpleUlSub: {
                position: "absolute",
                top: "4.1rem",
                backgroundColor: "#2f3e52",
                left: "3.4rem",
                zIndex: 1,
                width: '15rem',
                borderRadius: "0.3rem",

                display: "block",
                listStyleType: "none",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
                marginInlineStart: "0rem",
                marginInlineEnd: "0rem",
                paddingInlineStart: "0rem",
            },
            /* 
               Date   : 2020-06-05 15:52:04
               Author : Arhua Ho
               Content: 導行列按鈕Menu
            */
            navbarMenuUl: {
                position: "absolute",
                top: "3rem",
                backgroundColor: "#fff",
                right: "2.4rem",
                zIndex: 1,
                width: '6rem',
                borderRadius: "0.3rem",
                border: "1px solid #ebeef5",
                boxShadow: "0 2px 12px 0 #0000001a",

                display: "block",
                listStyleType: "none",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
                marginInlineStart: "0rem",
                marginInlineEnd: "0rem",
                paddingInlineStart: "0rem",
            },
        },
        li: {
            /* 
               Date   : 2020-06-03 09:44:59
               Author : Arhua Ho
               Content: LeftSide側邊欄Full展開模式樣式
            */
            leftSideFullLi: {
                paddingLeft: '0.5rem',
                fontSize: '1rem',
                color: '#fff',
                hoverColor: '#ffd04b',
            },
            leftSideFullLiSub: {
                paddingLeft: '0.5rem',
                fontSize: '1rem',
                color: '#fff',
                hoverColor: '#ffd04b',
            },
            /* 
               Date   : 2020-06-03 09:45:38
               Author : Arhua Ho
               Content: LeftSide側邊欄Simple "半" 展開模式樣式
            */
            leftSideSimpleLi: {
                paddingLeft: '0.5rem',
                fontSize: '1rem',
                color: '#fff',
                hoverColor: '#ffd04b',
            },
            leftSideSimpleLiSub: {
                paddingLeft: '0.5rem',
                fontSize: '1rem',
                color: '#fff',
                hoverColor: '#ffd04b',
            },
            /* 
               Date   : 2020-06-05 15:52:04
               Author : Arhua Ho
               Content: 導行列按鈕Menu
            */
            navbarMenuLi: {
                paddingLeft: '0.5rem',
                fontSize: '0.8rem',
                color: "#606266",
                hoverColor: "#66b1ff",
            },
        },
        tab: {
            tabBarFullTab: {
                border: "1px solid #d8dce5",
                color: "#495060",
                backgroundColor: "#fff",
                fontSize: ".8rem",
                height: "1.5rem",
                width: "10rem",
                display: "inline-block",
                textAlign: "center",
                margin: ".1rem .5rem 0 0 "
            }
        }

    },
    themeOther: {

    }

};