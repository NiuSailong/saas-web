import { defineConfig } from '@umijs/max';
import routes from './config/routes'

export default defineConfig({
  title: '',
  base: '/',
  publicPath: '/',
  proxy: {},
  routes,
  qiankun: {
    master: {},
  },
  scripts: [],
  plugins: [],
  externals: {},
  define: {},
  manifest: {
    basePath: '/',
  },
  targets: {
    ie: 11,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  history: {
    type: 'hash',
  },
  historyWithQuery: {},
  inlineLimit:3000,
  hash: true,
  fastRefresh: true,
  mountElementId:'root-master',
  ignoreMomentLocale: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  npmClient: 'npm',
});

