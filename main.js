
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cmatic-network%2Cdogecoin&vs_currencies=usd%2Ceur&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true')
.then(response => response.json())
.then(data => {
  const coins = Object.keys(data);
  const coinList = document.querySelector('.coin-list');
  coins.forEach(coin => {
    const coinDiv = document.createElement('div');
    coinDiv.classList.add('coin');
    const coinImage = document.createElement('img');
    coinImage.src = `.//images/${coin}.png`;
    coinDiv.appendChild(coinImage);
    const coinPrices = document.createElement('div');
    coinPrices.classList.add('coin-prices');
    const coinPriceUSD = document.createElement('h3');
    coinPriceUSD.textContent = `$${data[coin].usd}`;
    coinPrices.appendChild(coinPriceUSD);
    const coinPriceEUR = document.createElement('h3');
    coinPriceEUR.textContent = `€${data[coin].eur}`;
    coinPrices.appendChild(coinPriceEUR);
    const coinName = document.createElement('p');
    coinName.textContent = coin;
    coinPrices.appendChild(coinName);
    coinDiv.appendChild(coinPrices);
    coinList.appendChild(coinDiv);
  });
})
.catch(error => {
  console.error(error);
});
  // get the button element
  var button = document.getElementById("reloadButton");

  // add an event listener to the button
  button.addEventListener("click", function() {
    location.reload();
  });
