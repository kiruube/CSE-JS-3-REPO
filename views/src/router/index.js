import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentsDetailView from '../views/students/StudentsDetailView.vue'
import DepartmentsView from './../views/departments/DepartmentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StudentsDetailView
    },
    {
      path: '/students/detail',
      name: 'StudentsDetailView',
      component: StudentsDetailView
    },
    {
      path: '/departments',
      name: 'DepartmentsView',
      component: DepartmentsView
    }
  ]
})

export default router
