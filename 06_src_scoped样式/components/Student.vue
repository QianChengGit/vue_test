<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名：{{ Name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
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
};
</script>

<style scoped>
.demo {
  background-color: rgb(0, 255, 42);
}
</style>