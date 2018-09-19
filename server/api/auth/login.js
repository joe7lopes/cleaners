const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const config = require('../config/auth_config');

module.exports = async (req, res) => {

  //TODO phone validation
  const phone = String(req.body.phone);
  const verificationCode = String(req.body.verificationCode);

  if(!phone || !verificationCode){
    return res.status(401).send('invalid credentials');
  }

  try{
    
    let dbRef = admin.database().ref(`auth/${phone}`);
    let snap = await dbRef.once('value');
    const auth = snap.val();
    if(auth === null){
      return res.status(400).send({error:"phone number doesnt exist, please register."});
    }
    
    if(!auth.verificationCodeValid || String(auth.verificationCode) !== verificationCode){
      return res.status(403).send({error: 'invalid code'});
    }

    await dbRef.update({verificationCodeValid: false});

    const token = getToken(phone);
    res.send({token});
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }

};

const getToken = (uid) =>{
  const token = jwt.sign({uid},config.secret,{
    expiresIn: 86400 //24hours
  });

  return token;
}