const admin = require('firebase-admin');
const {CLEANER_PENDING} = require('../constants');

module.exports = async (req, res) => {
  const from = req.userUid;
  const {to, address, message } = req.body;

  //TODO data validation
  if(!to){
    return res.status(400).json({error: 'missing cleaner id'});
  }

  try{
    let newJobRef = await admin.database().ref('jobs').push();
    const jobUid = newJobRef.key;
    const jobData = {
      uid: jobUid,
      from,
      to,
      address,
      message,
      status: CLEANER_PENDING,
      createdAt: new Date()
    };
    await Promise.all([
      createNewJob(newJobRef,jobData),
      updateUserJobs(from, jobUid),
      updateUserJobs(to, jobUid)
    ]);
    return res.status(200).json(jobData);
  }catch(err){
    console.log("error", err);
    return res.status(500).json({error: err});
  }

}

const createNewJob = (ref, data) => {
  return ref.set(data);
}

const updateUserJobs = (userUid, jobId) => {
  return admin.database().ref(`users/${userUid}/jobs/${jobId}`).set(jobId);
}

const getRequestData = (data) => {
  return {from, to, address, message} = data;
}