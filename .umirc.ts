import { defineConfig } from '@umijs/max';

export default defineConfig({
  targets: { chrome: 80 }, // Umi 4 默认不支持 IE ，编译兼容目标 targets 为 chrome: 80
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',

  // Umi 4 自带提供一个 legacy 配置用于构建降级（使用限制等详见 legacy: https://umijs.org/docs/api/config#legacy）：
  legacy: {},

  // Umi 4 默认使用现代构建工具，产物生成至 es6 ，如果你有要打包为 es5 产物的考量，请调整配置：
  // jsMinifier: 'terser',
  // cssMinifier: 'cssnano'
});
