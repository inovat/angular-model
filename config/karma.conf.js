module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ["jasmine"],
    files: ['lib/*.js', 'src/*.js', 'test/*Spec.js'],
    exclude: [],
    singleRun: true,
    browsers: ['PhantomJS']
  });
};