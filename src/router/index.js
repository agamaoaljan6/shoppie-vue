import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
// Products Components
import Index from '@/components/products/Index'
import Show from '@/components/products/Show'
import Add from '@/components/products/Add'
import Edit from '@/components/products/Edit'
// User Components
import Login from '@/components/user/Login'
import Signup from '@/components/user/Signup'
import Userprofile from '@/components/user/Userprofile'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/:product_slug',
      name: 'Index',
      component: Index
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/userprofile',
      name: 'Userprofile',
      component: Userprofile
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/editproduct/:product_slug',
      name: 'Edit',
      component: Edit
    }
  ]
})
