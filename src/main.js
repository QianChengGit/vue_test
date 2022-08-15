// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用ElementUI组件库
Vue.use(ElementUI);

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})