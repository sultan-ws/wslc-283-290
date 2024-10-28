const express = require('express');
const { createParentCategory } = require('../../controllers/controllers');

const parentCategoryRouter = express.Router();

parentCategoryRouter.post('/create-category', createParentCategory);

module.exports = parentCategoryRouter;