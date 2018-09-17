const admin = require('firebase-admin');

module.exports = async (req, res) => {

  //validation
  const phone = String(req.body.phone);
  const code = String(req.body.code);

  if(!phone || !code){
    return res.status(401).send('invalid credentials');
  }

  try{
    let user = await admin.auth().getUser(phone);
    let dbRef = admin.database().ref(`auth/${user.uid}`);
    let snap = await dbRef.once('value');
    const auth = snap.val();
    
    if(!auth.codeValid || String(auth.code) !== code){
      return res.status(403).send({error: 'invalid code'});
    }

    await dbRef.update({codeValid: false});

    let token = await admin.auth().createCustomToken(user.uid);
    res.send({token, phone});
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }

}