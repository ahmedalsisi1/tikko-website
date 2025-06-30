async function fetchPrices() {
  const pricesElement = document.getElementById("crypto-prices");
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,terra-luna,shiba-inu,pepe,dogecoin,solana,cardano,polygon&vs_currencies=usd');
    const data = await res.json();
    pricesElement.innerHTML = Object.entries(data)
      .map(([key, val]) => \`\${key.toUpperCase()}: \$\${val.usd}\`)
      .join('<br>');
  } catch (e) {
    pricesElement.innerHTML = "Failed to load prices.";
  }
}
fetchPrices();
setInterval(fetchPrices, 10000);