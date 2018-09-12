const admin = require('firebase-admin');

module.exports = (req, res) => {
  
  if(!req.params.id){
    return res.status(400).send({error:'Missing user id'});
  }

  const id = String(req.params.id).replace(/[^\d]/g, "");

  admin.database().ref(`/users/${id}/profile`).once('value')
  .then(snap => {
    if(!snap.val()) {
      return res.status(404).send();
    }
    return res.send(snap.val());
  }).catch(err => {
    return res.status(422).send(err);
  });

}