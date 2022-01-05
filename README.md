# vue脚手架项目学习笔记
>脚手架文档地址：https://cli.vuejs.org/zh
>
>要运行那个demo就将文件夹名改为src，比如：要运行【 01_src_分析脚手架】就将名字改为【src】
## 1.脚手架文件结构：

&emsp;&emsp;在项目根目录使用命令：tree /f > xxx.txt 命令获得项目目录结构。

    ├─node_modules              
    ├─public
    │     ├─favicon.ico //页签图标
    │     └─index.html //主页面
    │      
    ├─src  
    │   ├─assets //存放静态资源
    │   │     └─logo.png
    │   │      
    │   ├─components //存放组件
    │   │      ├─School.vue
    │   │      └─Student.vue
    │   ├─App.vue //汇总所有组件
    │   └─main.js //入口文件
    ├─.gitignore //git版本管理忽略的配置
    ├─babel.config.js //babel的配置文件
    ├─package-lock.json //依赖包的版本控制文件
    ├─package.json //应用的依赖包配置文件
    ├─README.md //应用描述文件
    ├─vue.config.js //vue脚手架配置文件

## 2.关于不同版本的Vue(render函数的使用)：

  - **1.vue.js与vue.runtime.xxx.js的区别：**
    
>     (1).vue.js是完整版的Vue，包含：核心功能+模板解析器；  
>     (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器；

  - **2.因为vue.runtime.xxx.js没有模板解析器，所以不能用template配置项，需要使用render函数
     接收到createElement函数去指定具体内容；**

## 3.vue.config.js配置文件：

> 使用vue inspect > output.js可以查看Vue脚手架的默认配置。
>
> 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## 4.ref属性：
   &emsp;1.被用来给元素或子组件注册引用信息（id的替代者）；

   &emsp;2.应用在HTML标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（VC）；

   &emsp;3.使用方式：
>      打标识：<h1 ref="xxx"></h1>或<School ref="xxx"></School>；
>      获取：this.$refs.xxx；

## 5.配置项props：
    功能：让组件接收外部传递过来的数据。
    (1).传递数据：
        <Demo studentName="xxx" sex="男" :age="22"></Demo>
    (2).接收数据：
        第一种方式（只接收）：
            props:['studentName','age','sex'],
        第二种方式（限制类型）：
            props:{
              studentName:String,
              sex:String,
              age:Number
            },
        第三种方式（限制类型、限制必要性、指定默认值）：
            props:{
              studentName:{
                  type:String,//限制studentName属性的数据类型为String
                  required:true//限制studentName属性为必须的（必须传入数据）
              },
              sex:{
                  type:String,//限制sex属性的数据类型为String
                  required:true//限制sex属性为必须的（必须传入数据）
              },
              age:{
                  type:Number,//限制age属性的数据类型为Number
                  default:99//age属性为可传，也可以不传，不传值就使用默认值99
              },
            },
    备注：props属性是只读的，Vue底层会监视你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制一份props里的需要修改的属性到data里，然后去修改data中的数据。  

## 6.mixin(混入)：
    功能：可以把多个组件共用的配置提取成一个混入对象。
    使用方式：
        第一步定义混合，列如：
            {
                data() {
                    ......
                },
                methods:{
                    ......
                },
                mounted() {
                   ......
                },
                ......
            }
        第二步使用混合，列如：
            import {xxx,xxx} from '../xxx.js'
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixins:[xxx,xxx]
    备注：当组件中的属性和混入中的属性有冲突（相同）时，以组件自己的为主。但是组件中的钩子函数与混入的钩子函数有冲突（相同）时，两个都会使用。
## 7.插件：
    功能：用于增强Vue。
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
         对象.install = function (Vue,options) {
            console.log('这是一个插件！');
            // 定义全局过滤器
            Vue.filter(...)
    
            // 定义全局指令
            Vue.directive(...)
    
            // 定义混入
            Vue.mixin(...)
            // 给Vue原型上添加一个方法（vm和VC上就都能用了）
            Vue.prototype.hello = () => { alert('你好啊！') }
        }
    使用插件：Vue.use(xxx)
## 8.scoped样式：
    作用：让样式在组件局部生效，防止同名冲突。
    写法：
        <style scoped>
            ......
        </style>
## 9.总结todoList案例

1. 组件化编码流程：

	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

	&emsp;&emsp;(1).一个组件在用：放在组件自身即可。

	&emsp;&emsp;(2).一些组件在用：放在他们共同的父组件上（状态提升）。

	(3).实现交互：从绑定事件开始。

2. props适用于：

	(1).父组件：子组件 通信

	(2).子组件：父组件 通信（要求父组件先给子组件一个函数）

3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可修改的。

4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 10.webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

2. 浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制。

3. 相关API：

	&emsp;&emsp;1.xxxxStorage.setItem('key','value');

	&emsp;&emsp;&emsp;&emsp;该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

	&emsp;&emsp;2.xxxxStorage.getItem('key');

	&emsp;&emsp;&emsp;&emsp;该方法接受一个键名作为参数，返回键名对应的值。

	&emsp;&emsp;3.xxxxStorage.removeItem('key');

	&emsp;&emsp;&emsp;&emsp;该方法接受一个键名作为参数，并把该键名和其对应的值从存储中删除。

	&emsp;&emsp;4.xxxxStorage.clear();

	&emsp;&emsp;&emsp;&emsp;该方法会清空存储中的所有数据。

4. 备注：

	&emsp;&emsp;1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。

	&emsp;&emsp;2.LocalStorage存储的内容，需要手动清除才会消失。

	&emsp;&emsp;3.xxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。

	&emsp;&emsp;4.JSON.parse(null)的结果依然是null。

## 11.组件的自定义事件

1. 一种组件间通信的方式，适用于：<font style="color: red;">**子组件===>父组件**</font>

2. 使用场景：A是父组件，B是子组件，B想给A传递数据，那么就要在A中给B绑定自定义事件（<font style="color: red;">事件的回调在A中</font>）。

3. 绑定自定义事件：

	1. 第一种方式，在父组件中：`<Demo @atguigu="test"/>` 或 `<Demo v-on:atguigu="test"/>` 

	2. 第二种方式，在父组件中：

		```js
		<Demo ref="demo"/>
		......
		mounted(){
			this.$refs.xxx.$on('atguigu',this.test)
		}
		```

	3. 若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。

4. 触发自定义事件：this.$emit('atguigu',数据)

5. 解绑自定义事件：this.$off('atguigu')

6. 组件上也可以绑定原生DOM事件，需要使用native修饰符。

7. 注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，<font style="color: red;">回调要么配置在methods中，要么用箭头函数</font>，否则this指向会出问题。