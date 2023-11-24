import type { RouteRecordRaw } from 'vue-router'
import dynamicRoutes, { rootRoute } from '~/router/dynamic-routes.ts'

const Layout = () => import('~/layouts/index.vue')

export default [
  rootRoute,
  {
    path: '/login',
    component: () => import('~/pages/common/login.vue'),
    meta: {
      title: '登录',

    },
  },
  {
    path: '/401',
    name: 'Error401',
    component: () => import('~/pages/exception/401.vue'),
    meta: {
      title: '授权已过期',
    },
  },
  {
    path: '/common',
    name: 'LayoutBasicRedirect',
    component: Layout,
    redirect: '/common/redirect',
    children: [
      {
        path: '/common/redirect',
        component: () => import('~/pages/common/route-view.vue'),
        name: 'CommonRedirect',
        redirect: '/redirect',
        children: [
          {
            path: '/redirect/:path(.*)',
            name: 'RedirectPath',
            component: () => import('~/pages/common/redirect.vue'),
          },
        ],
      },
      ...dynamicRoutes,

    ],
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      title: '找不到页面',
    },
    component: () => import('~/pages/exception/error.vue'),
  },
] as RouteRecordRaw[]
