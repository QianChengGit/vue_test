import Vue from 'vue'
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

//安装全局事件总线x
// 将x放在Vue的原型对象上，任何组件都可以找到(看到)x
// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        //安装全局事件总线$bus（在vm放入页面前，简写放在beforeCreate钩子函数里才能生效）,全局的VC和vm都能看到它。
        Vue.prototype.$bus = this
    },
})
