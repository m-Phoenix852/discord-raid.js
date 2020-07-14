const config = require('../config');

module.exports = (clients) => {
    let spamDelay = config.spam_delay;
    let spamMessage = config.message;
    let channels = config.channels;

    let i = 0;

    setInterval(() => {
        clients.forEach(client => {
            let channel = channels[Math.random() * channels.length];
            channel.send(spamMessage);
        });
    }, spamDelay);
}