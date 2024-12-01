const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=LrwCCCJS#D9PQlwXvh9PXe-iI49xWme3n0wddC8E3sXP4WxWPB00",
MONGODB: process.env.MONGODB || "mongodb+srv://athulakumara604:qBwvqo6IM64eT1SL@cluster0.wr7rx.mongodb.net/",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'Koyeb-LK: process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
