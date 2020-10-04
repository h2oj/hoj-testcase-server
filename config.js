module.export = {
    hoj: {
        host: '0.0.0.0',
        port: 1024,
        problemPath: './data/problem',
        submissionPath: './data/submission',
    },
    db: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'scoj-testcase',
        password: 'scoj-password',
        database: 'scoj-testcase',
    }
}