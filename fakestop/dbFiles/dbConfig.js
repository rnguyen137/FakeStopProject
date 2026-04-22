// Database configuration for connecting to the SQL Server database

const config = {
    user: 'FakeStopEmployee',
    password: '1234',
    server: 'DESKTOP-0ATND86',
    database: 'FakeStopDB',
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true,
    },
    port: 1433
}

module.exports = config;