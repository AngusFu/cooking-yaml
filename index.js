
module.exports = function (cooking) {
  // add loader
  cooking.add('loader.yaml', {
    test: /\.ya?ml$/i,
    exclude: /node_modules|bower_components/,
    loaders: ['json-loader', 'yaml-loader']
  });

  // add extension
  cooking.config.resolve.extensions.push('.yaml');
  cooking.config.resolve.extensions.push('.yml');
};