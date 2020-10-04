'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const { hoj_testcase } = require('../../../config');

const config = require('../../config');
const logger = require('../../logger');


async function getData (req, res) {
    console.log(__hoj)
    if (__hoj.session !== undefined){
        if (__hoj.session.indexOf(req.params.access) !== -1){
            /// TODO 
            try {
                var file = fs.readFileSync(`${hoj_testcase.problemPath}/${req.params.pid}/${req.params.filename}`,'utf8');
                res.send(file);
            } catch (error) {
                res.send("Has error",404);
            }
        } else {
            res.send("Check Accesskey", 502)
        }
    }   
}

module.exports = getData;