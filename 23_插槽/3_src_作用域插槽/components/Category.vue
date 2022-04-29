<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个作用域插槽（挖个坑，等着组件使用者进行填充），vue会将组件里的img标签填入这里 -->
    <slot :games="games" msg="hello"
      >我是默认值，当使用者没有传递具体结构时，我会出现1</slot
    >
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 400px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>