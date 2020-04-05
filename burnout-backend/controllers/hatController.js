var HatClient = require("@dataswift/hat-js");
var token = "";
const config = {
    token: this.token,
    apiVersion: 'v2.6',
    secure: true,
};

const hat = new HatClient(config);

storeNewToken(newToken){
  this.config.token = newToken;
}

exports.createProfile = (req, res) => {
  this.token = req.headers.token;
}
