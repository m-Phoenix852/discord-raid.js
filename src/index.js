const Discord = require('discord.js');
const clients = new Array();
const fs = require('fs');
const tokens = new Array();
const config = require('./config');

module.exports = async () => {
fs.readFile('./tokens.txt', 'utf8', async (err, content) => {
    if(err) console.error(err);
    for(let token of content.split("\n")){
        tokens.push(token);
    }
});

for(let token of tokens){
    let client = new Discord.Client();
    client.login(token).then(() => {
        console.log(`${client.user.tag} logged in!`)
        clients.push(client);
    }).catch(e => {
        throw `Error logging in with the token "${token}": ${e}`
    })
}
}