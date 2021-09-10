<template>
  <div>
      <!-- 传递值到Student子组件 -->
      <Student studentName="Tom" sex="男" :age="22"></Student>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            Student
        }
    }
</script>
