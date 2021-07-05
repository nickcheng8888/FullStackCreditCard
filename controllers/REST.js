'use strict';

const firebase = require('../db');
const ccInformation = require('../models/ccInformation');
const Student = require('../models/ccInformation');
const firestore = firebase.firestore();


const addCard = async (req, res, next) => {
    try {
        // let uid = await firebase.auth().currentUser.uid;
        const data = req.body;
        await firestore.collection('creditCard').doc().set(data);
        res.send('Card added successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCards = async (req, res, next) => {
    try {
        const cardArray = [];
        let cardRef = await firestore.collection('creditCard')
        // .where('userID', '==', uid)
        // .where('cardName', '==', 'Nick')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                    const card = {};
                    // card.userID = doc.data().userID;
                    card.cardNumber = doc.data().number;
                    card.cardExpiry = doc.data().expiration;
                    card.cardName = doc.data().name;
                    card.userID = doc.data().userID;
                    //res.send(card)
                    cardArray.push(card);
                
            });
        })
        res.send(cardArray);
        // console.log(cardArray);
        //append object to cardarray
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addCard,
    getCards,
}