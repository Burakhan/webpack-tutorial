const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    devtool: 'source-map',
    //devtool: 'cheap-module-source-map',
    plugins: [
        /*
        new UglifyJSPlugin({
            parallel: true,
            uglifyOptions: {
                ie8: false,
                ecma: 6,
                warnings: true,
                mangle: true, // debug false
                output: {
                    comments: false,
                    beautify: false,  // debug true
                }
            },
            warnings: true,
        }),
        */
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});