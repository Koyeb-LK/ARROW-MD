const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2JlwmATD#zLegNqDof9o5a9R08pD-_eaz35j3zTtGQaV_BNEuhOY",
MONGODB: process.env.MONGODB || "mongodb://mongo:JtVzjswyrKOoJqkDCqukovKOIIWzMHwh@junction.proxy.rlwy.net:11700",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? '': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '': process.env.GITHUB_AUTH_TOKEN
};
