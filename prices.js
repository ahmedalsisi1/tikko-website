
const coins = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "binancecoin", symbol: "BNB" },
  { id: "shiba-inu", symbol: "SHIBA" },
  { id: "terra-luna-classic", symbol: "LUNC" },
  { id: "pepe", symbol: "PEPE" },
  { id: "dogecoin", symbol: "DOGE" },
  { id: "solana", symbol: "SOL" },
  { id: "ripple", symbol: "XRP" },
  { id: "the-open-network", symbol: "TON" }
];

let lastPrices = {};

async function fetchPrices() {
  try {
    const ids = coins.map(c => c.id).join(',');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`;
    const response = await fetch(url);
    const data = await response.json();

    const ticker = document.getElementById("crypto-ticker");
    if (!ticker) return;

    let html = `<span class="ticker-item">TIKKO — Coming Soon</span>`;
    coins.forEach(c => {
      const price = data[c.id]?.usd;
      if (price !== undefined) {
        const old = lastPrices[c.id] ?? price;
        const cls = price > old ? 'price-up' : price < old ? 'price-down' : '';
        html += `<span class="ticker-item">${c.symbol}: <span class="\${cls}">\$${price.toFixed(4)}</span></span>`;
        lastPrices[c.id] = price;
      }
    });

    ticker.innerHTML = html;
  } catch (err) {
    console.error("Price fetch error:", err);
  }
}

fetchPrices();
setInterval(fetchPrices, 5000);
