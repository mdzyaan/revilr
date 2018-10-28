const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) =>  {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('style.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },{
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                              loader: 'css-loader',
                              options: {
                                sourceMap: true
                              }
                            },
                            {
                              loader: 'sass-loader',
                              options: {
                                sourceMap: true
                              }
                            },
                        ]
                    })
                },{
                    test: /\.(png|jpg|jpeg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 10000, 
                            name: 'images/[name].[ext]'
                        } 
                    }]
                },{
                    test: /\.(ttf|eot)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 10000, 
                            name: 'fonts/[name].[ext]'
                        } 
                    }]
                },
            ],
        },
        plugins: [
            CSSExtract
        ],
        devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            
        }
    }
}