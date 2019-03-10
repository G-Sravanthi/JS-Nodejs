const express = require('express');
const router = express.Router();
const contactSchema = require('../model/contact');
const paymentSchema = require('../model/payment');

router.post('/contact', (req, res) => {
    const contact = new contactSchema({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    contact.save().then((contactDetails) => {
        res.status(201).json({ 'message': 'Created successfully', 'contact': contactDetails });
    });
});

router.post('/payment', (req, res) => {
    const payment = new paymentSchema({
        cardNumber: req.body.cardNumber,
        cardExpiration: req.body.cardExpiration,
        cardCvv: req.body.cardCvv,
        cardOwnerName: req.body.cardOwnerName
    });
    payment.save().then((paymentDetails) => {
        res.status(201).json({ 'message': 'Created successfully', 'payment': paymentDetails });
    });
});

module.exports = router