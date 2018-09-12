const admin = require('firebase-admin');
const {PENDING} = require('../constants');
module.exports = async (req, res) => {

  //TODO some data validation
  //check if cleaner and client exist
  const {
    from,
    to,
  } = req.body;

  try {
    let newOfferRef = await admin.database().ref(`offers`).push();
    var result = await Promise.all([
      createOffer(newOfferRef, from, to),
      updateUserOffers(from, newOfferRef.key), 
      updateUserOffers(to, newOfferRef.key) 
    ]);
    res.send();
  }catch(err){
    res.status(400).send(err);
  }
}

const createOffer = (ref, from, to, status=PENDING) => {
 return ref.set({from, to, status, createdAt: new Date()});
}

const updateUserOffers = async (userId, offerId) => {
    return admin.database().ref(`users/${userId}/offers/${offerId}`).set(offerId);
};