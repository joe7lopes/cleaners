const admin = require('firebase-admin');

module.exports = async (req, res) => {
  
  if(!req.params.id){
    return res.status(400).send({error:'Missing user id'});
  }

  const id = String(req.params.id);

  try{
    let snap = await admin.database().ref(`/users/${id}`).once('value');
    let user = snap.val();
    if(user === null) {
      return res.status(404).send({msg: "user not found"});
    }else{
      return res.send(user);
    }
  }catch(err){
    return res.status(422).send({error: err});
  }

}