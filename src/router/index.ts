import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import OrganizationDataForm from '../views/OrganizationDataForm.vue'
import ProjectTasksForm from '../views/ProjectTasksForm.vue'
import TeamScheduleForm from '../views/TeamScheduleForm.vue'
import PersonalScheduleForm from '../views/PersonalScheduleForm.vue'
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
    path: '/project-tasks',
    name: 'projectTasksForm',
    component: ProjectTasksForm,
  },
  {
    path: '/project-schedule',
    name: 'teamScheduleForm',
    component: TeamScheduleForm,
  },
  {
    path: '/personal-schedule',
    name: 'personalScheduleForm',
    component: PersonalScheduleForm,
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
