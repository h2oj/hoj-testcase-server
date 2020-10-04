const express = require('express');

const api = require('./routes/api');

let router = express.Router();

router.get('/api/v1/getData/:pid/:filename', api.v1.getData);

module.exports = router;
