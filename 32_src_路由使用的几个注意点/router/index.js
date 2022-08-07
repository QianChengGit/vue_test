// 该文件用于创建整个应用的路由器

// 引入VueRouter插件
import VueRouter from 'vue-router'
// 引入自定义组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        },]
})

// 导出路由
export default router