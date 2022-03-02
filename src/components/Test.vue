<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="xxx">标签可以有name属性，
        设置了name属性，css动画名就不能是'v-'开头，
        应该是name属性的值'xxx-'开头。 -->
    <transition name="hello" :appear="true">
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
/* 触发进入动画 */
.hello-enter-active {
  animation: atguigu 0.5s linear;
}
/* 触发离开动画 */
.hello-leave-active {
  animation: atguigu 0.5s linear reverse;
}
/* 定义关键帧 */
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>