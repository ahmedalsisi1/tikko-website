
const coins = [
  { id: 'bitcoin', symbol: 'BTC' },
  { id: 'ethereum', symbol: 'ETH' },
  { id: 'binancecoin', symbol: 'BNB' },
  { id: 'shiba-inu', symbol: 'SHIBA' },
  { id: 'pepe', symbol: 'PEPE' },
  { id: 'terra-luna-classic', symbol: 'LUNC' },
  { id: 'dogecoin', symbol: 'DOGE' },
];

async function updatePrices() {
  const ids = coins.map(c => c.id).join(',');
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
  );
  const data = await res.json();

  const bar = document.getElementById('crypto-bar');
  bar.innerHTML = '';
  coins.forEach(c => {
    const p = document.createElement('div');
    const price = data[c.id]?.usd ?? 'N/A';
    const imgSrc = `https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png`;
    p.innerHTML = `
      <img src="https://cryptoicons.org/api/icon/${c.symbol.toLowerCase()}/50" alt="${c.symbol}">
      <strong>${c.symbol}:</strong> $${price.toLocaleString()}
    `;
    bar.appendChild(p);
  });
}

updatePrices();
setInterval(updatePrices, 1000);
