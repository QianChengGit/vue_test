<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    // getStudents() {
    //   axios.get("https://hexo-friendcircle3-api-sigma.vercel.app/api").then(
    //     (response) => {
    //       console.log("请求成功", response.data);
    //     },
    //     (error) => {
    //       console.log("请求失败", error.message);
    //     }
    //   );
    // },
    getStudents() {
      // 当请求http://localhost:8080/atguigu/students时，代理会自动去除/atguigu前缀。真实请求路径为：代理服务器连接+/students
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>