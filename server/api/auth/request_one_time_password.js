const admin = require('firebase-admin');
const twilio = require('../../twilio');
const twilioConfig = require('./twilio_config');

module.exports = (req, res) => {
  if(!req.body.phone){
    res.status(422).send({error:'phone number not provided'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  admin.auth().getUser(phone)
    .then(user => {

      const code = Math.floor((Math.random() * 199999 + 100000));

      twilio.messages.create({
        body: 'Your code is' + code,
        from: twilioConfig.phone,
        to: phone  
      }, err => {
        if(err){return res.status(422).send({err});}
        
        admin.database().ref('users/'+phone)
          .update({code: code, codeValid: true}, () => {
            res.send({sucess: true});
          });
      });

    })
    .catch(err => {
      res.status(422).send({error: err});
    });


};