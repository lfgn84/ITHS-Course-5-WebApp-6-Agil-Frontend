import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import singlePlay from "../views/singlePlay";
import createRoom from "../views/createRoom";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
     path:'/singlePlay',
      name: 'singlePlay',
      component: singlePlay
    },
    {
      path:'/createRoom',
      name:'createRoom',
      component: createRoom
    }
]

const router = new VueRouter({
  routes
})

export default router
