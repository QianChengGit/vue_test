<template>
  <ul>
    <li :style="{ opacity }"><h2>欢迎来学习</h2></li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("News组件即将被销毁");
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },

  // 路由组件特有的两个生命周期钩子函数
  // 路由组件激活时调用
  activated() {
    console.log("News组件激活");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  // 路由组件失活时调用
  deactivated() {
    console.log("News组件失活");
    clearInterval(this.timer);
  },
};
</script>
