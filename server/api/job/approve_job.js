const admin = require('firebase-admin');
const {
  CLIENT_REJECTED,
  CLEANER_PENDING,
  CLEANER_REJECTED,
  CLEANER_APPROVED
} = require('../constants');

module.exports = async (req, res) => {
  //check status with user ID.
  //TODO, verify if user has rights to update the resource.
  const jobUid = req.params.id;
  const userUid = req.userUid;
  if(!jobUid){
    return res.status(400).json({error: 'missing job id'});
  }

  try{
    let ref = admin.database().ref(`jobs/${jobUid}`);
    let snap = await ref.once('value');
    if(snap.val() === null){
      return res.status(400).json({error: `Job ${jobUid} does not exist`});
    }

    ref.update({status: CLEANER_APPROVED});
    return res.send();
  }catch(err){
    return res.status(500).json({error: err});
  }
}

