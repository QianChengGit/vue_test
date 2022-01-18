<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ Name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
//引入pubsub-js库实现消息发布与订阅
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      Name: "电信学院",
      address: "成都",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log("有人发布了hello消息，hello消息的回调执行了:", msgName, data);
      console.log(this);
    },
  },
  mounted() {
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School组件收到了数据：", data);
    // });
    // 订阅消息
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    //在组件销毁时，调用beforeDestroy钩子函数销毁组件绑定的全局自定义事件，减少资源消耗。
    // this.$bus.$off("hello");
    // 取消订阅
    pubsub.unsubcribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
  padding: 5px;
}
</style>