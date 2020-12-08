const Discord = require('discord.js');
const fs = require('fs');
const tokens = new Array();
const config = require('../config');

module.exports = async () => {
let tokens = fs.readFileSync('./tokens.txt', 'utf8').split("\n");

for(let token of tokens){
    let client = new Discord.Client();
    client.login(token).then(() => {
        console.log(`${client.user.tag} logged in!`)
        require("./spammer")(client);
    }).catch(e => {
        throw `Error logging in with the token "${token}": ${e}`
    })
}  

}
