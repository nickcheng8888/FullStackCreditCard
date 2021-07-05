const express = require('express');
const {addCard, 
       getCards, 
      } = require('../controllers/REST');

const router = express.Router();

router.post('/addCard', addCard);
router.get('/getCards', getCards);


module.exports = {
    routes: router
}