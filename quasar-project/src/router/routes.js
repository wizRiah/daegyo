const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'teacher/mypage',
        component: () => import('src/pages/teacher/mypage.vue'),
      },
      {
        path: 'teacher/mypage/select-resume',
        component: () => import('src/pages/teacher/mypage/select-resume.vue'),
      },
      {
        path: 'teacher/mypage/manage-resume',
        component: () => import('src/pages/teacher/mypage/manage-resume.vue'),
      },
      {
        path: 'teacher/mypage/applications',
        component: () => import('src/pages/teacher/mypage/applications.vue'),
      },
      {
        path: 'teacher/mypage/certificates',
        component: () => import('src/pages/teacher/mypage/certificates.vue'),
      },
      {
        path: 'teacher/mypage/recommend',
        component: () => import('src/pages/teacher/mypage/recommend.vue'),
      },
      {
        path: 'teacher/mypage/match',
        component: () => import('src/pages/teacher/mypage/match.vue'),
      },
      {
        path: 'teacher/mypage/scrap',
        component: () => import('src/pages/teacher/mypage/scrap.vue'),
      },
      {
        path: 'teacher/mypage/cart',
        component: () => import('src/pages/teacher/mypage/cart.vue'),
      },
      {
        path: 'teacher/mypage/viewed-academy',
        component: () => import('src/pages/teacher/mypage/viewed-academy.vue'),
      },
      {
        path: 'teacher/mypage/requested-academy',
        component: () =>
          import('src/pages/teacher/mypage/requested-academy.vue'),
      },
      {
        path: 'teacher/mypage/manage-files',
        component: () => import('src/pages/teacher/mypage/manage-files.vue'),
      },
      {
        path: 'teacher/mypage/set-alarm',
        component: () => import('src/pages/teacher/mypage/set-alarm.vue'),
      },
      {
        path: 'teacher/mypage/access-history',
        component: () => import('src/pages/teacher/mypage/access-history.vue'),
      },
      //나중에 지움
      {
        path: '',
        component: () => import('src/pages/test_page.vue'),
      },
    ],
  },
  // {
  //   path: '/sub',
  //   component: () => import('layouts/SubLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/sub/IndexPage.vue') },
  //     { path: 'sub-page-1', component: () => import('pages/sub/SubPage1.vue') },
  //     { path: 'sub-page-2', component: () => import('pages/sub/SubPage2.vue') },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
