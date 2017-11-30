var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
    	loaders:[{
    		test:/.jsx?$/,
    		loader: 'babel-loader',
    		exclude:/node_modules/,
    		query:{
    			presets:['es2015','react']
    		}
    	}]
    },
    
};