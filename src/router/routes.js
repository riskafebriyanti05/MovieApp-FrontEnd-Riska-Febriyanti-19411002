
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dashboardAdmin', component: () => import('pages/admin/Index.vue') },
      { path: '/inputBarang', name: 'InputBarang', component: () => import('pages/admin/InputBarang.vue') },
      { path: '/datauser', name: 'user', component: () => import('pages/admin/DataUser.vue') },
      { path: '/dataDVD', name: 'dataDVD', component: () => import('pages/admin/DataDVD.vue') },
      { path: '/formedit/:id', name: 'formEditDVD', component: () => import('pages/admin/FormEdit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'Homeuser', component: () => import('pages/user/Index.vue') },
      { path: '/myorder', name: 'myOrder', component: () => import('pages/user/MyOrder.vue') }
    ]
  },
  {
    path: '/Login',
    name: 'LoginPage',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/Register',
    name: 'RegisterPage',
    component: () => import('pages/guest/Register.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
