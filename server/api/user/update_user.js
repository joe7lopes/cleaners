const admin = require('firebase-admin');

module.exports = async (req, res) => {

    const userUid = req.userUid;

    if (!userUid) {
        return res.status(403).send({error: 'Invalid or outdated token'});
    }

    const updates = req.body;
    delete updates.phone;

    try {

        if (!userExists(userUid)) {
            return res.status(400).send({error: 'user does not exist'});
        }

        let ref = await admin.database().ref(`users/${userUid}`);
        await ref.update(updates);
        let snap = await ref.once('value');

        const updatedUser = snap.val();
        if(updatedUser === null){
            res.status(409).send({error: 'unable to retrieve updated user'});
        }

        res.send(updatedUser);
    } catch (err) {
        res.status(400).send({error: err});
    }
}

const userExists = async (userUid) => {
    let req = await admin.database().ref(`users/${userUid}`).once('value');
    return req.val() !== null;
}