const admin = require('firebase-admin');

module.exports = async (req, res) => {

    const uid = req.userUid;

    try{
        console.log("uid", uid);
        let snap = await admin.database().ref(`users/${uid}`).once('value');
        const user = snap.val();
        if(user === null){
           return res.status(404).send({error: 'user not found'});
        }

        return res.send(user);
    }catch(err){
        return res.status(400).send({error: err});
    }

};
