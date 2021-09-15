import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 全局引入一个混合
// import {mixins01,mixins02} from './mixin'
// Vue.mixin(mixins01)
// Vue.mixin(mixins02)

new Vue({
    el:'#app',
    render:h => h(App),
})
