const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        entry: './src/main.js',
        // entry2: './src/index1.js'
    },
    resolve: {
        alias: {
            // vue$: path.resolve(__dirname, 'src/lib/vue/dist/vue.esm.js'),
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: [".js", ".vue", ".json"] // 默认值: [".js",".json"]
    },
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: 'babel-loader'
            //     }, {
            //         loader: 'eslint-loader',
            //         options: {
            //             fix: true
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '冯月飞', // 默认值：Webpack App
            filename: 'index.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'index.html'),
            minify: {
                collapseWhitespace: false, //是否压缩
                removeComments: true, // 是否移除注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ]
}