const express = require('express');

const api = require('./routes/api');

let router = express.Router();

router.get('/api/v1/getData/:pid/:filename/:access', api.v1.getData);
router.get('/api/v1/getSession/:token', api.v1.getSession);

module.exports = router;
