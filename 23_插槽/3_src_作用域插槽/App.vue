<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(item, index) in atguigu.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games,msg}">
        <ol>
          <li v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
        <h4>{{ msg }}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>
<style lang="css" scope>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>