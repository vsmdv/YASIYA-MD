const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~tVhSGAAI#p3A4G6H4FKp1Ra0GCQodD76rfynJo314jWV1-LaHVeM'
};
