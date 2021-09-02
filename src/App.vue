<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
      <School id="sch" ref="sch"></School>
  </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        data() {
            return {
                msg:'欢迎您！',
            }
        },
        methods:{
            showDOM(){
                // 原生js获取真实DOM元素
                // console.log(document.getElementById('title'));
                // Vue中获取真实DOM元素
                // console.log(this.$refs.title);
                // console.log(this.$refs);

                //document.getElementById()与this.$refs的区别
                console.log(this.$refs.sch);//获取School组件实例的真实DOM元素(vc)
                console.log(document.getElementById('sch'));//获取School组件的真实DOM元素
            }
        },
        
    }
</script>
