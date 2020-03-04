const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : "/",
    outputDir: process.env.NODE_ENV === 'production'? 'dist' : 'devdist',
    lintOnSave: true,
    chainWebpack: (config) => {
        config.module.rules.delete('eslint');
    },/*
    configureWebPack: (config) => {
        config.resolve = {
            extensions: ['.js', '.json', 'vue'], //要解析的文件类型
            alias: {
                "@": path.resolve(__dirname, './src'),
                'public': path.resolve(__dirname, './public'),
                'components': path.resolve(__dirname, './src/components'),
                'common': path.resolve(__dirname, './src/common'),
                'api': path.resolve(__dirname, './src/api'),
                'views': path.resolve(__dirname, './src/views'),
                'data': path.resolve(__dirname, './src/data')
            }
        }
    },*/
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