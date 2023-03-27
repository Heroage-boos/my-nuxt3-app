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
});
