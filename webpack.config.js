const NODE_ENV = process.env.NODE_ENV;

const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const isDev = NODE_ENV === 'development';

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist'),
  clearBeforeBuild: true
});

// CSS loader

const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match))
  return found ? found[0] : null;
}
// existing css loader
const cssloader =
  findLoader(config.module.loaders, matchCssLoaders);

const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
})
config.module.loaders.push(newloader);
cssloader.test = new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
});

module.exports = config;