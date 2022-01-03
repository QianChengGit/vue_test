<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件绑定一个事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <Student v-on:atguigu="getStudentName"></Student> -->
    <!-- 通过父组件给子组件绑定一个事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊！",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名：", name);
    },
  },
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName);
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>