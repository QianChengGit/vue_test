<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名字：{{studentName}}</h2>
        <h2>年龄：{{age}}</h2>
    </div> 
</template>

<script>
//组件交互相关的代码（数据、方法等等）
//export default Vue.extend({})可以简写为：export default {}
    export default {
        name:'Student',
        data(){
            return {
                studentName:'Tom',
                age:22
            }
        },
    }
</script>