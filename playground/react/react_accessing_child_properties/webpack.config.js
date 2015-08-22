module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname/src,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};


var disqus_shortname = 'beyondcoder';
(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();