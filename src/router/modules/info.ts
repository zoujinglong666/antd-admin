const LAYOUT = () => import('@/layouts/index.vue');
const infoRouter = {
    path: '/info',
    component: LAYOUT,
    redirect: 'noRedirect',
    name: 'Info',
    meta: {
        title: '信息管理',
        icon: 'component'
    },
    children: [
        {
            path: "vat",
            name: 'InfoVAT',
            component: () => import('@/views/info/vat/index.vue'),
            meta: {
                title: 'VAT管理',
                icon: 'HomeFilled',
                affix: true
            },
        },
        {
            path: "address",
            name: 'InfoAddress',
            component: () => import('@/views/info/address/index.vue'),
            meta: {
                title: '地址管理',
                icon: 'HomeFilled',
                affix: true
            },
        },

    ]
}

export default infoRouter;
