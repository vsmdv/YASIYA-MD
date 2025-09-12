const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~iko20CDJ#3lWOWFyrNORJmQSZ8xQS1w9gauSM2FRI5ZimM2sn-U8'
};
