const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~tARQkQIb#8t-wl7oW2yg8M76ZwsKCLRnKRFAUchN8FnNathG7BrM'
};
