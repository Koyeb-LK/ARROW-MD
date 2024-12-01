const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=LrwCCCJS#D9PQlwXvh9PXe-iI49xWme3n0wddC8E3sXP4WxWPB00",
MONGODB: process.env.MONGODB || "mongodb://mongo:JtVzjswyrKOoJqkDCqukovKOIIWzMHwh@junction.proxy.rlwy.net:11700",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'Asithabzkejx': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
