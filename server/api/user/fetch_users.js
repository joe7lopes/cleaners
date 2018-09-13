const admin = require('firebase-admin');

const { CLEANER } = require('../constants');

module.exports = async (req, res) => {

  let type = String(req.query.type).toUpperCase();

  if(type !== CLEANER){
   return res.status(400).send({error: 'invalid query'});
  }

  try{
    let snap = await admin.database().ref('cleaners').once('value');
    let ids = Object.keys(snap.val());
    let cleaners = await getUsers(ids);
    res.send(cleaners);
  }catch(err){
    return res.status(400).send(err);
  }
  
}

const getUsers = (userIds) => {
  let users = userIds.map(async(id) =>{
    return await getUserById(id);
  });
  return Promise.all(users)
}

const getUserById = async (id) => {
  let snap = await admin.database().ref(`/users/${id}`).once('value');
  return snap.val();
}