const admin = require('firebase-admin');

module.exports = async (req, res) => {

  if(!req.params.id){
    return res.status(400).send({error:'Missing user id'});
  }

  const userId = req.params.id;

  try{
    let snap = await admin.database().ref(`/users/${userId}/offers`).once('value');
    const offerIds = Object.keys(snap.val());
    let offers = await getOffers(offerIds);
    res.send(offers);
  }catch(err){
    console.log(err);
    res.status(400).send(err);
  }

}

const getOffers = (offerIds) => {
  let offers = offerIds.map(async(id) =>{
    return await getOfferById(id);
  });
  return Promise.all(offers)
}

const getOfferById = async (id) => {
  let snap = await admin.database().ref(`/offers/${id}`).once('value');
  return snap.val();
}