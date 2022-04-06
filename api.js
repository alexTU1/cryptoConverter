var express = require('express');
var app = express();
var url = require('url');

app.get('/', (req, res)=>{
    var message = 'This is the root webpage of this url';
    res.send(message);
});

app.get('/api/btc', (req, res)=>{
    console.log('I hit the bitcoin endpoint');
    var parsedUrl = url.parse(req.url, true);

    console.log(parsedUrl.query); // returns the full query string object in terminal
    console.log('Dollar amount: $' + parsedUrl.query.usd); // retunrs the value of the usd element inside of the query in terminal

    var usdElement = parsedUrl.query.usd; // storing the element value of usd element
    var usdConverter = (usdElement / 25000).toFixed(2); // converts USD to Bitcoin amount

    var testA = {amountInBitcoin: usdConverter + ' BIT'};       // stores the Bitcoin amount in JSON object
    res.send(testA);                                   // displays the JSON object on the webpage
});

app.get('/api/eth', (req, res)=>{
    console.log('I hit the etherium endpoint');
    var parsedUrl = url.parse(req.url, true); 

    console.log(parsedUrl.query); // returns the full query string object in terminal
    console.log('Dollar amount: $' + parsedUrl.query.usd); // retunrs the value of the usd element inside of the query in terminal

    var usdElement = parsedUrl.query.usd; // storing the element value of usd element
    var usdConverter = (usdElement / 900).toFixed(2); // converts USD to Etherium amount
    
    var testB = {amountInEtherium: usdConverter + ' ETH'};       // stores the Eitherium amount in JSON object
    res.send(testB);                                   // displays the JSON object on the webpage
});

console.log('Navigate to http://localhost:3003/');

app.listen(3003);
