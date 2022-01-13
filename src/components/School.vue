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
  mounted() {
    // console.log("School", this.x);
    //自身没有x，找到了vue原型上的x,并绑定名为hello的自定义事件
    // this.x.$on("hello", (data) => {
    //   console.log("我是School组件收到了数据：", data);
    // });

    this.$bus.$on("hello", (data) => {
      console.log("我是School组件收到了数据：", data);
    });
  },
  beforeDestroy() {
    //在组件销毁时，调用beforeDestroy钩子函数销毁组件绑定的全局自定义事件，减少资源消耗。
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
  padding: 5px;
}
</style>