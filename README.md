# web-page

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
#### 使用vue-cli3版本构建多页面,已经引入了element-ui,axios,vuex

>目录说明

    采用的vue-cli3.x版本,没有了2.x版本的statics和config目录
    vue-cli3.x版本的主要配置是使用根目录下vue.config.js文件进行配置,
    比如配置代理服务器地址,多页面文件

    新建多页面的时候,直接在src目录下新建类似index这种的文件夹,然后进行修改,
    最后在vue.config.js的pages配置下安装secpage的样子配置就会生成一个新的页面

    src源代码目录:
        api: 存放网络请求接口配置,建议分模块文件.user为user.js,login为login.js,
        比如示例test模块为test.js
        assets: 会经webpack处理的图片,通常开发的图片不推荐存放在这,存放到/public/images/下.
        components: 公用的组件
        config: 网络URL路径配置,开发会读取dev.env.js,生产读取pro.env.js
        plugins: element-ui插件生成的.开发中不需要去修改
        utils: 工具类,比如已经封装好的request.js网络请求封装工具类
        store.js: vuex存储数据的store,可以在各个页面中共用
        pages: 多页面目录
            index: 默认的首页
            login: 登录页

    项目目录已设置的别名: 引用文件路径的时候不用一大串的写相对路径的点了
        @: src目录
        ~: public目录

    title.js 配置多页面每个页面的title
      