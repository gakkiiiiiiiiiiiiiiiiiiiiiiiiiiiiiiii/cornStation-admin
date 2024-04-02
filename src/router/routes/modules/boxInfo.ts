import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const user: AppRouteModule = {
  path: '/boxInfo',
  name: 'BoxInfo',
  component: LAYOUT,
  redirect: '/boxInfo/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    // hideMenu: true,
    icon: 'whh:gift',
    title: '个人中心',
  },
  children: [
    {
      path: 'index',
      name: 'boxInfoPage',
      component: () => import('/@/views/boxInfo/index.vue'),
      meta: {
        title: '个人中心',
        icon: 'whh:gift',
        hideMenu: true,
      },
    },
  ],
}

export default user
