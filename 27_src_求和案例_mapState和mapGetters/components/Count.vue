<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍后为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    // 靠程序员亲自去写的计算属性
    /*sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    },*/

    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    // 前面的key为生成的计算属性名，后面的value为state中读取的数据名
    // ...mapState({ he: "sum", xuexiao: "school", xueke: "subject" }),

    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    // 生成的计算属性名与state中读取的数据名一致
    ...mapState(["sum", "school", "subject"]),

    /* *************************************************** */
    // 靠程序员亲自去写的计算属性
    /*bigSum() {
      return this.$store.getters.bigSum;
    },*/

    // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
    // 前面的key为生成的计算属性名，后面的value为getters中读取的数据名
    // ...mapGetters({ daSum: "bigSum" }),

    // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    // 生成的计算属性名与getters中读取的数据名一致
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      // this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    const x = mapState({ he: "sum", xuexiao: "school", xueke: "subject" });
    console.log(x);
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>