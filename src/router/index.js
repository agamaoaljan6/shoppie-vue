import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Productsindex from '@/components/Productsindex'
import Productsshowpage from '@/components/Productsshowpage'
import Login from '@/components/user/Login'
import Signup from '@/components/user/Signup'
import Userprofile from '@/components/user/Userprofile'
import Addproduct from '@/components/Addproduct'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/productsindex',
      name: 'Productsindex',
      component: Productsindex
    },
     {
       path: '/productsshow',
       name: 'Productsshowpage',
       component: Productsshowpage
     },
     {
       path: '/login',
       name: 'Login',
       component: Login
     },
      {
        path:'/signup',
        name: 'Signup',
        component: Signup
      },
      {
        path:'/userprofile',
        name: 'Userprofile',
        component: Userprofile
      },
       {
         path: '/addproduct',
         name: 'Addproduct',
         component: Addproduct
       }
  ]
})
