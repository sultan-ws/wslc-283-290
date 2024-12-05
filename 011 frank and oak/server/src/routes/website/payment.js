const express = require('express');
const { createCheckout, setPaymentStatus } = require('../../controllers/controllers');

const paymentRouter = express.Router();

paymentRouter.post('/create-checkout', createCheckout);
paymentRouter.put('/update-payment-status/:_id', setPaymentStatus)

module.exports = paymentRouter;