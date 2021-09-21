<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{ Name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="Name" />
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
