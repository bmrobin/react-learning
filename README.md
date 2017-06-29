# Learning React
This is a learning repository based on the Facebook [TicTacToe tutorial](https://facebook.github.io/react/tutorial/tutorial.html) for React. I added the following components to add robustness to the project:

* Webpack
  - [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin)
  - [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
  - [Babel](https://github.com/babel/babel-loader), [Source Map](https://github.com/webpack-contrib/source-map-loader), [CSS](https://github.com/webpack-contrib/css-loader), and [ESLint](https://github.com/MoOx/eslint-loader) Webpack Loaders
  - [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
* Babel
  - React presets
* Jest

## Installation
  
    $ npm install

## Usage
We build the code using Webpack which transpiles the JSX code into browser-support JavaScript code. For a "production-style" build where the packaged code is gzipped and minified for deployment, run 

    $ npm run build

For development purposes where the packaged code is served with a local web server and rebuilt upon saving code changes, run

    $ npm start

