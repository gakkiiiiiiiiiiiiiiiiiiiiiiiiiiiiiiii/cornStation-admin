import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/User/index',
  meta: {
    orderNo: 1,
    hideChildrenInMenu: true,
    icon: 'whh:useralt',
    // hideMenu: true,
    title: '用户管理',
  },
  children: [
    {
      path: 'index',
      name: 'UserPage',
      component: () => import('/@/views/user/index.vue'),
      meta: {
        title: '用户管理',
        icon: 'whh:useralt',
        hideMenu: true,
      },
    },
  ],
}

export default user
