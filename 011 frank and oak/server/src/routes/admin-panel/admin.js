const express = require('express');
const { adminLogin } = require('../../controllers/controllers');
const multer = require('multer');

const adminRouter = express.Router();

adminRouter.post('/login',multer().none(), adminLogin);

module.exports = adminRouter;