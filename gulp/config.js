var dest = './src/main/resources/static/js/build',
  src = './react',
  destBuild = './target/classes/static/js/build';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/reactOnly.js',
      dest: dest,
      outputName: 'reactOnly.js'
    },
	{
      entries: src + '/reactOnly.js',
      dest: destBuild,
      outputName: 'reactOnly.js'
    }]
  }
};
