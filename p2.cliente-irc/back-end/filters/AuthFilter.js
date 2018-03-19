function authenticate(req, res) {
  if (isAuthenticated(req)) {
    req.next();
  } else if (isStaticResourceRequest(req)) {
    req.next();
  } else {
    res.redirect('/login');
  }
}

function isAuthenticated(req) {
  return req.cookies.token && req.cookies.nickname;
}

function isStaticResourceRequest(req) {
  return req.originalUrl.startsWith('/js') ||
    req.originalUrl.startsWith('/css') ||
    req.originalUrl.startsWith('/images') ||
    req.originalUrl.startsWith('/lib');
}

module.exports = {
  method: 'all',
  url: '/*',
  controller: authenticate
}