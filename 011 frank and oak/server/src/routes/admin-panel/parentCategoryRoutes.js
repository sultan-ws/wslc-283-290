const express = require('express');
const multer = require('multer');
const {
    createParentCategory,
    readParentCategories,
    updateParentCategoryStatus
} = require('../../controllers/controllers');

const parentCategoryRouter = express.Router();
parentCategoryRouter.use(multer().none());

parentCategoryRouter.post('/create-category', createParentCategory);
parentCategoryRouter.get('/read-categories', readParentCategories);
parentCategoryRouter.put('/update-status/:_id', updateParentCategoryStatus);

module.exports = parentCategoryRouter;