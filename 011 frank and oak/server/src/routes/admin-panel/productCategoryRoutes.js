const express = require('express');
const { 
    createProductCategory, 
    readProductCategories
 } = require('../../controllers/controllers');
const multerUpload = require('../../middlewares/multer');

const productCategoryRouter = express.Router();

productCategoryRouter.post('/create-category', multerUpload,  createProductCategory);
productCategoryRouter.get('/read-categories', readProductCategories)

module.exports = productCategoryRouter;