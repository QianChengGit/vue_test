# vue_test笔记
脚手架文档地址：https://cli.vuejs.org/zh

## 脚手架文件结构：

在项目根目录使用命令：tree /f > xxx.txt 命令获得项目目录结构。

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

## 关于不同版本的Vue：

  - 1.vue.js与vue.runtime.xxx.js的区别：
    
     (1).vue.js是完整版的Vue，包含：核心功能+模板解析器；
  
     (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器；
  
  - 2.因为vue.runtime.xxx.js没有模板解析器，所以不能用template配置项，需要使用render函数
     接收到createElement函数去指定具体内容；

## vue.config.js配置文件：
> 使用vue inspect > output.js可以查看Vue脚手架的默认配置。
>
> 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh


