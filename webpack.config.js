const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({path: '.env.development'});
}


module.exports = (env) =>  {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('style.css');
    return {
        entry: './src/apps.js',
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
                    test: /\.(png|jpg|jpeg|svg|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 10000, 
                            name: 'images/[name].[ext]'
                        } 
                    }]
                },{
                    test: /\.(ttf|eot|woff)$/,  
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
            })
        ],
        //devtool:isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            
        }
    }
}