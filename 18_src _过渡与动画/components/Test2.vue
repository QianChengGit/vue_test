<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="xxx">标签可以有name属性，
        设置了name属性，css动画名就不能是'v-'开头，
        应该是name属性的值'xxx-'开头。 -->
    <!-- 如果有多个标签实现动画，就使用<transition-group name="xxx">，
          并且为每个标签加上key属性。 -->
    <transition-group name="hello" :appear="true">
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
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
  /* transition: 0.5s linear; */
}
/* 触发过渡效果，进入的过程中，离开的过程中 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的起点、离开的终点*/
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}
</style>