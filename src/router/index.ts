import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import OrganizationDataForm from '../views/OrganizationDataForm.vue'
import Preview from '../views/Preview.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/organization-data',
  },
  {
    path: '/organization-data',
    name: 'OrganizationDateForm',
    component: OrganizationDataForm,
  },
  {
    path: '/preview/:data',
    name: 'Preview',
    component: Preview,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
