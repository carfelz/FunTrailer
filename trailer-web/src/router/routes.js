
const routes = [
  {
    path: '/',
    component: () => import('layouts/OrderLayout.vue'),
    children: [
      { path: '', component: () => import('components/Home') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
