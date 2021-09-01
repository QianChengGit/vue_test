<template>
  <div>
      <h1 v-text="msg"></h1>
      <School></School>
  </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'欢迎您！',
            }
        },
        components:{
            School
        }
    }
</script>
