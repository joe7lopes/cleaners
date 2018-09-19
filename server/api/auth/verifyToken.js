
const jwt = require('jsonwebtoken');
const config = require('../config/auth_config');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if(!token){
    return res.status(403).send({error: "No token provided."});
  }

  jwt.verify(token,config.secret,(err, decoded)=>{
    if(err){return res.status(500).send({error: 'Failed to authenticate token'});}
    req.userUid = decoded.uid;
    next();
  });
}
module.exports = verifyToken;