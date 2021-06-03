const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

  mode: 'development', // development oder production

  entry: './src/index.ts',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    contentBase: 'dist',
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: '' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },

};