var crypto = require("crypto-js");

var message = "şifrelenecek olan message... ";
var key = "123abc+!";

//Encrypt 
var sifreliMesaj = crypto.AES.encrypt(message, key);

console.log("Şifreli Metin  : " + " " + sifreliMesaj);

//Decrypt 

var byte = crypto.AES.decrypt(sifreliMesaj, key);
var decrypteMessages = byte.toString(crypto.enc.Utf8);

console.log("original messaga : " + decrypteMessages);