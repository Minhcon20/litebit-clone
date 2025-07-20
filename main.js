
async function fetchPrices() {
  const coins = ['bitcoin', 'ethereum', 'dogecoin'];
  const res = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=' + coins.join(',') + '&vs_currencies=usd&include_24hr_change=true'
  );
  const data = await res.json();
  const tbody = document.querySelector("#market tbody");
  tbody.innerHTML = '';
  for (const coin of coins) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${coin.toUpperCase()}</td>
      <td>$${data[coin].usd.toFixed(2)}</td>
      <td style="color: ${data[coin].usd_24h_change >= 0 ? 'lime' : 'red'}">
        ${data[coin].usd_24h_change.toFixed(2)}%
      </td>`;
    tbody.appendChild(row);
  }
}
fetchPrices();

function calculateYield() {
  const amount = parseFloat(document.getElementById('amount').value);
  const days = parseInt(document.getElementById('days').value);
  let apr = days === 7 ? 8 : days === 28 ? 12 : 18;
  const profit = amount * (apr / 100) * (days / 365);
  document.getElementById('yield-result').innerText = 
    `Estimated profit: $${profit.toFixed(2)} in ${days} days`;
}

function placeOption() {
  const coin = document.getElementById('option-coin').value;
  const dir = document.getElementById('direction').value;
  const outcome = Math.random() > 0.5 ? 'WIN ✅' : 'LOSE ❌';
  document.getElementById('option-result').innerText =
    `Trade on ${coin.toUpperCase()} going ${dir.toUpperCase()}: ${outcome}`;
}
