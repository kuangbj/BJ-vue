import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index'
import Login from './views/login'
import About from './views/about'
import Cart from './views/cart'
import Contact from './views/contact'
import NewDetails from './views/new_details'
import News from './views/news'
import Product from './views/product'
import ProductDetails from './views/product_details'
import Register from './views/register'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:Index 
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/contact',
      component:Contact
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/ndetails',
      component:NewDetails
    },
    {
      path:'/product/:type',
      component:Product
    },
    {
      path:'/pdetails/:pid',
      component:ProductDetails
    }
  ]
})
