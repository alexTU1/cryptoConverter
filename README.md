# cryptoConverter

•Allow users to input USD amount in browser and convert to BIT or ETH.


•Using a localHost, users will be able to add the pathname endpoints "/api/btc" or "/api/eth" to choose which crypto they want to use.


•After typing specified pathname in browser, users can then type the path's search components ?usd="n" where n= the USD amount they wish to use when converting.


•The webpage will then generate the allocated amount of crypto that the user can purchase with that specific USD amount.


•For the sake of this sample code, BIT is valued at $25,000 and ETH is valued at $900.


•In your terminal all query objects added in the search components will be added to a JSON object. 


•You can add multiple query objects in browser by separating query objects with '&' following with  specifiedQueryObj = value


•Ex: localhost:3000/api/btc?usd=8080&fname=alex&lname=smith

     Resulting JSON object in terminal: {usd: '8080', fname: 'alex', lname: 'smith'}
		 
     Resulting webpage content: {amountInBitcoin: 8080 BIT}
