<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link
          :to="`/home/message/detail/${message.id}/${message.title}`"
          >{{ message.title }}</router-link
        >&nbsp;&nbsp; -->

        <!-- 只能通过路由名字跳转路由并携带params参数，不能通过path跳转，to的对象写法 -->
        <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: message.id,
              title: message.title,
            },
          }"
        >
          {{ message.title }} </router-link
        >&nbsp;&nbsp;
        <button @click="pushShow(message)">push查看</button>&nbsp;&nbsp;
        <button @click="replaceShow(message)">replace查看</button>&nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(message) {
      console.log("调用push函数");
      this.$router.push({
        name: "xiangqing",
        params: {
          id: message.id,
          title: message.title,
        },
      });
    },
    replaceShow(message) {
      console.log("调用replace函数");
      this.$router.replace({
        name: "xiangqing",
        params: {
          id: message.id,
          title: message.title,
        },
      });
    },
  },
};
</script>
