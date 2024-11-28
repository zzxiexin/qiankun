const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd"; //采用umd方式注入
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; //webpack5要把 jsonpFunction，改为 chunkLoadingGlobal
    config.output.globalObject = "window";

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*", //允许跨域，主应用才能使用微应用资源
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
