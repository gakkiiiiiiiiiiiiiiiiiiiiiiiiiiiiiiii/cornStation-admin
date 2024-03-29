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
    title: '快递类型',
  },
  children: [
    {
      path: 'index',
      name: 'expressTypePage',
      component: () => import('/@/views/expressType/index.vue'),
      meta: {
        title: '快递类型',
        icon: 'whh:menu',
        hideMenu: true,
      },
    },
  ],
}

export default user
