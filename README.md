# first

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```
现在我要测试SSR模式
让我们一步一步来看
1.看看他的package.json
  |-运行 npm run dev 
     |-启动 node 服务 
        |-那就来到根目录下 看service.js 咯  使用了 express框架 ,让后是熟悉的判断 环境是否是production 
           |-先试用production来看看 --运行npm run build  
              看我捉到了一只createBundleRenderer 函数，让我们来看看这是什么东西 在https://ssr.vuejs.org/zh/api.html#createrendereroptions 这里有介绍
              |————————————————————————然后呢，现在有点看不懂了，我需要点node和express的知识
               其实优化现在使用的组件懒加载还行，目前没有seo需求
        
