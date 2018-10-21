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

// 二级路由
import Abstract from './components/about/Abstract'
import Partner from './components/about/Partner'
import Source from './components/about/Source'
import Contact from './components/about/Contact'

// 三级路由
import Phone from './components/about/contact/Phone'
import Person from './components/about/contact/Person'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'homeLink', component: Home},
    {path: '/admin', name: 'adminLink', component: Admin},
    {path: '/menu', component: Menu},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/about', redirect: '/contact', component: About, children: [
        {path: '/about/abstract', name: 'abstractLink', component: Abstract},
        {path: '/partner', name: 'partnerLink', component: Partner},
        {path: '/source', name: 'sourceLink', component: Source},
        {path: '/contact', redirect: '/person', name: 'contactLink', component: Contact, children: [
            {path: '/phone', name: 'phoneNumber', component: Phone},
            {path: '/person', name: 'personName', component: Person}
        ]}
    ]},
    {path: '*', redirect: '/'}
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
