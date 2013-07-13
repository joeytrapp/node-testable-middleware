var testable = require('testable');

exports.attach = function(app, config) {
  var route = config.route || '/test.html';

  if (route[0] !== '/') { route = '/' + route; }

  app.use(function testableMiddleware(req, res, next) {
    if (new RegExp('^' + route).test(req.url)) {
      res.setHeader('Content-Type', 'text/html');
      res.end(testable.markup(config));
    } else {
      next();
    }
  });
};

exports.assetsPath = function() {
  return testable.assetsPath();
};

