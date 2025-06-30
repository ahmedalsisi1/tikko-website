
const container = document.getElementById('crypto-prices');

async function fetchPrices() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await res.json();

    container.innerHTML = data.slice(0, 15).map(coin => `
      <div style="margin-bottom:10px">
        <img src="${coin.image}" alt="${coin.name}" style="width:20px;vertical-align:middle;margin-right:6px"/>
        <strong>${coin.name}</strong>: $${coin.current_price}
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = '<p style="color:red">Failed to load prices.</p>';
  }
}

fetchPrices();
setInterval(fetchPrices, 4000);
