const admin = require('firebase-admin');

module.exports = async(req, res) => {
  let uid = req.userUid;

  if(!uid){
    res.status(400).send({error:"unable to get user id"});
  }

  try{
    let snap = await admin.database().ref(`users/${uid}`).once('value');
    const user = snap.val();
    if(user === null){
      return res.status(404).send({error: "user not found"});
    }
    res.send(user);
  } catch(err){
    console.log(err);
    res.status(400).send({error:err});
  } 

}