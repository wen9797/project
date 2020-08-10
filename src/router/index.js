import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Roles from '../components/user/Roles.vue'
import Rights from '../components/user/Rights.vue'
import Goods from '../components/user/Goods.vue'
import Params from '../components/user/Params.vue'
import Categories from '../components/user/Categories.vue'
import Orders from '../components/user/Orders.vue'
import Reports from '../components/user/Reports.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { 
    path: '/home',
    component: Home,
    redirect:'/welcome',
    children:[{ path: '/welcome', component: Welcome } ,
             { path: '/users', component: Users },
             { path: '/roles', component: Roles },
             { path: '/rights', component: Rights},
             { path: '/goods', component: Goods },
             { path: '/params', component: Params },
             { path: '/categories', component: Categories },
             { path: '/orders', component: Orders},
             { path: '/reports', component: Reports},
            ] }
 
  
]
// router.beforeEach((to, from, next) => {
//    if(to.path === '/login') return next();

//    const tokenStr = window.sessionStorage.getItem('token')
//    if(!tokenStr) return next('/login')
  
// })

const router = new VueRouter({
  routes
})

export default router
