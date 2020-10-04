'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

const config = require('../../config');
const logger = require('../../logger');


async function getData (req, res) {
    /// TODO 
    res.redirect('/');
}

module.exports = {
    getData
};