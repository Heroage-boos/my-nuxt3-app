import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    //配置别名
    images: fileURLToPath(new URL("./assets/images", import.meta.url)),
    style: fileURLToPath(new URL("./assets/style", import.meta.url)),
    data: fileURLToPath(new URL("./assets/other", import.meta.url)),
  },
  nitro: {
    //nitro的配置 参阅https: //nitro.unjs.io/config/
    devProxy: {
      //配置代理
      "/api": {
        target: "http://192.168.0.146:3001/api", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  css: [
    //定义要全局设置的 CSS 文件/模块/库（包含在每个页面中）。
    // "bulma",//直接加载一个Node.js模块（这里是一个Sass文件）。
    // "@/assets/css/main.css",//项目中的css文件
    "@/assets/style/index.scss", //项目中的scss文件
    "@/assets/style/common.scss",
    "@/assets/style/layout.scss",
  ],
  devtools: {
    enabled: true,//启用devtools
    vscode: {},//VS代码服务器选项
  }
});
