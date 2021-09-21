<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学校名称：{{ Name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="hello">点我测试一下hello方法</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      Name: "电信学院dianxin",
      address: "成都",
    };
  },
};
</script>
