
const prices = [
  { symbol: "BTC", price: "$63,000", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
  { symbol: "ETH", price: "$3,100", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
  { symbol: "BNB", price: "$580", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
  { symbol: "SHIBA", price: "$0.000018", logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png" },
  { symbol: "LUNC", price: "$0.000072", logo: "https://cryptologos.cc/logos/terra-luna-luna-logo.png" },
  { symbol: "PEPE", price: "$0.0000012", logo: "https://cryptologos.cc/logos/pepe-pepe-logo.png" },
  { symbol: "DOGE", price: "$0.12", logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png" },
  { symbol: "TON", price: "$7.20", logo: "https://cryptologos.cc/logos/toncoin-ton-logo.png" },
  { symbol: "SOL", price: "$145", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
  { symbol: "XRP", price: "$0.49", logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png" }
];

function renderPrices() {
  const container = document.getElementById('ticker-container');
  container.innerHTML = "";
  prices.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${item.logo}" width="20" /> ${item.symbol}: ${item.price}`;
    container.appendChild(div);
  });
}

setInterval(renderPrices, 4000);
renderPrices();
    