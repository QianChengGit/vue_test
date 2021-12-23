<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
      <MyFooter
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      console.log("我是App组件，我收到了数据：", todoObj);
      this.todos.unshift(todoObj);
    },
    // 勾选or取消勾选一个todo
    checkTodo(todoId) {
      this.todos.forEach((todo) => {
        if (todo.id === todoId) {
          todo.done = !todo.done;
          console.log(todo.id + ":" + todo.done);
        }
      });
    },
    // 删除一个todo
    deleteTodo(todoId) {
      // 把过滤出来的新数组重新赋值给todos
      this.todos = this.todos.filter((todo) => {
        return todo.id !== todoId;
      });
      console.log(todoId + ":被删除");
    },
    //全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        //函数体
        return !todo.done;
      });
    },
  },
  watch: {
    // 这样监视会出现勾选已完成事项,刷新页面后勾选内容丢失的bug,因为这样只能监视数组的变化，数组里的对象属性变化不能监视到。
    // todos(value) {
    //   localStorage.setItem("todos", JSON.stringify(value));
    // },

    // 深度监视
    todos: {
      deep: true, //开启深度监视
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>