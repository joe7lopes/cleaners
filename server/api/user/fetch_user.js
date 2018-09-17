const admin = require('firebase-admin');

module.exports = async (req, res) => {
  
  if(!req.params.id){
    return res.status(400).send({error:'Missing user id'});
  }

  const id = String(req.params.id).replace(/[^\d]/g, "");

  try{
    let snap = await admin.database().ref(`/users/${id}`).once('value');
    let user = snap.val();
    if(!user) {
      return res.status(404).send();
    }else{
      return res.send(user);
    }
  }catch(err){
    return res.status(422).send(err);
  }

}