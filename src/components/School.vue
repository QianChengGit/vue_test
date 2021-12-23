<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ Name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      Name: "电信学院",
      address: "成都",
    };
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
  padding: 5px;
}
</style>