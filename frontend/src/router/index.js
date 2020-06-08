import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import singlePlay from "../views/singlePlay";
import createRoom from "../views/createRoom";
import logIn from "../views/logIn";
import multiPlayer from "../views/multiPlayer";
import multiPlay from "../views/multiPlay";
import winner from "../views/winner";
import playerLogin from "../views/playerLogin";

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
    },
    {
      path:'/logIn',
      name:'logIn',
      component: logIn
    },
    {
      path:'/multiPlayer',
      name:'multiPlayer',
      component: multiPlayer
    },
    {
      path:'/playerLogin',
      name:'playerLogin',
      component: playerLogin
    },
    {
      path:'/multiPlay',
      name:'multiPlay',
      component: multiPlay
    },
    {
      path:'/winner',
      name:'winner',
      component: winner
    }
]

const router = new VueRouter({
  routes
})

export default router
