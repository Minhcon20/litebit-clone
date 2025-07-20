
async function fetchPrice() {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await res.json();
    document.getElementById('price').innerText = 'BTC Price: $' + data.bitcoin.usd;
}
fetchPrice();
setInterval(fetchPrice, 30000); // refresh every 30s
