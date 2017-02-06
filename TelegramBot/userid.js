// Include required libraries
var Bot = require('node-telegram-bot-api');
var token = 'Change with your token bot';

// Initialize and start Telegram BOT (insert your real token)
var bot = new Bot(token, {polling: true});

// Attach event on every received message 
bot.on('message', function (message) {
  echo(message);
});

console.log("BOT ready!");

// Function that handles a new message
function echo(message) {
  var fromId = message.from.id;
  var resp = 'User ID ' + message.from.id + ' says "' + message.text + '"';
  bot.sendMessage(fromId,resp);
}
