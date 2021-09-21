export default {
    install(Vue, x, y) {
        console.log('计算传递的值的和：' + x + '+' + y + '=' + (x + y));
        // 定义全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 5)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            },

        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 101
                }
            },
        })
        // 给Vue原型上添加一个方法（vm和VC上就都能用了）
        Vue.prototype.hello = () => { alert('你好啊！') }
    }
}