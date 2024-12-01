const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=LrwCCCJS#D9PQlwXvh9PXe-iI49xWme3n0wddC8E3sXP4WxWPB00",
MONGODB: process.env.MONGODB || "mongodb://mongo:RMzLlxhpMeeNOOWmuAuERAPDxUcSdOZo@autorack.proxy.rlwy.net:41909",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? '': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '': process.env.GITHUB_AUTH_TOKEN
};
