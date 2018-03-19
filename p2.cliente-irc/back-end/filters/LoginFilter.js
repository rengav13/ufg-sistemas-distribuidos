
function doLogin(req, res) {
  res.cookie('token', Date.now());
  res.cookie('nickname', req.body.nickname);
  res.cookie('username', req.body.username ? req.body.username : req.body.nickname);
  res.cookie('channel', req.body.channel ? req.body.channel : '#sd1-ec-2017');
  res.cookie('server', req.body.server ? req.body.server : 'irc.freenode.net');
  res.redirect('/');
}

module.exports = {
  method: 'post',
  url: '/login',
  controller: doLogin
};
