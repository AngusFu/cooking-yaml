
module.exports = function (cooking) {
  // add loader
  cooking.add('loader.yaml', {
    test: /\.yaml$/,
    exclude: /node_modules|bower_components/,
    loaders: ['json-loader', 'yaml-loader']
  });

  // add extension
  cooking.config.resolve.extensions.push('.yaml');
};