<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学校名称：{{Name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>坐标x：{{x}}，坐标y：{{y}}</h2>
    </div> 
</template>

<script>
    // 局部引入一个混合
    import {mixins01,mixins02} from '../mixin.js'
    //组件交互相关的代码（数据、方法等等）
    //export default Vue.extend({})可以简写为：export default {}
    export default {
        name:'School',
        data(){
            return {
                Name:'电信学院',
                address:'成都',
                x:600,
                y:500,
            }
        },
        mixins:[mixins01,mixins02]//注册使用混合
    }
</script>
