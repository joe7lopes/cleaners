const admin = require('firebase-admin');

module.exports = async (req, res) => {

  if(!req.body.phone){
   return res.status(400).send({error:'phone number not provided'});
  }

  const phone = String(req.body.phone);

  try{

    let snap = await admin.database().ref(`users${phone}`).once('value');
    const user = snap.val();
    if(user !== null){
      return res.status(400).send({error: "User already registered"});
    }
    // TODO SEND CODE TO THE PHONE
    const verificationCode = Math.floor((Math.random() * 199999 + 100000));
    await admin.database().ref(`auth/${phone}`).update({verificationCode, verificationCodeValid: true});
    await admin.database().ref(`users/${phone}`).set({isNewUser: true});
    
    res.send("verification code sent to phone");
  }catch(err){
    res.status(422).send({error: err});
  }

};

