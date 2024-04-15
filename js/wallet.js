function WalletFunc(){
    if(localStorage.getItem('vip')){
        document.getElementById('spot-amt').innerHTML = localStorage.getItem('usdtINR');
        document.getElementById('main-amt').innerHTML = localStorage.getItem('usdtINR');
        document.getElementById('wallet-btc').innerHTML = "= " + localStorage.getItem('inrBTC') + " BTC";
    }
    else{
        
        document.getElementById('spot-amt').innerHTML = `0.00`
        document.getElementById('main-amt').innerHTML = `0.00`
        document.getElementById('wallet-btc').innerHTML = '= 0.000000 BTC'
    }
}
WalletFunc();
// Make an HTTP GET request to fetch the USDT price in INR from the CoinGecko API
fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Extract the USDT price in INR from the response data
    const usdtPriceInINR = data.tether.inr;
    
    // Store the USDT price in INR in a variable
    const usdtPriceInINRVariable = usdtPriceInINR;

    // Now you can use the usdtPriceInINRVariable to access the live USDT price in INR
  })
  .catch(error => {
    console.error('Error fetching USDT price in INR:', error);
  });
