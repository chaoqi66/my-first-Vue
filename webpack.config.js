const htmlwp=require("html-webpack-plugin")

const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'), // 入口文件
    output: { // 指定输出选项
    path: path.resolve(__dirname, './dist'), // 输出路径
    filename: 'build.js' // 指定输出文件的名称
  },
    mode: 'development' ,// 设置mode
    plugins: [
        new htmlwp({
            filename: 'index.html',     //指定生成的文件，名字随便
            template: path.resolve(__dirname, './index.html')     //我们的模板文件
        })
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        // test:/\.css$/,
        // loader: 'style-loader!css-loader'
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
            { test: /\.vue$/, use: 'vue-loader' }
        ]}
        
    
}
