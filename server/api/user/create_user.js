const admin = require('firebase-admin');
const { CLEANER, CLIENT } = require('../constants');

module.exports = async (req, res) => {

    const type = String(req.body.type).toUpperCase();

    if(type !== CLIENT && type !== CLEANER){
        return res.status(400).send({error: 'Wrong user type provided'});
    }

    const userUid = req.userUid;

    if(!userUid){
        return res.status(403).send({error: 'Invalid or outdated token'});
    }

    try{
        let newUser;
        if(type === CLIENT){
            newUser = getClientFromRequest(req.body);
            await admin.database().ref(`clients/${userUid}`).set(userUid);
        }else if(type === CLEANER){
            newUser = getCleanerFromRequest(req.body);
            await admin.database().ref(`cleaners/${userUid}`).set(userUid);
        }else{
            res.status(400).send({error: 'unable to extract user type'});
        }

        newUser.uid = userUid;
        newUser.isNewUser = false;
        newUser.phone = userUid;
        await admin.database().ref(`users/${userUid}`).update(newUser);
        res.status(201).send(newUser);
    }catch(err){
        console.log(err);
        res.status(400).send({err});
    }

}

const getClientFromRequest = (req) => {
    const { firstName, lastName, address, email, rating= 0 } = req;
    return {
        firstName,
        lastName,
        address,
        email,
        rating,
        type: CLIENT,
        createdAt: new Date()
    }
};

const getCleanerFromRequest = (req) => {
    const { firstName, lastName, email, price=0, services, languages, rating=0 } = req;
    return {
        firstName,
        lastName,
        email,
        price,
        services,
        languages,
        rating,
        type: CLEANER,
        createdAt: new Date()
    }
};
