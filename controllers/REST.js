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
        // let uid = await firebase.auth().currentUser.uid;
        const cardArray = {};
        var cardExpiry = '';
        var cardName = '';
        var cardNumber = '';
        var userID = '123';

        let cardRef = await firestore.collection('creditCard')
        // .where('cardName', '==', 'Nick')
        .get()
        .then(function(querySnapshot) {
            const currCard = {};
            querySnapshot.forEach(function(doc) {
                cardExpiry = doc.data().cardExpiry;
                cardName = doc.data().cardName;
                cardNumber = doc.data().cardNumber;
                
            });
            // console.log(cardExpiry);
            // console.log(cardName);
            // console.log(cardNumber);
            cardArray.cardNumber = cardNumber;
            cardArray.cardName = cardName;
            cardArray.cardExpiry = cardExpiry;
            console.log(cardArray);
        })
        //append object to cardarray
        res.send(cardArray)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addCard,
    getCards,
}