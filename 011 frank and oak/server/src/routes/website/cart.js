const express = require('express');
const { createCart, readCart, deleteCart, updateCartQuantity } = require('../../controllers/controllers');

const cartRouter = express.Router();

cartRouter.post('/create-cart', createCart);
cartRouter.get('/read-cart/:user', readCart);
cartRouter.delete('/delete-cart/:_id', deleteCart);
cartRouter.put('/update-cart/:_id', updateCartQuantity);

module.exports = cartRouter;