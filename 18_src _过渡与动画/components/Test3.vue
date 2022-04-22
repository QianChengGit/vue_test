<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="xxx">标签可以有name属性，
        设置了name属性，css动画名就不能是'v-'开头，
        应该是name属性的值'xxx-'开头。 -->
    <!-- 使用Animate第三方动画库 -->
    <transition-group
      name="animate__animated animate__bounce"
      :appear="true"
      enter-active-class="animate__swing"
      leave-active-class="animate__bounceInUp"
    >
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: chocolate;
}
</style>