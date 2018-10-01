const admin = require('firebase-admin');
const _ = require('lodash');

module.exports = async (req, res) => {
  const userUid = req.userUid;

  try{
    let snap = await admin.database().ref(`users/${userUid}/jobs`).once('value');
    const jobIds = Object.keys(snap.val());
    let jobs = await getJobs(jobIds);
    const jobsAsObj = jobs.reduce((acc, curr)=>{
      acc[curr.uid] = {...curr};
      return acc;
    },{});

    return res.status(200).json(jobsAsObj);
  }catch(err){
    return res.status(500).json({error: err});
  }

 }

 const getJobs = (jobIds) => {
   let jobs = jobIds.map(async(id)=>{
     return await getJobByUid(id);
   })
   return Promise.all(jobs);
 }

 const getJobByUid = async (uid) => {
  let snap = await admin.database().ref(`jobs/${uid}`).once('value');
  return snap.val()
 }