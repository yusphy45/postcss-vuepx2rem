'use strict';
var Px2rem = require('./VuePx2rem.js');
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-vuepx2rem', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2remIns = new Px2rem(options);
    var newCssText = px2remIns.generateRem(oldCssText);
    result.root = postcss.parse(newCssText);
  };
});