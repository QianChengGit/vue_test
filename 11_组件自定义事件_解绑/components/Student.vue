<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名：{{ Name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名字给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例对象（VC）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      Name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
    sendStudentName() {
      //触发Student组件实例对象身上的atguigu事件
      this.$emit("atguigu", this.Name);
      //触发Student组件实例对象身上的m1事件
      // this.$emit("demo");
    },
    unbind() {
      //解绑一个自定义事件
      this.$off("atguigu");
      //解绑多个自定义事件
      // this.$off(["atguigu", "demo"]);
      //解绑所有的自定义事件
      // this.$off();
    },
    death() {
      this.$destroy(); //销毁了当前组件的实例,销毁后所有Student实例的自定义事件全都不奏效。
    },
  },
};
</script>

<style scoped>
.student {
  background-color: rgb(0, 255, 42);
  padding: 5px;
  margin-top: 30px;
}
</style>