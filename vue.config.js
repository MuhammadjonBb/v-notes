const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/v-notes/',
  assetsDir: 'assets',
});
