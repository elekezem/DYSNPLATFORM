import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { ExceptionEnum } from '/@/enums/exceptionEnum';
import { t } from '/@/hooks/web/useI18n';

const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');

const page: AppRouteModule = {
  path: '/page-demo',
  name: 'PageDemo',
  component: LAYOUT,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: t('routes.demo.page.page'),
  },
  children: [
    // =============================form start=============================

    // =============================form end=============================
    // =============================desc start=============================

    // =============================desc end=============================

    // =============================result start=============================

    // =============================result end=============================

    // =============================account start=============================
    {
      path: 'account',
      name: 'AccountPage',
      component: getParentLayout('AccountPage'),
      redirect: '/page-demo/account/setting',
      meta: {
        title: t('routes.demo.page.account'),
      },
      children: [
        {
          path: 'setting',
          name: 'AccountSettingPage',
          component: () => import('/@/views/demo/page/account/setting/index.vue'),
          meta: {
            title: t('routes.demo.page.accountSetting'),
          },
        },
      ],
    },
    // =============================account end=============================
    // =============================exception start=============================

    // =============================exception end=============================
    // =============================list start=============================
    {
      path: 'list',
      name: 'ListPage',
      component: getParentLayout('ListPage'),
      redirect: '/page-demo/list/card',
      meta: {
        title: t('routes.demo.page.list'),
      },
      children: [
        {
          path: 'basic',
          name: 'ListBasicPage',
          component: () => import('/@/views/demo/page/list/basic/index.vue'),
          meta: {
            title: t('routes.demo.page.listBasic'),
          },
        },
      ],
    },
    // =============================list end=============================
  ],
};

export default page;
