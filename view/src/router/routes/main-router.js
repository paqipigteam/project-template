/**
 * 程序主路由
 **/
const route = [
    //  默认页面
    {
        path: "/",
        redirect: "/test",
    },
    //  index
    {
        path: "/index",
        component: () => import("__tpage__/index-page"),
    },
    //  test页面
    {
        path: "/test",
        component: ()=> import("__tpage__/test-page"),
    } ,
];

export default route;