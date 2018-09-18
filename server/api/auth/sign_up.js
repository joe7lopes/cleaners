const admin = require('firebase-admin');
// const twilio = require('../config/twilio');
// const twilioConfig = require('../config/twilio_config.json');

module.exports = async (req, res) => {

  if(!req.body.phone){
   return res.status(400).send({error:'phone number not provided'});
  }

  // const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const phone = String(req.body.phone);

  try{
    await admin.auth().createUser({uid: phone})

    // TODO SEND CODE TO THE PHONE
    const code = Math.floor((Math.random() * 199999 + 100000));

    // let textMessage = {
    //   body: 'Your code is' + code,
    //   from: twilioConfig.phone,
    //   to: phone  
    // };

    // let messageResult = await twilio.messages.create(textMessage, err => {
    //   res.status(422).send({error: err});
    // });

    // console.log("twilio message",messageResult);

    await admin.database().ref(`auth/${phone}`).update({code, codeValid: true});
    res.send();

  }catch(err){
    console.log(err);
    res.status(422).send({error: err});
  }

};