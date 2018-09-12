const admin = require('firebase-admin');

module.exports = (req, res) => {
  

  if(!req.body.code || !req.body.phone) {
    req.status(422).send({error: 'Phone and code must be provided'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(req.body.code);

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users/' + phone);
      ref.on('value', snap => {
        ref.off();
        const user = snap.val()

        if(user.code !== code || !user.codeValid){
          return res.status(400).send({error: 'Code not valid'});
        }

        ref.update({codeValid:false});

        admin.auth().createCustomToken(phone)
          .then(token => {
            res.send({token: token})
          })
          .catch(err =>{res.status(422).send({error: err})
        });

      });
    })
    .catch(err=>{res.status(422).send({error: err});
  });

};