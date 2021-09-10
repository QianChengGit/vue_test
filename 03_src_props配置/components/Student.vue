<template>
    <!-- 组件的结构 -->
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <!-- 不能直接修改props里的属性，需要复制一份到data中，然后修改data中的属性。 -->
        <button @click="updateAge">修改传递过来的年龄</button>
    </div> 
</template>

<script>
//组件交互相关的代码（数据、方法等等）
//export default Vue.extend({})可以简写为：export default {}
    export default {
        name:'Student',
        data(){
            return {
                msg:'学生的详细个人信息',
                myAge:this.age //复制props里的age属性到myAge，然后修改（不能直接修改props里的age属性）
            }
        },
        //简单接收传递过来的数据(要想接收数据为number类型，需传递时在属性前面添加v-bind:age="22"，简写：:age="22")
        //props:['studentName','age','sex'],
        //接收传递过来的数据，并限制数据类型
        /*props:{
            studentName:String,
            sex:String,
            age:Number
        },*/
        //接收传递过来的数据，并限制数据类型和是否必须传值
        props:{
            studentName:{
                type:String,//限制studentName属性的数据类型为String
                required:true//限制studentName属性为必须的（必须传入数据）
            },
            sex:{
                type:String,//限制sex属性的数据类型为String
                required:true//限制sex属性为必须的（必须传入数据）
            },
            age:{
                type:Number,//限制age属性的数据类型为Number
                default:99//age属性为可传，也可以不传，不传值就使用默认值99
            },
        },
        methods:{
            updateAge(){
                this.myAge++
            }
        },
    }
</script>
