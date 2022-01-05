<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件绑定一个事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <Student v-on:atguigu="getStudentName" @demo="m1"></Student> -->
    <!-- 通过父组件给子组件绑定一个事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student" @click.native="show"></Student>
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
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    /*getStudentName(name) {
      console.log("App收到了学生名：", name);
      this.studentName = name;
    },*/
    m1() {
      console.log("demo事件被触发！");
    },
    show() {
      alert("student组件触发原生点击事件");
    },
  },
  mounted() {
    //  this.$refs.student.$on("atguigu", this.getStudentName);

    /*this.$refs.student.$on("atguigu", function (name) {
      console.log("App收到了学生名：", name);
      console.log(this);
      this.studentName = name;
    });*/

    this.$refs.student.$on("atguigu", (name) => {
      console.log("App收到了学生名：", name);
      console.log(this);
      this.studentName = name;
    });
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>