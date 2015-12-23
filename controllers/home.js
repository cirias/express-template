exports.get = function (req, res, next) {
  return res.send('Hello ' + req.params.name);
};
