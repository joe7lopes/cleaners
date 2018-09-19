const admin = require('firebase-admin');
const { CLEANER, CLIENT } = require('../constants');

module.exports = async (req, res) => {

  const type = String(req.body.type).toUpperCase();
  
  if(type !== CLIENT && type !== CLEANER){
    console.log(type);
    return res.status(400).send({error: 'Wrong type provided'});
  }

  try{
    var newUser;
    let ref = admin.database().ref('users');
    let newChildRef = await ref.push();
    let key = newChildRef.key;
    if(type === CLIENT){
      newUser = getClientFromRequest(req.body);
      await admin.database().ref(`clients/${key}`).set(key);
    }else if(type === CLEANER){
      newUser = getCleanerFromRequest(req.body);
      await admin.database().ref(`cleaners/${key}`).set(key);
    }else{
      res.status(400).send({error: 'unable to extract user type'});
    } 

    newUser.uid = key;
    await ref.child(key).set(newUser);
    res.send(newUser);
  }catch(err){
    console.log(err);
    res.status(400).send({err});
  }

}
//TODO

const getClientFromRequest = (req) => {
  const { firstName, lastName, address, phone, email, rating= 0 } = req;
  return {
    firstName,
    lastName,
    address,
    phone,
    email,
    rating,
    type: CLIENT,
    createdAt: new Date()
  }
};

const getCleanerFromRequest = (req) => {
  const { firstName, lastName, phone, email, price, services, languages, rating=0 } = req;
  return {
    firstName,
    lastName,
    phone,
    email,
    price,
    services,
    languages,
    rating,
    type: CLEANER,
    createdAt: new Date()
  }
};
