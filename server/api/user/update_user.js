const admin = require('firebase-admin');
const languages = require('../config/languages');
const { CLEANER, CLIENT } = require('../constants');
module.exports = async (req, res) => {

    const userUid = req.userUid;

    if (!userUid) {
        return res.status(403).send({error: 'Invalid or outdated token'});
    }

    try {

        const user = await getUser(userUid);
        if (!user || !user.type) {
            return res.status(400).send({error: 'user does not exist'});
        }

        let updates = {}
        if(user.type === CLIENT){
            updates = getRequestDataForClient(req.body);
        }else if(user.type === CLEANER){
            updates = getRequestDataForCleaner(req.body);
        }else{
            return res.status(400).send({error: 'unable to get user type'});
        }

        let ref = await admin.database().ref(`users/${userUid}`);
        await ref.update(updates);
        let snap = await ref.once('value');

        const updatedUser = snap.val();
        if (updatedUser === null) {
            res.status(409).send({error: 'unable to retrieve updated user'});
        }

        res.send(updatedUser);
    } catch (err) {
        res.status(400).send({error: err});
    }
}

const getUser = async (userUid) => {
    let req = await admin.database().ref(`users/${userUid}`).once('value');
    return req.val();
}

const getRequestDataForClient = (reqData) => {
    const {address=''} = reqData;
    const languages = getLanguagesFromRequest(reqData);
    console.log('final languages', languages);
    return {address, languages}
}

const getRequestDataForCleaner = (reqData) => {
    const {address=''} = reqData;
    const languages = getLanguagesFromRequest(reqData);
    return {address, languages}
}

const getLanguagesFromRequest = (reqData) => {
    const reqLanguages = reqData.languages || [];
    const availableLanguages = Object.keys(languages);
    let result = {};
    reqLanguages.forEach(code=>{
        if(availableLanguages.includes(code)) {
            result[code] = code
        }
    });
    return result;
}