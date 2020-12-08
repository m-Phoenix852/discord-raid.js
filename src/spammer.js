const config = require('../config');

module.exports = (client) => {
    let spamDelay = config.spam_delay;
    let spamMessage = config.message;
    let channels = config.channels;

    setInterval(() => {
      let channel = client.channels.get(channels[Math.floor(Math.random() * channels.length)]);
      if(!channel) return;
      
      if(Array.isArray(spamMessage)) for(let msg of spamMessage) channel.send(msg)
      else channel.send(spamMessage);
    }, spamDelay);
}
