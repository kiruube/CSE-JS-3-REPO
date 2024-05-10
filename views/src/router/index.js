import { createRouter, createWebHistory } from 'vue-router'
import StudentsDetailView from '../views/students/StudentsDetailView.vue'
import DepartmentsView from './../views/departments/DepartmentsView.vue'
import DepartmentsDetailView from './../views/departments/DepartmentsDetailView.vue'
import DepartmentRegistrationView from './../views/departments/DepartmentRegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StudentsDetailView
    },
    {
      path: '/students/register',
      name: 'StudentsDetailView',
      component: StudentsDetailView
    },
    {
      path: '/students',
      name: 'StudentsDetailView',
      component: StudentsDetailView
    },
    {
      path: '/students/detail',
      name: 'StudentsDetailView',
      component: StudentsDetailView
    },
    {
      path: '/departments/register',
      name: 'DepartmentsRegistrationView',
      component: DepartmentRegistrationView
    },
    {
      path: '/departments',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/departments/detail',
      name: 'DepartmentsDetailsView',
      component: DepartmentsDetailView
    },
    {
      path: '/courses/register',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/courses',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/courses/detail',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/partners/register',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/partners',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/partners/detail',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/staff/register',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/staff',
      name: 'DepartmentsView',
      component: DepartmentsView
    },
    {
      path: '/staff/detail',
      name: 'DepartmentsView',
      component: DepartmentsView
    }  
  ]
})

export default router
