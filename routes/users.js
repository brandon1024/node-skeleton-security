/* Retrieve Router Handler */
const express = require('express');
const router = express.Router();

/* Debugger */
const debug = require('debug')('route-user');

/* Models */
const User = require('../models/user');


/* Views */


/* API Endpoints */
router.get('/', function (req, res, next) {
    User.findAll().then(function (users) {
        res.send(users);
    });
});


module.exports = router;