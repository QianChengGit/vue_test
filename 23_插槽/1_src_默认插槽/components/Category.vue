<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <!-- 定义插槽（挖个坑，等着组件使用者进行填充），vue会将组件里的img标签填入这里 -->
      <slot>我是默认值，当使用者没有传递具体结构时，我会出现</slot>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>