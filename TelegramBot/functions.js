// Function that checks if the user is authorized (its id is in the array)
function isAuthorized(userid) {

  for(i = 0; i < authorized_users.length; i++) 
    if(authorized_users[i] == userid) return true;
 
  return false;
}

//Sveglia
function sveglia(fromId){
	var resp = "Sveglia!";
	bot.sendMessage(fromId, resp);
}

// For todays date;
function today() {
	var data = new Date();
    return ((data.getDate() < 10)?"0":"") + data.getDate() +"/"+(((data.getMonth()+1) < 10)?"0":"") + (data.getMonth()+1) +"/"+ data.getFullYear();
}

// For the time now
function timeNow() {
	var data = new Date();
    return ((data.getHours() < 10)?"0":"") + data.getHours() +":"+ ((data.getMinutes() < 10)?"0":"") + data.getMinutes() +":"+ ((data.getSeconds() < 10)?"0":"") + data.getSeconds();
}

// messaggio benvenuto
function mexBenvenuto(nome,cognome){
	return 'Ciao ' + nome + ' ' + cognome
	+ ' benvenuto su EsperienzaHiTech www.esperienzahitech.it\n' +
	"/help: per info"
}

// messaggio sveglia
function mexSveglia(secondi){
	return "Sveglia impostata fra " + secondi + " secondi";
}

exports.sveglia = sveglia;
exports.isAuthorized = isAuthorized;
exports.today = today;
exports.timeNow = timeNow;
exports.mexBenvenuto = mexBenvenuto;
exports.mexSveglia = mexSveglia;

/*
// Matches /echo [whatever] 
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});

// Matches /echo [whatever] 
bot.onText(/\/time/, function (msg, match) {
  var fromId = msg.from.id;
  var currentdate = new Date(); 
  var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();
  var resp = datetime;
  console.log(datetime);
  bot.sendMessage(fromId, resp);
});
 

 // Any kind of message 
bot.on(/\/photo/, function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id 
  var photo = 'cat.png';
  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});
*/