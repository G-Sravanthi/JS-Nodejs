const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    cardNumber: { type: String, require: true },
    cardExpiration: { type: String, require: true },
    cardCvv: { type: String, require: true },
    cardOwnerName: { type: String, require: true },
});
module.exports = mongoose.model('payment', paymentSchema);

