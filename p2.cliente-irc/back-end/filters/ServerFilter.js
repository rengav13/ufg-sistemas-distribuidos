
function ChangeServer(req, res) {
  	res.cookie('server', req.body.server ? req.body.server : 'irc.freenode.net');
  	res.redirect("close.html")
}

module.exports = {
  method: 'post',
  url: '/ServerChange',
  controller: ChangeServer
};
