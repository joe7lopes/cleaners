const admin = require('firebase-admin');
const { CLEANER, CLIENT } = require('../constants');

module.exports = async (req, res) => {

  // if(!req.body.phone){
  //   return res.status(422).send({error:'Missing phone number'});
  // }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const type = String(req.body.type).toUpperCase();

  try{
    // let user = await admin.auth().createUser({uid: phone});

    if(userExists(phone)){
      return res.status(400).send({error: 'user already exists'});
    }

    let newUser = {
      id: phone,
      type,
      createdAt: new Date()
    }
    
    if(type === CLEANER){
      await admin.database().ref(`cleaners/${phone}`).set(phone);
    }else if(type === CLIENT){
      await admin.database().ref(`clients/${phone}`).set(phone);
    }else{
      res.status(400).send({error: 'unable to extract user type'});
    } 

    await admin.database().ref(`users/${phone}`).set(newUser);
    res.send(newUser);

  }catch(err){
    console.log(err);
    res.status(400).send({err});
  }

}

const userExists = async(userId) => {
  let req = await admin.database().ref(`users/${userId}`).once('value');
  return req.val() ? true : false;
}