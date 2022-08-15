<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /*beforeDestroy() {
    console.log("About组件即将被销毁！");
  },*/
  mounted() {
    // console.log("About组件挂载完毕！", this);
    window.AboutRoute = this.$route;
    window.AboutRouter = this.$router;
  },
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("组件内beforeRouteEnter");
    if (to.meta.isAuth) {
      //判断是否需要鉴权
      if (localStorage.getItem("school") === "atguigu") {
        console.log("school值为atguigu");
        // 放行
        next();
      } else {
        console.log("school值不是atguigu");
        alert("学校不是atguigu，无权限查看");
      }
    } else {
      // 直接放行
      next();
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("组件内beforeRouteLeave");
    next();
  },
};
</script>
