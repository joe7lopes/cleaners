const admin = require('firebase-admin');

const { CLEANER } = require('../constants');

module.exports = async (req, res) => {

  let type = String(req.query.type).toUpperCase();

  if(type !== CLEANER){
   return res.status(400).send({error: 'invalid query'});
  }

  try{
    let snap = await admin.database().ref('cleaners').once('value');
    let ids = getIds(snap);
    let cleaners = await getUsers(ids);
    
    let result = cleaners.map(cleaner =>{
      const languages = convertObjectIntoObjectsArray(cleaner.languages);
      const services = convertObjectIntoObjectsArray(cleaner.services);
      return {...cleaner, languages, services}
    });

    res.send(result);
  }catch(err){
    console.log(err);
    return res.status(400).send(err);
  }
  
}

const getIds = (snap) => {
  const idsObj = snap.val() || [];
  return Object.keys(idsObj);
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

const convertObjectIntoObjectsArray = (obj={}) => {
  return Object.keys(obj).map(key =>{
    return {...obj[key]}
  });
}