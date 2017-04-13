module.exports = {
    entry: "./entry.js", // 要打包的入口文件
    output: {               //打包后的文件
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [            //用于加载一些静态文件夹（css样式，图片之类）
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};