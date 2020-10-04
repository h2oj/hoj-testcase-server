#!usr/bin/env node
/* eslint-disable no-unused-vars */

// HOJ - An online judge.
// Copyright (c) 2019 Alex Cui.
// This project is released with AGPLv3.0

'use strict';

const express = require('express');
const logger = require('./logger.js');
const config = require('../config.js');
const router = require('./route.js');


function printWelcomeInfo() {
    console.log('--------------------------------------------------------------------------');
    console.log('     __  __            __                                    ____       __');
    console.log('    / / / /__  __ ____/ /_____ ____   ____ _ ___   ____     / __ \\     / /');
    console.log('   / /_/ // / / // __  // ___// __ \\ / __ `// _ \\ / __ \\   / / / /__  / / ');
    console.log('  / __  // /_/ // /_/ // /   / /_/ // /_/ //  __// / / /  / /_/ // /_/ /  ');
    console.log(' /_/ /_/ \\__, / \\__,_//_/    \\____/ \\__, / \\___//_/ /_/   \\____/ \\____/   ');
    console.log('        /____/                     /____/                                 ');
    console.log('--------------------------------------------------------------------------');
}

async function run() {
    printWelcomeInfo();

    const app = express();

    app.use('/', router);

    /*
    app.use((req, res, next) => {
        res.redirect('/404');
    });
    */

    app.listen(config.hoj.port, config.hoj.host, () => {
        logger.log(`HOJ is listening on ${config.hoj.host}:${config.hoj.port}.`);
    });
}

run();
