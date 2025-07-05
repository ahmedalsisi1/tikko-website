
const ticker = document.getElementById('ticker');
async function updatePrices() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,luna-classic,pepe,shiba-inu&vs_currencies=usd');
    const data = await res.json();
    ticker.innerHTML = `
      <marquee behavior="scroll" direction="left">
        <strong>Tikko</strong> — $0.00001 &nbsp;&nbsp;
        BTC: $${data.bitcoin.usd} &nbsp;&nbsp;
        ETH: $${data.ethereum.usd} &nbsp;&nbsp;
        BNB: $${data.binancecoin.usd} &nbsp;&nbsp;
        LUNC: $${data['luna-classic'].usd} &nbsp;&nbsp;
        PEPE: $${data.pepe.usd} &nbsp;&nbsp;
        SHIBA: $${data['shiba-inu'].usd}
      </marquee>
    `;
  } catch (e) {
    ticker.innerHTML = "Unable to load prices.";
  }
}
updatePrices();
setInterval(updatePrices, 5000);
