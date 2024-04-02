import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const user: AppRouteModule = {
  path: '/expressType',
  name: 'ExpressType',
  component: LAYOUT,
  redirect: '/expressType/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:menu',
    title: '包裹管理',
  },
  children: [
    {
      path: 'index',
      name: 'expressTypePage',
      component: () => import('/@/views/expressType/index.vue'),
      meta: {
        title: '包裹管理',
        icon: 'whh:menu',
        hideMenu: true,
      },
    },
  ],
}

export default user
