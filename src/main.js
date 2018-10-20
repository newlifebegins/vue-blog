// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/admin', component: Admin},
    {path: '/menu', component: Menu},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/about', component: About}
]
const router = new VueRouter({
    routes,
    mode: 'history'     // 取消掉#
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
