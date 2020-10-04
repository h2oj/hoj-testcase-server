'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const stringRandom = require('string-random');
const { hoj_testcase } = require('../../../config');

const config = require('../../config');
const logger = require('../../logger');


async function getSession (req, res) {
    /// TODO 
    if (req.params.token == hoj_testcase.token) {
        var token = stringRandom();
        global.__hoj.session.push(token);
        res.send(token);
    } else {
        res.send("No token, No access. Give Grandfather Zhua Ba.", 503)
    }
}

module.exports = getSession;