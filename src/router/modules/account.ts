const LAYOUT = () => import('@/layouts/index.vue');
const accountRouter = {
    path: '/account',
    component: LAYOUT,
    redirect: 'noRedirect',
    name: 'Account',
    meta: {
        title: '账号管理',
        icon: 'component'
    },
    children: [
        {
            path: "personal",
            name: 'AccountPersonal',
            component: () => import('@/views/account/personal/index.vue'),
            meta: {
                title: '个人信息',
                icon: 'HomeFilled',
                affix: true
            },
        },
        {
            path: "sub",
            name: 'AccountSub',
            component: () => import('@/views/account/sub/index.vue'),
            meta: {
                title: '子账号管理',
                icon: 'HomeFilled',
                affix: true
            },
        },
        {
            path: "role",
            name: 'AccountRole',
            component: () => import('@/views/account/role/index.vue'),
            meta: {
                title: '角色管理',
                icon: 'HomeFilled',
                affix: true
            },
        },

    ]
}

export default accountRouter;
