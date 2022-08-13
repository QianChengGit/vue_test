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
            meta: { title: '关于' },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { title: '消息', isAuth: true },//配置元数据：页面标题属性、是否需要鉴权属性
                    children: [
                        {
                            name: 'xiangqing',//给路由取一个名字
                            path: 'detail/:id/:title',//传递params参数要给路径加参数占位符
                            component: Detail,
                            meta: { title: '详情', isAuth: true },//配置元数据：页面标题属性、是否需要鉴权属性
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
                    meta: { title: '新闻', isAuth: true },//配置元数据：页面标题属性、是否需要鉴权属性
                    beforeEnter(to, from, next) {
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
                    },
                },
            ],
        },]
})

// 全局前置路由守卫(初始化的时候调用，每一次路由切换之前调用)
/*router.beforeEach((to, from, next) => {
    console.log('前置路由守卫：\n从哪里来：\n', from, '\n想去哪：\n', to);
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

})*/

// 全局后置路由守卫(初始化的时候调用，每一次路由切换之后调用,没有next函数)
router.afterEach((to, from) => {
    console.log('后置路由守卫；\n从哪里来：\n', from, '\n想去哪：\n', to);
    // 设置页面标题
    document.title = to.meta.title || '硅谷系统'
})

// 导出路由
export default router