<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名：{{ Name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      Name: "张三",
      sex: "男",
    };
  },
  mounted() {
    // console.log("Student", this.x); //自身没有，找到了vue原型上的x
  },
  methods: {
    sendStudentName() {
      //自身没有x，找到了vue原型上的x,并触发名为hello的自定义事件，并传递一个值
      // this.x.$emit("hello", this.Name);

      this.$bus.$emit("hello", this.Name);
    },
  },
};
</script>

<style scoped>
.student {
  background-color: rgb(0, 255, 42);
  padding: 5px;
  margin-top: 30px;
}
</style>