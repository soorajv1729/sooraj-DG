var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const VENDOR_LIBS = [
   'redux', 'react-redux', 'react-dom'

];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/react']
                }
              }
            ],
          },
          {
            use: ['style-loader', 'css-loader'],
            test: /\.css$/
          },
          {
                    test: /\.(png|svg|jpg|gif)$/,
                 use: [
                      'file-loader',
                    ],
                  },
                  {
                    test: /\.css$/,

                    loader: 'postcss-loader',
                    options: {
                      ident: 'postcss',
                      plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                      ],
                    },
                  },
              
      /* {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      } */
    ]
  },
  plugins: [
  
/*     new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }), */
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  /*   new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }) */
  ]
};