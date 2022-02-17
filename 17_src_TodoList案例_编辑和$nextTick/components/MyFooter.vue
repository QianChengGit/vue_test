<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span
      >/全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  // props: ["todos", "checkAllTodo", "clearAllTodo"],
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
    total() {
      return this.todos.length;
    },
    // isAll() {
    //   return this.doneTotal === this.total && this.total > 0;
    // },
    // 控制全选框
    isAll: {
      // 全选框是否勾选
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      // isAll被修改时set被调用
      set(value) {
        // 使用props的方式让子组件给父组件传递数据
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value); //使用自定义事件的方式让子组件给父组件传递数据
      },
    },
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },
    // 清空所有已完成
    clearAll() {
      // 使用props的方式让子组件给父组件传递数据
      // this.clearAllTodo();
      this.$emit("clearAllTodo"); //使用自定义事件的方式让子组件给父组件传递数据
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