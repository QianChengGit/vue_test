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
    console.log("About组件挂载完毕！", this);
    window.AboutRoute = this.$route;
    window.AboutRouter = this.$router;
  },
};
</script>
