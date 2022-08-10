// 该文件用于创建整个应用的路由器

// 引入VueRouter插件
import VueRouter from 'vue-router'
// 引入自定义组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',//给路由取一个名字
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',//给路由取一个名字
                            path: 'detail/:id/:title',//传递params参数要给路径加参数占位符
                            component: Detail,
                        },
                    ],
                },
                {
                    path: 'news',
                    component: News,
                },
            ],
        },]
})

// 导出路由
export default router