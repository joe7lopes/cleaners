const admin = require('firebase-admin');
const { CLEANER } = require('../constants');
const _ = require('lodash');

module.exports =  async (req, res) => {
    const {priceMin, priceMax, sex} = req.query;

    try{
        let snap = await admin.database().ref('users').orderByChild('type').equalTo(CLEANER).once('value');
        if(snap === null){
            return res.status(404).json({error: 'no results found'});
        }
        const cleaners = _.values(snap.val());
        const criteria = {
            priceMin,
            priceMax,
            sex
        };
        const filteredCleaners = filterWithCriteria(criteria, cleaners);
        console.log("search returning:", filteredCleaners.length);
        const resultAsObject = _.mapKeys(filteredCleaners, 'uid');
        res.status(200).json(resultAsObject);
    }catch(err){
        res.status(500).json({error: cleaners});
    }

}

const filterWithCriteria = (criteria, cleaners) => {
    const {priceMin, priceMax, languages, sex} = criteria;
    let filteredCleaners = cleaners;

    if(priceMin || priceMax){
        filteredCleaners = filterByPrice(priceMin, priceMax, filteredCleaners);
    }

    if(sex){
        filteredCleaners = filterBySex(sex,filteredCleaners);
    }

    return filteredCleaners;
}

const filterByPrice = (priceMin, priceMax, cleaners) => {
    const _priceMin = Number(priceMin);
    const _priceMax = Number(priceMax);

    if(priceMin && priceMax){
        return cleaners.filter(cleaner => {
            const cleanerPrice = Number(cleaner.price);
            return cleanerPrice >= _priceMin && cleanerPrice <= _priceMax;
            });
    }else if(priceMin){
        return cleaners.filter(cleaner => Number(cleaner.price) >= _priceMin);    
    }else if(priceMax){
        return cleaners.filter(cleaner => Number(cleaner.price) <= _priceMax);
    }else{
        return cleaner;
    }

    
}

const filterBySex = (sex, cleaners) => {
    return cleaners.filter(cleaner=> String(cleaner.sex) === String(sex));
}