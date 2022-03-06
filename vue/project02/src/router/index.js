import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import HelloView from '../views/HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hello',
    name: 'hello',
    // component: HelloView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "hello" */ '../views/HelloView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
<<<<<<< HEAD
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
=======
>>>>>>> cc4a13571bed5d11a9231e704c9c43778e85fad8
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
