import Vue from 'vue'
import App from './App.vue'
// import Garfish from 'garfish';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// // 当执行 `Garfish.run` 后，此时 `Garfish` 框架将会启动路由劫持能力
// // 当浏览器的地址发生变化时，`Garfish` 框架内部便会立即触发匹配逻辑当应用符合匹配逻辑时将会自动将应用挂载至页面中
// // 并依次触发子应用加载、渲染过程中的生命周期
// // 跳转至: /react 时，自动挂载 react 应用
// // 跳转至: /vue 时，自动挂载 vue 应用
// Garfish.run({
//   basename: '/',
//   domGetter: '#subApp',
//   apps: [
//     {
//       // 每个应用的 name 需要保持唯一
//       name: 'react',
//       // 可为函数，当函数返回值为 true 时，标识满足激活条件，该应用将会自动挂载至页面中，手动挂在时可不填写该参数
//       activeWhen: '/react',
//       // 子应用的入口地址，可以为 HTML 地址和 JS 地址
//       // 注意：entry 地址不可以与主应用+子应用激活地址相同，否则刷新时将会直接返回子应用内容
//       entry: 'http://localhost:3000',
//     },
//     {
//       name: 'vue',
//       activeWhen: '/vue',
//       entry: 'http://localhost:8080',
//     },
//   ],
// });