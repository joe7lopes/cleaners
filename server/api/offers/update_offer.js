const admin = require('firebase-admin');
const {PENDING} = require('../constants');

module.exports = async (req, res) => {

  if(!req.params.id){
    console.log('bad id');
    res.status(400).send({error: 'missing id'});
  }
  //validate status codes.

  const offerId = req.params.id;
  const status = req.body.status;

  try{
    await admin.database().ref(`offers/${offerId}`).update({status});
    res.send("updated");
  }catch(err){
    res.status(400).send(err);
  }

}