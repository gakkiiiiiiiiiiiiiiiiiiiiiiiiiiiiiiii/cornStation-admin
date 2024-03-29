import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const user: AppRouteModule = {
  path: '/takeParts',
  name: 'TakeParts',
  component: LAYOUT,
  redirect: '/takeParts/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:gift',
    title: '取件信息管理',
  },
  children: [
    {
      path: 'index',
      name: 'takePartsPage',
      component: () => import('/@/views/takeParts/index.vue'),
      meta: {
        title: '取件信息管理',
        icon: 'whh:gift',
        hideMenu: true,
      },
    },
  ],
}

export default user
