const LAYOUT = () => import('@/layouts/index.vue');
const orderRouter = {
    path: "/order",
    name: 'placeOrderQuick',
    component: () => LAYOUT,
    meta: {
        title: '订单列表',
        icon: 'HomeFilled',
        affix: true
    },
    children: [
        {
            path: "/placeOrder/quick",
            name: 'placeOrderQuick',
            component: () => import('@/views/placeOrder/quick/index.vue'),
            meta: {
                title: '快速下单',
                icon: 'HomeFilled',
                affix: true
            }
        }


    ]
}

export default orderRouter;
