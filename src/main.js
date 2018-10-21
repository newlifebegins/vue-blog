// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
    routes,
    mode: 'history',     // 取消掉#
    scrollBehavior(to, from, savedPosition) {
        // savedPosition 记录当前滚动的位置
        // return { x: 0, y: 100 }
        // return { selector: '.btn' }
        if(savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 100 }
        }
    }
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//     if(to.path == '/login' || to.path == '/register') {
//         next()
//     } else {
//         alert('您还没有登录，请先登录！');
//         next('/login')
//     }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
