const admin = require('firebase-admin');

module.exports = async (req, res) => {

  //TODO some data validation

  const {
    from,
    to,
    status = 'PENDING'
  } = req.body;

  try {
    let newOfferRef = await admin.database().ref(`offers`).push();
    let offer = await newOfferRef.set({from, to, status, createdAt: new Date()})
    //doesn't work we need to know who is the client and cleaner.
    await Promisse.all([updateClientOffers(newOfferRef.key),updateCleanerOffers(newOfferRef.key)]);

    res.send(offer)
  }catch(err){
    res.status(400).send(err);
  }
}

const updateClientOffers = (key) => new Promisse( async (resolve, reject)=>{
  try{
    admin.database.ref('users')
  }catch(err){
    reject("rejected");
  }
});