const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    //Add webpack plugin to generate HTML
    //https://webpack.js.org/plugins/html-webpack-plugin/
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title:'JATE'
      })
          //Add webpack plugin to generate service worker and manifest file
          new InjectManifest({
            swSrc:'./src-sw.js',
            swDest:'src-sw.js'
          }),
          new WebpackPwaManifest({
            fingerfrints: false,
            inject: true,
            name: Text Editor,
            short_name:'JATE',
            description: 'Text editor',
            background_color: '#225ca3',
            theme_color: '#225ca23',


          })

    ],
//
    module: {
      rules: [
        
      ],
    },
  };
};
