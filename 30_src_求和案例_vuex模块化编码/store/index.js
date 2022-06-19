// 该文件用于创建Vuex中最核心的store
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入配置
import countOptins from './count'
import personOptins from './person'
//使用插件
Vue.use(Vuex)


// // 求和相关的配置
// const countOptins = {
//     namespaced: true,
//     actions: {
//         jiaOdd(context, value) {
//             console.log("actions中的jiaOdd被调用了");
//             if (context.state.sum % 2) {
//                 context.commit('JIA', value)
//             }
//         },
//         jiaWait(context, value) {
//             console.log("actions中的jiaWait被调用了");
//             setTimeout(() => {
//                 context.commit('JIA', value)
//             }, 500);

//         },
//     },
//     mutations: {
//         JIA(state, value) {
//             console.log("mutations中的JIA被调用了");
//             state.sum += value
//         },
//         JIAN(state, value) {
//             console.log("mutations中的JIAN被调用了");
//             state.sum -= value
//         },
//     },
//     state: {
//         sum: 0, //当前的和
//         school: '尚硅谷',
//         subject: '前端',
//     },
//     getters: {
//         bigSum(state) {
//             return state.sum * 10
//         }
//     },
// }

// 人员管理相关的配置
// const personOptins = {
//     namespaced: true,
//     actions: {
//         addPersonWang(context, value) {
//             if (value.name.indexOf('王') === 0) {
//                 context.commit('ADD_PERSON', value)
//             } else {
//                 alert('不姓王，不能添加！')
//             }
//         },
//     },
//     mutations: {
//         ADD_PERSON(state, value) {
//             console.log("mutations中的ADD_PERSON被调用了");
//             state.personList.unshift(value)
//         },
//     },
//     state: {
//         personList: [
//             { id: '001', name: '张三' },
//         ],
//     },
//     getters: {
//         firstPersonName(state) {
//             return state.personList[0].name
//         },
//     },
// }

// 暴露并创建store
export default new Vuex.Store({
    modules: {
        countAbout: countOptins,
        personAbout: personOptins,
    }
})

