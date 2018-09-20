const admin = require('firebase-admin');

const { CLEANER } = require('../constants');

module.exports = async (req, res) => {

  let type = String(req.query.type).toUpperCase();

  if(type !== CLEANER){
   return res.status(400).send({error: 'invalid query'});
  }

  try{
    let snap = await admin.database().ref('users').orderByChild('type').equalTo(CLEANER).once('value');
    return res.send(snap.val());
  }catch(err){
    return res.status(400).send({error: err});
  }
  
};
