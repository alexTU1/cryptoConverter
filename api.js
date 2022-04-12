var express = require('express');
var app = express();
var url = require('url');
var pathName= ' ';


pathName = '/';
app.get(pathName, (req, res)=>{
    var message = 'This is the root webpage of this url';
    res.status(200).send(message);
    
});

pathName = '/api/btc';
app.get(pathName, (req, res)=>{
    console.log('I hit the bitcoin endpoint');
    var parsedUrl = url.parse(req.url, true);

    console.log(parsedUrl.query); // returns the full query string object in terminal
    console.log('Dollar amount: $' + parsedUrl.query.usd); // retunrs the value of the usd element inside of the query in terminal

    var usdElement = parsedUrl.query.usd; // storing the element value of usd element
    var usdConverter = (usdElement / 25000).toFixed(2); // converts USD to Bitcoin amount

    var testA = {amountInBitcoin: usdConverter + ' BIT'};       // stores the Bitcoin amount in JSON object
    res.status(200).send(testA);                                   // displays the JSON object on the webpage
    
});

pathName = '/api/eth';
app.get(pathName, (req, res)=>{
    console.log('I hit the etherium endpoint');
    var parsedUrl = url.parse(req.url, true); 

    console.log(parsedUrl.query); // returns the full query string object in terminal
    console.log('Dollar amount: $' + parsedUrl.query.usd); // retunrs the value of the usd element inside of the query in terminal

    var usdElement = parsedUrl.query.usd; // storing the element value of usd element
    var usdConverter = (usdElement / 900).toFixed(2); // converts USD to Etherium amount
    
    var testB = {amountInEtherium: usdConverter + ' ETH'};       // stores the Eitherium amount in JSON object
    res.status(200).send(testB);                                        // displays the JSON object on the webpage
                                       
});

app.all('*', (req, res)=> {                        //sends 404 message to webpage
    console.log('Invalid Path Name');
    res.status(404).send('404: Page not found.'); 
});


console.log('Navigate to http://localhost:3003/'); //port number is interchangeable

app.listen(3003); //port number is interchangeable
