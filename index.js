
module.exports = function (cooking) {
  // add loader
  cooking.add('loader.yaml', {
    test: /\.yaml$/,
    loaders: ['yaml-loader']
  });

  // add extension
  cooking.config.resolve.extensions.push('.yaml');
};