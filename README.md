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
>     		(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器；

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