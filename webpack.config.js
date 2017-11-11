module.exports = {
	entry: './app.js',
	output: {
		path: __dirname+'/dist',
		filename: 'bundle.js'
	},
	 module: {
        rules: [
        {
            test: /\.sass$/,
            use: [
               		"style-loader", // creates style nodes from JS strings
            
                	"css-loader", // translates CSS into CommonJS
            
                	"sass-loader" // compiles Sass to CSS
            ]
        },

        {
        	test: /\.(png|svg|jpg|gif)$/,
            use: [
               		'file-loader'
            ]
        },

        {
        	test: /\.(woff|woff2|eot|ttf|otf)$/,
        	use: [
           		'file-loader'
         	]
        }




       ]
    }
    
}