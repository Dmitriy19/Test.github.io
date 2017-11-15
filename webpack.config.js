
const _ = require('lodash');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const argv = {
    verbose:    _.includes(process.argv, '-v') || _.includes(process.argv, '--verbose'),
    json:       _.includes(process.argv, '--json'),
    production: _.includes(process.argv, '--production'),
};



module.exports = {
    cache:   true,
    devtool: argv.production ? "source-maps" : "eval",
    entry: './app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
        publicPath: "dist",
        
    },
     




     module: {

       loaders: [
            {
                test: /\.sass$/,
                loader: argv.production
                    ? ExtractTextPlugin.extract('file-loader?style-loader?source-map-loader=1', [
                        'file-loader?css-loader?source-map-loader=1&importLoaders=1',
                        'file-loader?postcss-loader?source-map-loader=1',
                        'file-loader?sass-loader?source-map-loader=1'
                    ]) : [
                        'style-loader?source-map-loader=1',
                        'css-loader?source-map-loader=1&importLoaders=1',
                        'postcss-loader?source-map-loader=1',
                        'sass-loader?source-map-loader=1'
                    ].join('!')
            },
        

        /*{
            test: /\.sass$/,
            use: [
                    "style-loader", // creates style nodes from JS strings
            
                    "css-loader", // translates CSS into CommonJS
            
                    "sass-loader" // compiles Sass to CSS
            ]
        },*/

        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                    'file-loader?name=[name].[ext]&outputPath=images/'
            ]
        },

        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader?name=[name].[ext]&outputPath=fonts/'
            ]
        }
        ]
    }
}