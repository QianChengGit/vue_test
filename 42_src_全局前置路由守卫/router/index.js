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
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true },//配置是否需要鉴权
                    children: [
                        {
                            name: 'xiangqing',//给路由取一个名字
                            path: 'detail/:id/:title',//传递params参数要给路径加参数占位符
                            component: Detail,
                            // props的第一种写法，值为对象,该对象里的所有key-value都会props的形式传给Detail组件。
                            // props: { a: 1, b: 'hello' },

                            // props的第二种写法，值为布尔值,如果布尔值为真就会把路由组件收到的params参数，以props的形式传递给Detail组件。
                            props: true,

                            // props的第三种写法，值为函数,函数返回值里的所有key-value都会props的形式传给Detail组件。
                            // props($route) {
                            //     return { id: $route.query.id, title: $route.query.title }
                            // },
                        },
                    ],
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true },//配置是否需要鉴权
                },
            ],
        },]
})

// 全局前置路由守卫(初始化的时候调用，每一次路由切换之前调用)
router.beforeEach((to, from, next) => {
    console.log('从哪里来：\n', from, '\n想去哪：\n', to);
    // 第一种写法
    // if (to.path === '/home/news' || to.name === 'xiaoxi') {//判断是否需要鉴权
    //     if (localStorage.getItem('school') === 'atguigu') {
    //         console.log('school值为atguigu');
    //         // 放行
    //         next()
    //     } else {
    //         console.log('school值不是atguigu');
    //         alert('学校不是atguigu，无权限查看')
    //     }
    // } else {
    //     // 直接放行
    //     next()
    // }

    // 第二种写法
    if (to.meta.isAuth) {//判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            console.log('school值为atguigu');
            // 放行
            next()
        } else {
            console.log('school值不是atguigu');
            alert('学校不是atguigu，无权限查看')
        }
    } else {
        // 直接放行
        next()
    }

})

// 导出路由
export default router