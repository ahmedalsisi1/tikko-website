
async function fetchPrices() {
  const container = document.getElementById("crypto-prices");
  container.innerHTML = "Loading prices...";
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,terra-luna,pepe,shiba-inu&vs_currencies=usd");
    const data = await res.json();
    container.innerHTML = `
      <li>Bitcoin (BTC): $${data.bitcoin.usd}</li>
      <li>Ethereum (ETH): $${data.ethereum.usd}</li>
      <li>BNB: $${data.binancecoin.usd}</li>
      <li>LUNC: $${data["terra-luna"].usd}</li>
      <li>PEPE: $${data.pepe.usd}</li>
      <li>SHIBA: $${data["shiba-inu"].usd}</li>
    `;
  } catch (err) {
    container.innerHTML = "Error loading prices.";
  }
}

setInterval(fetchPrices, 10000);
fetchPrices();
