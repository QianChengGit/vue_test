<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名字：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示</button>
    </div> 
</template>

<script>
//组件交互相关的代码（数据、方法等等）
//export default Vue.extend({})可以简写为：export default {}
    export default {
        name:'School',
        data(){
            return {
                schoolName:'电信学院',
                address:'北京'
            }
        },
        methods: {
            showName(){
                console.log(this.schoolName)
            }
        },
    }
</script>

    
<style>
/* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>