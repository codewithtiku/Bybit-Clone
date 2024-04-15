function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function SpotFunc() {
    if (localStorage.getItem('vip')) {
        document.getElementById('spot-usdt').innerHTML = `60,000`;

        // Retrieve the spot value and parse it as a float
        const spotUsdtValue = parseFloat(document.getElementById('spot-usdt').innerHTML.replace(/,/g, ''));

        // Perform the multiplication inside the then block of the fetch operation
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr')
            .then(response => response.json())
            .then(data => {
                const usdtPriceInINR = data.tether.inr;
                const spotMainValue = usdtPriceInINR * spotUsdtValue;

                // Format the spot main value with commas according to the Indian numbering system
                const formattedSpotMainValue = numberWithCommas(spotMainValue.toFixed(2));

                // Update the spot main value with commas
                document.getElementById('spot-main').innerHTML = formattedSpotMainValue;

                // Fetch Bitcoin price in USD
                fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
                    .then(response => response.json())
                    .then(data => {
                        const btcPriceInUSD = data.bitcoin.usd;

                        // Convert spot main value to BTC terms
                        const spotMainValueInBTC = spotMainValue / btcPriceInUSD;

                        // Format spot main value in BTC terms
                        const formattedSpotMainValueInBTC = spotMainValueInBTC.toFixed(8); // assuming 8 decimal places for BTC

                        // Update spot BTC value in the HTML
                        document.getElementById('spot-btc').innerHTML = `= ${formattedSpotMainValueInBTC} BTC`;

                        // Store values in localStorage
                        localStorage.setItem('usdtINR', formattedSpotMainValue);
                        localStorage.setItem('inrBTC', formattedSpotMainValueInBTC);
                    })
                    .catch(error => {
                        console.error('Error fetching Bitcoin price in USD:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching USDT price in INR:', error);
            });
    } else {
        localStorage.removeItem('usdtINR');
        localStorage.removeItem('inrBTC');
        document.getElementById('spot-main').innerHTML = `0.00`;
        document.getElementById('spot-btc').innerHTML = `= 0.00000000 BTC`;
        document.getElementById('spot-usdt').innerHTML = `0.0000`;
    }
}

SpotFunc();
