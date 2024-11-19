const fs = require('fs');
const path = require('path');

// Use path to construct the file path correctly
const logFilePath = path.join(__dirname, '../logs.txt');

function logging(logTxT) {
    const log = `${new Date().toISOString()} - ${logTxT}\n`;
    fs.appendFile(logFilePath, log, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
        }
    });
}

module.exports = { logging };
