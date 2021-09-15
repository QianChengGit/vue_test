<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学生姓名：{{Name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>坐标x：{{x}}，坐标y：{{y}}</h2>
    </div> 
</template>

<script>
    // 局部引入一个混合
    import {mixins01,mixins02} from '../mixin.js'
    //组件交互相关的代码（数据、方法等等）
    //export default Vue.extend({})可以简写为：export default {}
    export default {
        name:'Student',
        data(){
            return {
                Name:'张三',
                sex:'男'
            }
        },
        mixins:[mixins01,mixins02],//注册使用混合
        mounted() {
            console.log("你好啊！！！");
        },
    }
</script>
