const admin = require('firebase-admin');

module.exports = async (req, res) => {

  const userId = req.params.id;
  const updates = req.body;
  
  try{

    if(!userExists(userId)){
      return res.status(400).send({error: 'user does not exist'});
    }
    
    await admin.database().ref(`users/${userId}`).update(updates);
    res.send();
  }catch(err){
    res.status(400).send(err);
  }
}

const userExists = async(userId) => {
  let req = await admin.database().ref(`users/${userId}`).once('value');
  return req.val() ? true : false;
}