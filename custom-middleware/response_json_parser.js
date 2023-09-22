const res_parsor = (req, res, next) => {
    var send = res.send;
    res.send = function (string) {
      var body = string instanceof Buffer ? string.toString() : string;
      console.log(body);
      send.call(this, body);
    };
    next();
  }

module.exports = res_parsor;