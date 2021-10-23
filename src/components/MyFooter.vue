<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span
      >/全部{{ todos.length }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    doneTotal() {
      // 简单遍历实现
      // let n = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done) {
      //     n++;
      //   }
      // });
      // return n;

      // 使用数组的条件统计函数
      // return this.todos.reduce((pre, current) => {
      //   return pre + (current.done ? 1 : 0);
      // }, 0);

      // 使用数组的条件统计函数(箭头函数体里只有一行代码可以精简一下)
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>