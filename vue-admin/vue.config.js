const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : "/",
    outputDir: process.env.NODE_ENV === 'production'? 'dist' : 'devdist',
    lintOnSave: true,
    chainWebpack: (config) => {

    },
    productionSourceMap: false,
    css:{
        extract: true,
        sourceMap: false,
        loaderOptions:{
            sass: {
                prependData: '@import "./src/styles/main.scss";'
            }
        },
        modules:false
    },
    pwa: {},
    devServer: {
        open: false,
        host: '0.0.0.0',
        port:8080,
        https: false,
        hot: true,
        hotOnly: false,
        proxy: null,
        overlay: {
            warnings: true,
            errors: true
        },
        before: app => {}
    },
    pluginOptions: {}
}