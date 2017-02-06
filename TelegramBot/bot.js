// Authorized users, replace with your real IDs
authorized_users = [
  "Change with Authorized users"
];

var TelegramBot = require('node-telegram-bot-api');
var myFunction = require('./functions.js');
var myConstant = require('./constants.js');
var token = 'Change with your token bot';
// Setup polling way 
bot = new TelegramBot(token, {polling: true});

// Attach event on every received message 
bot.on('message', function (message) {
  parseMessage(message);
});

console.log("BOT ready!");

// Function that handles a new message
function parseMessage(message) {

  //if(!myFunction.isAuthorized(message.from.id)) return;

  switch(true) {
  
	case message.text == "/start":
		var fromId = message.from.id;
		var resp = myFunction.mexBenvenuto(message.from.first_name,message.from.last_name);
		bot.sendMessage(fromId, resp);
		break;
  
	case message.text == "/help":
		var fromId = message.from.id;
		var resp = commands;
		bot.sendMessage(fromId, resp);
		break;
  
    case message.text == "/time":
		var fromId = message.from.id;
		var currentdate = new Date(); 
		var resp = myFunction.today() + " @ " + myFunction.timeNow();
		bot.sendMessage(fromId, resp);
		break;

    case message.text == "/photo":
		var chatId = message.chat.id;
		// photo can be: a file path, a stream or a Telegram file_id 
		var photo = 'EHiT_min.png';
		bot.sendPhoto(chatId, photo, {caption: 'www.esperienzahitech.it'});
		break;
		
	case /\/echo (.+)/.test(message.text):
		var fromId = message.from.id;
		var resp = message.text.substring(message.entities[0].length);
		bot.sendMessage(fromId, resp);
		break;
	
	case /\/sendMex (.+)/.test(message.text):
		var fromId = "Change with idUser of destination";
		var resp = message.text.substring(message.entities[0].length);
		bot.sendMessage(fromId, resp);
		break;
		
	case /\/timer (.+)/.test(message.text):
		var fromId = message.from.id;
		var secondi = message.text.substring(message.entities[0].length).trim();
		setTimeout(myFunction.sveglia, secondi * 1000,fromId);
		var resp = myFunction.mexSveglia(secondi);
		bot.sendMessage(fromId, resp);
		break;
	
	default:
		/*
		var fromId = message.from.id;
		var resp = 'Ciao ' + message.from.first_name + ' ' + message.from.last_name
		+ ' benvenuto su EsperienzaHiTech esperienzahitech.it';
		bot.sendMessage(fromId, resp);
		*/
  }
}